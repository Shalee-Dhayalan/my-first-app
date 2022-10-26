import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { containercomponent } from 'src/app/container/container.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    AppComponent,
    containercomponent,
    NavComponent,
    HeaderComponent,
    NotificationsComponent,
    SearchComponent,
    ProductsComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
