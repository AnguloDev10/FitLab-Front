import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reunion-form',
  templateUrl: './reunion-form.component.html',
  styleUrls: ['./reunion-form.component.css']
})
export class ReunionFormComponent implements OnInit {
  public meetingForm: FormGroup;
  private fb: FormBuilder;
  public isEdit: string;
  constructor( public dialogRef: MatDialogRef<ReunionFormComponent>,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: string) {
    this.isEdit = data;
  }

  ngOnInit(): void {
    this.meetingForm = this.fb.group({
      meetingName : ['', Validators.required],
      meetingSubject : ['', Validators.required],
      meetingResponsible : ['', Validators.required],
      meetingDate : ['', Validators.required],
      meetingTime : ['', Validators.required],
    });
  }
  cancel(){

  }
  save(){
 console.log(this.meetingForm.value)
  }

}
