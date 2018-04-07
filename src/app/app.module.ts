import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MsgpanelComponent } from './common/msgpanel/msgpanel.component';


@NgModule({
  declarations: [
    AppComponent,
    MsgpanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
