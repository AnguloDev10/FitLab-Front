import {Component, Input, OnInit} from '@angular/core';
import {ClienteService} from "../../services/cliente.service";

@Component({
  selector: 'app-nutri-card',
  templateUrl: './nutri-card.component.html',
  styleUrls: ['./nutri-card.component.css']
})
export class NutriCardComponent implements OnInit {

  @Input() member: any;
  constructor(
    private clienteService : ClienteService
  ) { }

  ngOnInit(): void {
  }


}
