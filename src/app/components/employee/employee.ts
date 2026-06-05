import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class EmployeeComponent {

  searchText='';

  employees = [

    {
      id:1,
      name:'Ananya',
      department:'IT',
      salary:50000
    },

    {
      id:2,
      name:'Ahwan',
      department:'HR',
      salary:45000
    },

    {
      id:3,
      name:'Adya',
      department:'Finance',
      salary:60000
    }

  ];

}