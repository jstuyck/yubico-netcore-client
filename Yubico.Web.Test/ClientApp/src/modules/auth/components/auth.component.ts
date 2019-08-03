import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'yubico-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class YubicoAuthComponent {
  otpInputControl = new FormControl();
  clientIDControl = new FormControl();
  apiKeyControl = new FormControl();
  syncControl  = new FormControl();
  nonceControl  = new FormControl();
    
}
