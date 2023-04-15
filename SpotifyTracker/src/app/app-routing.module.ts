import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth-guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


const routes: Routes = [
  {
    path: "**",
    component: LoginComponent
  },
    {
    path: "login",
    component: LoginComponent
  },
  {
    path: "profile",
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
