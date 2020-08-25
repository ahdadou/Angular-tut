import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoopingCartComponent } from './components/shooping-cart/shooping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  { path:'login',component:LoginComponent},
  { path:'register',component:RegisterComponent},
  { path:'shop',component:ShoopingCartComponent},
  { path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
