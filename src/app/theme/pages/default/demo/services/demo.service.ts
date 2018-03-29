import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from '../model/user.model';

@Injectable()
export class DemoService {
    public userUrl = '../../mock-data/user.json';
    constructor(public http: Http) {

    }

    public getUsers(): Observable<User[]> {

        return this.http.get(this.userUrl).map((res: Response) => {
            const result = res.json();
            console.log(result);
            return result;
        }).catch((error: any) => Observable.throw(error || 'server error'));

    }

}