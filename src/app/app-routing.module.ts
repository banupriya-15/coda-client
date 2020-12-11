import { SearchComponent } from './search/search.component';
import { CreateMatchComponent } from './create-match/create-match.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [ 
  {path:"",redirectTo:"/score", pathMatch:"full"},
  {path:"score", component:ScoreboardComponent},
  {path:"create", component:CreateTeamComponent},
  {path:"match", component:CreateMatchComponent},
  {path:"search", component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
