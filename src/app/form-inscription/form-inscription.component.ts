import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.css']
})
export class FormInscriptionComponent implements OnInit {

  formInscription!: FormGroup;

  newUser: User = {id:'',nom:'', prenom:'', mdp:'', email:''};

  constructor(fb: FormBuilder, private userService: UserServiceService) {

    this.formInscription = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      mdp: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
    });
  }
  ngOnInit(): void {
  }

  submit(): void{
    if(this.newUser.nom != "" && this.newUser.prenom != "" && this.newUser.mdp != "" && this.newUser.email != ""){
      let newuser = this.newUser;
      this.userService.enregistrerUser(newuser);
      this.newUser = {id:'',nom:'', prenom:'', mdp:'', email:''};
      console.log(this.userService.users);
    }
  }

}
