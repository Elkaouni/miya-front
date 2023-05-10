import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {IUser} from '../../services/users/user';
import { Config } from 'src/app/@config';
import {Observable} from "rxjs";


@Injectable({ providedIn: 'root' })
export class UserService {
  private _config?: Config;
  private resourceUrl = `${this._config?.serverUrl}/${this._config?.coreUrl}/users`
  constructor(private http: HttpClient) { }


  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.resourceUrl}/add/patient`, user);
  }

  findAllUsers() {
    return this.http.get<IUser>(`${this.resourceUrl}`);
  }
  findUserById(id: number): Observable<IUser> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    return this.http.get<IUser>(`${this.resourceUrl}`,{params: queryParams});
  }
  findByEmail(email: string): Observable<IUser> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",email);
    return this.http.get<IUser>(`${this.resourceUrl}/find/email`,{params: queryParams});
  }


  delete(id: number): Observable<{}> {
    // @ts-ignore
    return this.http.delete(`${this.resourceUrl}/delete/${id}`);
  }


  changePassword(userid: number, oldPwd: string, newPwd: string): Observable<{}> {
    let changePwd = {
      userid: userid,
      oldPwd: oldPwd,
      newPwd: newPwd
    }
    return this.http.put(`${this.resourceUrl}/${userid}/update/password`, changePwd);
  }


}