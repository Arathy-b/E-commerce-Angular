import { CanActivateFn } from '@angular/router';

export const customerguardGuard: CanActivateFn = (route, state) => {
  return true;
};
