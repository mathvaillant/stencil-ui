import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  RouterModule,
  RouterOutlet,
  Router,
  NavigationEnd,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  currentRoute: string = '';
  items: any[] = [];
  private routerSubscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
        this.setItems();
      });

    this.setItems();
  }

  setItems(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'menu',
        active: this.currentRoute === '/',
        onClick: () => this.router.navigate(['/']),
      },
      {
        label: 'Dashboard',
        icon: 'user',
        active: this.currentRoute === '/dashboard',
        onClick: () => this.router.navigate(['/dashboard']),
      },
    ];
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
