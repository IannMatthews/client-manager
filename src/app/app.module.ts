import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyCustomersComponent } from './pages/my-customers/my-customers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LargeButtonComponent } from './components/large-button/large-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    MainMenuComponent,
    MyCustomersComponent,
    LargeButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
