import { Component, OnInit } from '@angular/core';

import { IUser, CognitoService } from '../cognito.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: IUser;

  constructor(private cognitoService: CognitoService) {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
  }

  public signUp(): void {
    this.cognitoService.signUp(this.user).then();
  }

}
