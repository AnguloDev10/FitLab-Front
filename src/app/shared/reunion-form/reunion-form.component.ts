import {Component, Inject, OnChanges, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ClienteService} from "../../services/cliente.service";
import {Account} from "../../model/Usuario";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
@Component({
  selector: 'app-reunion-form',
  templateUrl: './reunion-form.component.html',
  styleUrls: ['./reunion-form.component.css']
})
export class ReunionFormComponent implements OnInit {
  nutri_id:any;
  id:any
  meetingForm: FormGroup;
  isEdit: string;
  startAt : any;
  endAt : any;
  link : any;
  nutricionistaId : any;
  userId : any;
  constructor( public dialogRef: MatDialogRef<ReunionFormComponent>,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: string, private _clienteService : ClienteService,private route: ActivatedRoute, private fb:FormBuilder) {
    this.isEdit = data;
    this.id = localStorage.getItem("userid");
    this.meetingForm = this.fb.group({
      link:['', Validators.required],
      nutricionistaId:['',Validators.required],
      userId:['',Validators.required],
      startAt:['',Validators.required],
      endAt:['',Validators.required],
    })




  }

  ngOnInit(): void {
    /*  this.meetingForm = new FormGroup({
      link : new FormControl('',[Validators.required]),
      nutricionistaId : new FormControl('',[Validators.required]),
      userId : new FormControl(this.id,[Validators.required]),
      startAt : new FormControl('',[Validators.required]),
      endAt : new FormControl('',[Validators.required]),
    });*/
    this.nutri_id = this.route.snapshot.paramMap.get('id');
    /*this.meetingForm.controls['link'].valueChanges.subscribe(value => {
      console.log(value)
    })
    this.meetingForm.controls['nutricionistaId'].valueChanges.subscribe(value => {
      console.log(value)
    })
    this.meetingForm.controls['userId'].valueChanges.subscribe(value => {
      console.log(value)
    })
    this.meetingForm.controls['startAt'].valueChanges.subscribe(value => {
      console.log(value)
    })
    this.meetingForm.controls['endAt'].valueChanges.subscribe(value => {
      this.endAt = value
    })*/
  }
  cancel(){

  }
  save(){
  console.log(this.endAt)
    let sesion = {
      startAt: this.startAt,
      endAt: this.endAt,
      nutricionistaId: this.nutricionistaId,
      link: this.link,
      userId: this.userId
    }

  this._clienteService.createSession(this.meetingForm.value).subscribe( response => {
    console.log('Se añadio la reunion', sesion)
  });
    this.dialogRef.close(true);
    console.log(this.meetingForm.value)
    this.meetingForm.reset();
    window.setTimeout(function(){location.reload()}, 1000)
  }

}
