
import {Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  name: any
  constructor(private router: Router ) {
    this.name = localStorage.getItem('name')
  }

  ngOnInit(): void {
  }
  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  logout() {
    localStorage.removeItem('userid');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    this.router.navigateByUrl('/');
  }
}
