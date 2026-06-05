import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class StudentComponent {

  studentName = '';
  studentEmail = '';
  studentCourse = '';
  searchText = '';

  students = [
    {
      id: 1,
      name: 'Ananya',
      email: 'ananya@gmail.com',
      course: 'Angular'
    }
  ];

  addStudent() {

    if(
      this.studentName &&
      this.studentEmail &&
      this.studentCourse
    ){

      this.students.push({
        id: Date.now(),
        name: this.studentName,
        email: this.studentEmail,
        course: this.studentCourse
      });

      this.studentName = '';
      this.studentEmail = '';
      this.studentCourse = '';
    }
  }

  deleteStudent(id:number){

    this.students =
    this.students.filter(
      student => student.id !== id
    );

  }

}