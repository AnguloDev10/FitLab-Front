import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Diet} from "../../../model/diet";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {NutrivService} from "../../../services/nutriv.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.css']
})
export class DietsComponent implements OnInit, AfterViewInit {
  @ViewChild('dietForm', { static: false })
  dietForm: NgForm | undefined;
  dietData: Diet;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'title', 'description', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  isEditMode = false;
  private _: any;

  constructor(private httpDataService: NutrivService, private router: Router) {
    this.dietData = {} as Diet;
  }

  ngOnInit(): void {
    // @ts-ignore
    this.dataSource.sort = this.sort;
    this.getAllDiets();
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
  getAllDiets(): void {
    this.httpDataService.getList().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(this.dataSource.data);
    });
  }
  editItem(element: any): void {
    console.log(element);
    this.dietData = this._.cloneDeep(element);
    this.isEditMode = true;
  }
  cancelEdit(): void {
    this.isEditMode = false;
    // @ts-ignore
    this.dietForm.resetForm();
  }
  deleteItem(id: number): void {
    this.httpDataService.deleteItem(id).subscribe(() => {
      // @ts-ignore
      this.dataSource.data = this.dataSource.data.filter((o: Diet) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }
  addDiet(): void {
    const newDiet = {name: this.dietData.title, address: this.dietData.description};
    this.httpDataService.createItem(newDiet).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map(o => o);
    });
  }
  updateDiet(): void {
    this.httpDataService.updateItem(this.dietData.id, this.dietData)
      .subscribe((response: any) => {
        // @ts-ignore
        this.dataSource.data = this.dataSource.data.map((o: Diet) => {
          if (o.id === response.id) {
            o = response;
          }
          return o;
        });
        this.cancelEdit();
      });
  }
  onSubmit(): void {
    // @ts-ignore
    if (this.dietForm.form.valid) {
      if (this.isEditMode) {
        this.updateDiet();
      } else {
        this.addDiet();
      }
    } else {
      console.log('Invalid Data');
    }
  }
  navigateToAddDiet(): void {
    this.router.navigate(['/diets/new']).then(() => null);
  }
  navigateToEditDiet(dietId: any): void {
    this.router.navigate([`/diets/${dietId}`]).then(() => null);
  }
  refresh(): void {
    console.log('about to reload');
    this.getAllDiets();
  }
}

export class NutricionistaDietsComponent {
}
