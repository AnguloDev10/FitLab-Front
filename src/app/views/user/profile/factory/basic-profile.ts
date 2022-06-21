import { FormGroup, FormControl, Validators } from '@angular/forms';
export function basic_information_factory():FormGroup{
    return new FormGroup({
        id: new FormControl('',[Validators.required]),
        name: new FormControl('',[Validators.required]),
        lastName: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required]),
        age: new FormControl('',[Validators.required]),
        phone: new FormControl('',[Validators.required]),
        dni: new FormControl('123123123',[Validators.required]),
        date:new FormControl(new Date(),[Validators.required]),
        direction:new FormControl('av las palmas',[Validators.required]),
        district:new FormControl('xxxxxxxxxxxxxxxx',[Validators.required]),
    })
}