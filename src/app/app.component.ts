import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _storage:StorageService){}

  ngOnInit(): void {
    this.validaLogin();
  }

  title = 'FitLab-Front';
  sideBarOpen = true;
  isLogged:boolean = false;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


  validaLogin(){
    let storage =  this._storage.getItem('user') != null;
    if(storage){
      this.isLogged = true;
    }
  }
}
