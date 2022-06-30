import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sideclient',
  templateUrl: './sideclient.component.html',
  styleUrls: ['./sideclient.component.css']
})
export class SideclientComponent implements OnInit {

  name: any
  constructor(private router: Router ) {
    this.name = localStorage.getItem('name')
  }

  ngOnInit(): void {

  }
  logout() {
    localStorage.removeItem('userid');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    this.router.navigateByUrl('/');
  }

}
