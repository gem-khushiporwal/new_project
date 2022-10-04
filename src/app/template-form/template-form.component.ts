import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  submit(login: any){
    if(login.form.status =='VALID'){
      alert('form submitted!!');
      console.log('login', login);
    }
    else{
      console.log('login',login);
    } 
    }
  


  }