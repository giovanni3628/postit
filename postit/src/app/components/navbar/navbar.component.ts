import { NavbarEnum } from 'src/app/models/enums/navbar';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarItemInterface } from 'src/app/models/interfaces/navbar-interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  constructor(
    private readonly router: Router,
  ) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((route: NavigationEnd) => {
        if (route.url.includes('/feed'))
          this.currentNavbar = NavbarEnum.FEED;
        if (route.url.includes('/home'))
          this.currentNavbar = NavbarEnum.HOME;
        if (route.url.includes('/profile'))
          this.currentNavbar = NavbarEnum.PROFILE;
      });
  }

  public navbarEnum: typeof NavbarEnum = NavbarEnum;
  public currentNavbar: NavbarEnum = NavbarEnum.HOME;

  public navbarList: NavbarItemInterface[] = [
    {
      type: NavbarEnum.FEED,
      link: '/feed', 
      icon: 'assets/images/navbar_feed_disabled.svg',
      iconActivated: 'assets/images/navbar_feed_enabled.svg',


    },
    {
      type: NavbarEnum.HOME,
      link: '/home',
      icon: 'assets/images/navbar_home_disabled.svg',
      iconActivated: 'assets/images/navbar_home_enabled.svg', 
    },
    {
      type: NavbarEnum.PROFILE,
      link: '/profile', 
      icon: 'assets/images/navbar_profile_disabled.svg',
      iconActivated: 'assets/images/navbar_profile_enabled.svg',
    }
  ]
}
