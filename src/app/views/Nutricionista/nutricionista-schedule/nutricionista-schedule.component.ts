import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NutrivService} from "../../../services/nutriv.service";
import {NgForm} from "@angular/forms";
import {Diet} from "../../../model/diet";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";
import {Schedule} from "../../../model/Schedule";

@Component({
  selector: 'app-nutricionista-schedule',
  templateUrl: './nutricionista-schedule.component.html',
  styleUrls: ['./nutricionista-schedule.component.css']
})
export class NutricionistaScheduleComponent implements OnInit, AfterViewInit {
  @ViewChild('scheduleForm', {static: false})
  scheduleForm!: NgForm;
  scheduleData: Schedule;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'starat', 'endat','state','actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  isEditMode = false;
  private _: any;

  constructor(private httpDataService: NutrivService, private router: Router) {
    this.scheduleData = {} as Schedule;
  }

  ngOnInit(): void {
    // @ts-ignore
    this.dataSource.sort = this.sort;
    this.getAllSchedules();
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getAllSchedules(): void {
    this.httpDataService.getListS().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(this.dataSource.data);
    });
  }
  editItemS_(element: any): void {
    console.log(element);
    this.scheduleData = this._.cloneDeep(element);
    this.isEditMode = true;
  }
  cancelEditS_(): void {
    this.isEditMode = false;
    this.scheduleForm.resetForm();
  }
  deleteItemS_(id: number): void {
    this.httpDataService.deleteItemS(id).subscribe(() => {
      // @ts-ignore
      this.dataSource.data = this.dataSource.data.filter((o: Diet) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }
  addSchedule(): void {
    const newSchedule = {starat: this.scheduleData.starat, endat: this.scheduleData.endat,state: this.scheduleData.state};
    this.httpDataService.createItem(newSchedule).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map(o => o);
    });
  }
  updateSchedule(): void {
    this.httpDataService.updateItemS(this.scheduleData.id, this.scheduleData)
      .subscribe((response: any) => {
        // @ts-ignore
        this.dataSource.data = this.dataSource.data.map((o: Schedule) => {
          if (o.id === response.id) {
            o = response;
          }
          return o;
        });
        this.cancelEditS_();
      });
  }
  onSubmit(): void {
    // @ts-ignore
    if (this.scheduleFormForm.form.valid) {
      if (this.isEditMode) {
        this.updateSchedule();
      } else {
        this.addSchedule();
      }
    } else {
      console.log('Invalid Data');
    }
  }
  navigateToAddSchedule(): void {
    this.router.navigate(['/schedules/new']).then(() => null);
  }
  navigateToEditSchedule(scheduleId: any): void {
    this.router.navigate([`/schedules/${scheduleId}`]).then(() => null);
  }
  refresh(): void {
    console.log('about to reload');
    this.getAllSchedules();
  }
}
