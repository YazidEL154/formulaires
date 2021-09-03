import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  formLogin!: FormGroup;

  users: User[] = this.userService.users;
  newUser: User = {id:'',nom:'', prenom:'', mdp:'', email:''};

  constructor(fb: FormBuilder,private userService: UserServiceService) {

    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      mdp: new FormControl('', Validators.required)

    });
  }
  ngOnInit(): void {
  }

  findUser(user: User): any{
    let userIndex = this.users.findIndex((u: User) => {
      return u.id === user.id;
    });

    if (userIndex !== -1) {
      // retrait de l'élément du tableau (index, nb d'éléments à supprimer)
      
    }
  }

  submit(): void{
    console.log(this.formLogin);
  }
}
