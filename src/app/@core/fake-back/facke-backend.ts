import { User } from "src/app/shared/services/users/user";
import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {delay, dematerialize, materialize, Observable, of, throwError} from "rxjs";
import {Injectable} from "@angular/core";



const users = [
    new User(1, "admin@admin.com", "admin", true),
    new User(2, "user@user.com", "user", true),
];

// @ts-ignore
@Injectable({ providedIn: 'root' })
export class FakeBackInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;
    return handleRoute();
    function handleRoute() {
      switch (true) {
        case url.endsWith('/login/') && method === 'POST':
          return authenticate();
        case url.endsWith('/settings/users') && method === 'GET':
          return getUsers();
        case url.match(/\/users\/\d+$/) && method === 'GET':
          return getUserById();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }

    }

    // route functions

    function authenticate() {
      const { email, password } = body;
      // @ts-ignore
      const user = users.find(x => x.email === email && x.password === password);
      if (!user) return error('Email ou mot de passe incorrecte');
      return ok({
        id: user.id,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        login: user.login,
        role: user.role,
        token: `fake-jwt-token.${user.id}`
      });
    }
    function getUsers(){
      if (!isAdmin()) return unauthorized();
      else if (!isValCell()) return unauthorized();

      // @ts-ignore
      return ok(users);
    }

    function getUserById() {
      if (!isLoggedIn()) return unauthorized();

      // only admins can access other user records
      // @ts-ignore
      if (!isAdmin() && currentUser().id !== idFromUrl()) return unauthorized();
  
      const user = users.find(x => x.id === idFromUrl());
      return ok(user);
    }

    // helper functions

    function ok(body: any) {
      return of(new HttpResponse({ status: 200, body }))
        .pipe(delay(500)); // delay observable to simulate server api call
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Unauthorized access' } })
        .pipe(materialize(), delay(500), dematerialize()); // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
    }

    function error(message:string) {
      return throwError({ status: 400, error: { message } })
        .pipe(materialize(), delay(500), dematerialize());
    }

    function isLoggedIn() {
      const authHeader = headers.get('Authorization') || '';
      return authHeader.startsWith('Bearer fake-jwt-token');
    }

    function isAdmin() {
      // @ts-ignore
      return isLoggedIn() && currentUser().role === Role.ADMIN;
    }

    function currentUser() {
      if (!isLoggedIn()) return;
      const id = parseInt(headers.get('Authorization')!.split('.')[1]);
      return users.find(x => x.id === id);
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}


export const fakeBackendProvider  = {
  /* use fake backend in place of Http service for backend-less development */
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackInterceptor,
  multi: true
};
