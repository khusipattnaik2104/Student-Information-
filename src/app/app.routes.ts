import { Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard';
import { StudentComponent } from './components/student/student';
import { EmployeeComponent } from './components/employee/employee';
import { RegistrationComponent } from './components/registration/registration';
import { UsersApiComponent  } from './components/users-api/users-api';
import { ContactComponent  } from './components/contact/contact';
import {AboutComponent  } from './components/about/about';

export const routes: Routes = [

{ path:'', redirectTo:'dashboard', pathMatch:'full' },

{ path:'dashboard', component:DashboardComponent },

{ path:'student', component:StudentComponent },

{ path:'employee', component:EmployeeComponent },

{ path:'registration', component:RegistrationComponent },

{ path:'users-api', component:UsersApiComponent },

{ path:'contact',component:ContactComponent},

{ path:'about',component:AboutComponent}

];