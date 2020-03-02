import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CheesboardComponent } from './cheesboard/cheesboard.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NameService } from './services/name.service';

@NgModule({
  declarations: [AppComponent, CheesboardComponent, HomeComponent, PageNotFoundComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [NameService],
  bootstrap: [AppComponent]
})
export class AppModule {}
