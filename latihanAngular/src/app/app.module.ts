import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoterComponent } from './voter/voter.component';
import { GantengComponent } from './ganteng/ganteng.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { CensorPipe } from './pipes/censor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    GantengComponent,
    ReversePipe,
    CensorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
