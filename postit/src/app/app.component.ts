import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private readonly router: Router,
  ) {
    console.log(router.events);

    router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((route: NavigationEnd) => {
      console.log(route.url);

      if(this.routesWhithoutNavbar.includes(route.url)){
        this.canShowNavbar = false;
      }
      else{
        this.canShowNavbar = true;
      }

    })
  }

  public canShowNavbar: boolean = false;
  public routesWhithoutNavbar: string[] = ['/login', '/signup'];

  public routeSubscription: Subscription;
  public ngOnDestroy(): void{
    this.routeSubscription.unsubscribe();
  }
}
