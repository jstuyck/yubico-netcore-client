import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { YubicoAuthComponent } from './components/auth.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';


@NgModule({ 
    imports : [
        CommonModule,
        HttpClientModule,
        MatCardModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDividerModule
    ],

    declarations :[
        YubicoAuthComponent
    ],
    exports: [
        YubicoAuthComponent
    ]
    ,
    providers :
    [
        AuthService
    ]
})

export class YubicoAuthModule { }