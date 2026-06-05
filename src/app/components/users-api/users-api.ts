import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
selector:'app-users-api',
standalone:true,
imports:[CommonModule],
templateUrl:'./users-api.html',
styleUrl:'./users-api.css'
})

export class UsersApiComponent implements OnInit{

users:any[]=[];

constructor(
private http:HttpClient
){}

ngOnInit(){

this.http.get<any[]>(
'https://jsonplaceholder.typicode.com/users'
)

.subscribe(data=>{

this.users=data;

});

}

}