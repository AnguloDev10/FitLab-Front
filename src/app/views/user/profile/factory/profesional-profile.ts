import { FormGroup, FormControl, Validators } from '@angular/forms';
export function profesional_information_factory():FormGroup{
    return new FormGroup({
        university: new FormControl('Oxford',[Validators.required]),
        ages: new FormControl('2',[Validators.required]),
        profession: new FormControl('Nutricionista',[Validators.required])
    })
}