import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { User } from '../../../../pages/auth/models';
import { AuthService } from '../../../../pages/auth/services';
import { routes } from '../../../../consts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isMenuOpened: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();
  public user$: Observable<User>
  public routers: typeof routes = routes;

  constructor(
    private userService: AuthService,
    private router: Router
  ) {
    this.user$ = this.userService.getUser();
  }

  public openMenu(): void {                       //otvorit header menu
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public signOut(): void {            //odhlasit uzivatela
    this.userService.signOut();

    this.router.navigate([this.routers.LOGIN]);
  }
  public home(): void {                                 //navigovat na home
    this.router.navigate([this.routers.DASHBOARD]);
  }
}
