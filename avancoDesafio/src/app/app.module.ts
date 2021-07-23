import { LoginRoutes } from './login/loginComponentRoutes';
import { BlogGuard } from './blog/guards/blogGuard';
import { LoginModule } from './login/loginModule';
import { CommonMaterialModule } from './common/material/commonMaterialModules';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogModule } from './blog/blogModule';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './common/auth/authModule';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonMaterialModule,
    LoginModule,
    BlogModule,
    AppRoutingModule,
    AuthModule
    
  

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

