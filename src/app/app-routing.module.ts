import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { FormLoginComponent } from './form-login/form-login.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:"full"},
  {path:'inscription', component:FormInscriptionComponent},
  {path:'login', component:FormLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
