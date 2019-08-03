import {  Injectable } from "@angular/core";

import { Observable } from 'rxjs';
import { AuthResultModel } from '../models/authresult.model';
import { AuthFormModel } from '../models/authform.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    private apiUrl = "";

    constructor(private http: HttpClient)
    {}

    public Auth(form: AuthFormModel): Observable<AuthResultModel> {
        return this.http.post<AuthResultModel>(`${this.apiUrl}/auth`,form);
    }
}