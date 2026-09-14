import { inject, Inject } from "@angular/core";
import { CanActivateChildFn, Router } from "@angular/router";
import { catchError, map, of } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { state } from "@angular/animations";

export const authGuard: CanActivateChildFn = (route, state) => {
    const authService = inject(AuthService);
    const routes = inject(Router);

    return authService.getCurrentuUser().pipe(
        map((response) => {
            if (response.authenticated) {
                return true
            }

            return routes.createUrlTree(['sign-in']);
        }),
        catchError(() => {
            return of(
                routes.createUrlTree(['sign-in'])
            );
        })
    )
}