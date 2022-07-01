import {Component, Input, OnInit} from '@angular/core';
import {ClienteService} from "../../services/cliente.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nutri-card',
  templateUrl: './nutri-card.component.html',
  styleUrls: ['./nutri-card.component.css']
})
export class NutriCardComponent implements OnInit {

  id : any
  @Input() member: any;
  constructor(
    private _clienteService : ClienteService,private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("userid")
  }

  addLike(member: any) {
    console.log(this.id)
    this.toastr.success('200', 'OK');
    this._clienteService.likeNutricionistas(this.id,member.id).subscribe(response=>{
      console.log(this.id)

    })
  }


}
