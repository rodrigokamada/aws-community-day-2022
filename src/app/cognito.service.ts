import { Injectable } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';

import { environment } from 'src/environments/environment';

export interface IUser {
  email: string;
  password: string;
  showPassword: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CognitoService {

  constructor() {
    Amplify.configure({
      Auth: environment.cognito,
    });
  }

  public signUp(user: IUser): any {
    return Auth.signUp({
      username: user.email,
      password: user.password,
    });
  }
}
