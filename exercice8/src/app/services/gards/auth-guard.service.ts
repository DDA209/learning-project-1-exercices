import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log(' this.authService.isLogged >>>', this.authService.isLogged);
    if (this.authService.isLogged) {
      console.log('canActivate TRUE');
      return true;
    } else {
      console.log('canActivate FALSE');
      return this.router.navigate(['/login']);
    }
    // return false
  }
}
