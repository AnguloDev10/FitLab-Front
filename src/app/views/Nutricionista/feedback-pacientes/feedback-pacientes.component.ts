import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Experience} from "../../../model/Experience";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {NutrivService} from "../../../services/nutriv.service";
import {Router} from "@angular/router";
import {Feedback} from "../../../model/Feedback";

@Component({
  selector: 'app-feedback-pacientes',
  templateUrl: './feedback-pacientes.component.html',
  styleUrls: ['./feedback-pacientes.component.css']
})
export class FeedbackPacientesComponent implements OnInit, AfterViewInit {

  @ViewChild('dietForm', {static: false})
  FeedbackForm!: NgForm;
  FeedbackData: Feedback;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'description', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  isEditMode = false;
  private _: any;

  constructor(private httpDataService: NutrivService, private router: Router) {
    this.FeedbackData = {} as Feedback;
  }
  ngOnInit(): void {
    // @ts-ignore
    this.dataSource.sort = this.sort;
    this.getAllFeedback();
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
  getAllFeedback(): void {
    this.httpDataService.getList_().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(this.dataSource.data);
    });
  }
  editItemF(element: any): void {
    console.log(element);
    this.FeedbackData = this._.cloneDeep(element);
    this.isEditMode = true;
  }
  cancelEdit_(): void {
    this.isEditMode = false;
    this.FeedbackForm.resetForm();
  }
  deleteItem(id: number): void {
    this.httpDataService.DeleteItem_(id).subscribe(() => {
      // @ts-ignore
      this.dataSource.data = this.dataSource.data.filter((o: Experience) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }
  addFeedback(): void {
    const newExperience = {description: this.FeedbackData.description};
    this.httpDataService.createItem_(newExperience).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map(o => o);
    });
  }
  updateFeedback(): void {
    this.httpDataService.updateItem_(this.FeedbackData.id, this.FeedbackData)
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
  onSubmit(): void {
    // @ts-ignore
    if (this.experienceForm.form.valid) {
      if (this.isEditMode) {
        this.updateFeedback();
      } else {
        this.addFeedback();
      }
    } else {
      console.log('Invalid Data');
    }
  }
  navigateToAddFeedback(): void {
    this.router.navigate(['/feedback/new']).then(() => null);
  }
  navigateToEditFeedback(feedbackId: any): void {
    this.router.navigate([`/feedback/${feedbackId}`]).then(() => null);
  }
  refresh(): void {
    console.log('about to reload');
    this.getAllFeedback();
  }

}
