import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ShowUserComponent } from './show-user/show-user.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'Users', component: AllUsersComponent },
  { path: 'User/:id', component: ShowUserComponent },
  { path: 'login', component: LoginComponentComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    ShowUserComponent,
    AllUsersComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
