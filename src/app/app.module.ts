import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { AllUsersComponent } from './all-users/all-users.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowUserComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
