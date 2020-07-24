import {UserDetails} from '../../Models/CurrentUserDetails/UserDetails';

export abstract class AbstractAuthService {
  abstract login();
  abstract register();
  abstract logout();
  abstract getUserDetails(): UserDetails;
  abstract getToken(): string;
}
