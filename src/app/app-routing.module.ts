import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './component/log-in/log-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ForgotEmailComponent } from './component/forgot-email/forgot-email.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetallnotesComponent } from './component/getallnotes/getallnotes.component';
import { TrashComponent } from './component/trash/trash.component';
import { ArchiveComponent } from './component/archive/archive.component';

const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:'login'},
  {path:'login',component:LogInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'forgotemail',component:ForgotEmailComponent},
  {
    path:'dashboard',component:DashboardComponent,
    children : [
      {path:'',pathMatch:"full",redirectTo:'notes'},
      {path:'notes',component:GetallnotesComponent},
      {path:'trash',component:TrashComponent},
      {path:'archive',component:ArchiveComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
