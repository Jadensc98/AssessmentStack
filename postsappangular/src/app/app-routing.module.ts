import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PostComponent} from "./post/post.component";
import {AboutComponent} from "./about_us/about.component";

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'posts', component: PostComponent },
  {path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
