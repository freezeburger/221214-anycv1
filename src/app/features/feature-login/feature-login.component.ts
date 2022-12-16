import { Component } from '@angular/core';
import { FCredentials } from 'src/app/core/interfaces/f-credentials';
import { ActionType, TAction } from 'src/app/core/interfaces/t-action';
import { DispatcherService } from 'src/app/core/services/dispatcher.service';
import { loginRequest } from 'src/app/core/utils/action-creator';

@Component({
  selector: 'app-feature-login',
  templateUrl: './feature-login.component.html',
  styleUrls: ['./feature-login.component.scss']
})
export class FeatureLoginComponent {

  loginMode: 'register'| 'login' = 'login';

  credentials:FCredentials = {
    email:'',
    password:''
  }

  constructor(
    public dispatcher:DispatcherService
  ){}

  sendLoginRequest(){
    const action = loginRequest(this.credentials);
    this.dispatcher.dispatch(action);
  }

  sendRegisterRequest(){
    const action:TAction = { type:ActionType.REGISTER_REQUEST, payload:this.credentials };
    this.dispatcher.dispatch(action);
  }


}
