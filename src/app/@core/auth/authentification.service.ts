import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import {IUser, User} from '../../shared/models/user/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  private loggedInStatus: boolean= JSON.parse(localStorage.getItem('loggedInStatus') || 'false' );

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    // @ts-ignore
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  setLoggedIn(value : boolean){
    this.loggedInStatus = value
    localStorage.setItem("loggedInStatus", value.toString())
  }
  get isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedInStatus') || this.loggedInStatus.toString() )
  }

/* login with fake back */
  login(email: string, password: string) {
    return this.http.post<User>(`${environment.apiUrl}/login/`, { email, password })
      .pipe(map(user => {
        /* store user details and jwt token in local storage to keep user logged in between page refreshes */
        this.setLoggedIn(true)
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

   authentify(login : string , password : string): Observable<IUser>{
     return this.http.post<any>(`${environment.springApiUrl}/api/login/administration`,{ login, password })
       .pipe(map(user => {
         // @ts-ignore
         if(user !=null && user.role > 0 && user.role<5){
           this.setLoggedIn(true)
           localStorage.setItem('user', JSON.stringify(user));
           this.userSubject.next(user);
           return user;
         }
         console.log("user not found")
         this.setLoggedIn(false)
         // @ts-ignore
         this.userSubject.next(null);
         return undefined;
       }));
   }


  logout() {
    /*remove user from local storage to log user out */
    localStorage.removeItem('user');
    localStorage.removeItem('loggedInStatus');

    // @ts-ignore
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
}