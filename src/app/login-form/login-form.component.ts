import { Component, OnInit } from '@angular/core';
import{
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  name=new FormControl('',Validators.required);
  decision= new FormControl('');
  profile=new FormGroup({
    username: new FormControl(''),
    bio: new FormControl(''),
  })

  ngOnInit(): void {
  }

}
