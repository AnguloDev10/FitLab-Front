import { FormGroup, FormControl, Validators } from '@angular/forms';
export function FactoryFilter() {
    return new FormGroup({
        status: new FormControl(0,Validators.required),
        name:new FormControl('',Validators.required),
        dni:new FormControl('',Validators.required),
    })
}