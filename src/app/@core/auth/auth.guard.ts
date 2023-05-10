import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentification.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authenticationService.userValue;
    if(this.authenticationService.isLoggedIn && user !=null){
       /* check if route is restricted by role */
      // @ts-ignore
      if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
        console.log("Navigating to not found")
        this.router.navigate(['**']);
        return false;
      }
      /* authorised so return true */
      return true;
    }

    /* not logged in so redirect to login page with the return url*/
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;

  }
}