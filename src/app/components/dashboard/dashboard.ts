import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

  totalStudents = 120;

  activeStudents = 95;

  totalCourses = 8;

  apiUsers = 10;   // <-- YE LINE ADD KARO

}