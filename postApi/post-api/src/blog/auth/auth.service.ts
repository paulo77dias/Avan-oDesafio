import { UserLogin } from './../dtos/userLogin';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService,
              ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    
      return 'result';
    }

  async login(user: UserLogin) {
        console.log(user)
        const payload = { email: user.email, password: user.password };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
    
  
}