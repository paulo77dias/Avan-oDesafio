import { AuthService } from './common/auth/services/authService';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.component.scss']
})
export class AppComponent {

        constructor(private token:AuthService){

        }
        
        public logout(){
                this.token.logout();
        }
}
