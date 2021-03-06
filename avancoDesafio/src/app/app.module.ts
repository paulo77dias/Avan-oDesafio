
import { LoginModule } from './login/loginModule';
import { CommonMaterialModule } from './common/material/commonMaterialModules';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogModule } from './blog/blogModule';
import { AppRoutingModule } from './app-routing.module';

import { RegisterModule } from './register/registerModule';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonMaterialModule,
    RegisterModule,
    LoginModule,
    BlogModule,
    AppRoutingModule,
   RegisterModule
    
  

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

