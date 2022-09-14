import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthFormModel } from '../models/authform.model';
import { AuthService } from '../services/auth.service';
import { AuthResultModel } from '../models/authresult.model';

@Component({
  selector: 'yubico-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class YubicoAuthComponent {

  public result: string;

  constructor(private authsrvc: AuthService) { }

  authform = new UntypedFormGroup({
    otpInputControl: new UntypedFormControl('', [Validators.required,
    Validators.minLength(32),
    Validators.maxLength(48)]),
    clientIDControl: new UntypedFormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    apiKeyControl: new UntypedFormControl('', Validators.required),
    syncControl: new UntypedFormControl(100, [Validators.required,
    Validators.minLength(0),
    Validators.maxLength(100)]),
    nonceControl: new UntypedFormControl(this.makeRandom())
  });

  submit() {
    if (this.authform.valid) {
      const payload: AuthFormModel = {
        otpInput: this.authform.get('otpInputControl').value,
        clientID: this.authform.get('clientIDControl').value,
        apiKey: this.authform.get('apiKeyControl').value,
        sync: this.authform.get('syncControl').value,
        nonce: this.authform.get('nonceControl').value,
      }
      this.authsrvc.Auth(payload).toPromise().then((res) => {
        this.result = res;
      })
    }
  }

  makeRandom() {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";
    let text = "";
    for (let i = 0; i < this.getRndInteger(16,40); i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  getRndInteger(min: number, max: number) : number {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


}
