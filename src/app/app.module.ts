import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { HeaderComponent } from './header/header.component';
import {MatTableModule} from '@angular/material/table';
import {SocketIoModule,SocketIoConfig} from 'ngx-socket-io';

//material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { CreateMatchComponent } from './create-match/create-match.component';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { SearchComponent } from './search/search.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
    CreateTeamComponent,
    HeaderComponent,
    CreateMatchComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
   FormsModule,
   MatInputModule,
   HttpClientModule,
   MatSelectModule,
   MatTableModule,
   MatToolbarModule,
   MatButtonModule,
   SocketIoModule.forRoot(config),
   NgMatSearchBarModule,
   MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
