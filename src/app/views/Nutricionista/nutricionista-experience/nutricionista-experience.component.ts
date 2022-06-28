import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NutrivService} from "../../../services/nutriv.service";
import {NgForm} from "@angular/forms";
import {Diet} from "../../../model/diet";
import {Experience} from "../../../model/Experience";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nutricionista-experience',
  templateUrl: './nutricionista-experience.component.html',
  styleUrls: ['./nutricionista-experience.component.css']
})
export class NutricionistaExperienceComponent implements OnInit, AfterViewInit {
  @ViewChild('dietForm', {static: false})
  experienceForm!: NgForm;
  experienceData: Experience;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'title', 'description', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  isEditMode = false;
  private _: any;

  constructor(private httpDataService: NutrivService, private router: Router) {
    this.experienceData = {} as Experience;
  }
  ngOnInit(): void {
    // @ts-ignore
    this.dataSource.sort = this.sort;
    this.getAllExperiences();
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
  getAllExperiences(): void {
    this.httpDataService.getList_().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(this.dataSource.data);
    });
  }
  editItem_(element: any): void {
    console.log(element);
    this.experienceData = this._.cloneDeep(element);
    this.isEditMode = true;
  }
  cancelEdit_(): void {
    this.isEditMode = false;
    this.experienceForm.resetForm();
  }
  deleteItem_(id: number): void {
    this.httpDataService.DeleteItem_(id).subscribe(() => {
      // @ts-ignore
      this.dataSource.data = this.dataSource.data.filter((o: Experience) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }
  addExperience(): void {
    const newExperience = {name: this.experienceData.name, address: this.experienceData.description};
    this.httpDataService.createItem_(newExperience).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map(o => o);
    });
  }
  updateExperience(): void {
    this.httpDataService.updateItem_(this.experienceData.id, this.experienceData)
      .subscribe((response: any) => {
        // @ts-ignore
        this.dataSource.data = this.dataSource.data.map((o: Diet) => {
          if (o.id === response.id) {
            o = response;
          }
          return o;
        });
        this.cancelEdit_();
      });
  }
  onSubmit_(): void {
    // @ts-ignore
    if (this.experienceForm.form.valid) {
      if (this.isEditMode) {
        this.updateExperience();
      } else {
        this.addExperience();
      }
    } else {
      console.log('Invalid Data');
    }
  }
  navigateToAddExperience(): void {
    this.router.navigate(['/experiences/new']).then(() => null);
  }
  navigateToEditExperience(experiencesId: any): void {
    this.router.navigate([`/experiences/${experiencesId}`]).then(() => null);
  }
  refresh(): void {
    console.log('about to reload');
    this.getAllExperiences();
  }
}

