import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
selector:'app-registration',
standalone:true,
imports:[FormsModule],
templateUrl:'./registration.html',
styleUrl:'./registration.css'
})

export class RegistrationComponent{

name='';
email='';
age='';
course='';

}