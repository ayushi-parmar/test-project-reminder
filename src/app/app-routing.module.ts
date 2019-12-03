import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyreminderComponent } from './myreminder/myreminder.component';
import { SecondComponent } from './second/second.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



const routes: Routes = [];

@NgModule({
  declarations: [ ],
  imports: [RouterModule.forRoot([
    {
      path:'setreminder',component:MyreminderComponent
    }, 
    {
      path:'second',component:SecondComponent
    },
    { path: '',
    redirectTo: '/setreminder',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
