import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


// admin model
import { User } from '../models/user.model';
import { Role } from '../models/role.model';
import { Organization } from '../models/organization.model';

/**
 * Project：用户角色权限服务
 * CreateTime：2017-12-08
 * Author：ObjectBin
 */

 // api 接口
 const host = '../../mock-data'; // '/api/admin/getusers', //
 export const Urls = {
    GetUsers: host + '/user.json',
    GetUserSearch: host + '/user.search.json',
    GetRoles: host + '/role.json',
    GetOrganization: host + '/organization.json',

    AddOrganizatio: host + '/organization.json',
    AddRole: host + '/role.json',
    AddUser: host + '/user.json',
 };

@Injectable()
export class AdminService {
    constructor(public http: Http) { }

    public getData() {
        console.log('这是Test  Service里的方法');
        return this.http.get(Urls.GetUsers).map((res:Response) => {
            let result=res.json();
            return result;
        })
        .catch((error:any) => Observable.throw(error || 'Server error'));

       // return this.http.get(Urls.GetUsers).map(this.extractData).catch(this.handleError);
    }


    // 获得用户数据
    public getUsers(searchText: string, page: number= 1): Observable<User[]> {
        let url = Urls.GetUsers;
        let params = new URLSearchParams();
        if (searchText) {
            params.set('searchText', searchText);
            url = Urls.GetUserSearch;
            console.log(`searchText=${searchText}`);
        }
        params.set('page', String(page));

        return this.http.get(url).map(this.extractData).catch(this.handleError);
     }

     // 获得组织
     public getOrganizations(): Observable<Organization[]> {
         return this.http.get(Urls.GetOrganization).map(this.extractData).catch(this.handleError);
     }
     // 获得角色
     public getRoles(): Observable<Role[]> {
         return this.http.get(Urls.GetRoles).map(this.extractData).catch(this.handleError);
     }


    // // 添加组织 Observable写法
    // public addOrganization(org: Organization): Observable<any> {
    //     let body = JSON.stringify(org);
    //     let headers = new Headers({'Content-Type': 'application/json'});
    //     let options = new RequestOptions({headers: headers});
    //
    //     return this.http.post(Urls.AddOrganizatio, body, options).map(this.extractData).catch(this.handleError);
    // }
    // // 添加角色 Observable写法
    // public addRole(role: Role): Observable<any> {
    //     let body = JSON.stringify(role);
    //     let headers = new Headers({'Content-Type': 'application/json'});
    //     let options = new RequestOptions({headers: headers});
    //
    //     return this.http.post(Urls.AddRole, body, options).map(this.extractData).catch(this.handleError);
    // }
    // // 添加用户 Observable写法
    // public addUser(user: User): Observable<User> {
    //     let body = JSON.stringify(user);
    //     let headers = new Headers({'Content-Type': 'application/json'});
    //     let options = new RequestOptions({headers: headers});
    //
    //     return this.http.post(Urls.AddUser, body, options).map(this.extractData).catch(this.handleError);
    // }
    //

    // 数据格式处理
    private extractData(res: Response) {
        let result = res.json();
        // console.log(result);
        return result || {} ;
    }

    // 异常处理
    private handleError (error: any) {
        let errMsg = (error.message) ? error.message : error.status ? '${error.status} - ${error.statusText}' : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
