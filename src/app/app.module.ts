import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
    CreditCardComponent,
    AppComponent,
    
  
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
