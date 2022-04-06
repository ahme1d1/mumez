import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CartSidebarService } from '@core/services/cart-sidebar/cart-sidebar.service';
import { ifAnimation } from '@core/animations/if-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ifAnimation],
})
export class AppComponent {
  title = 'mumez';
  showHeader = false;
  showFooter = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public CartSidebarService: CartSidebarService
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let child = this.activatedRoute.firstChild;
        if (child) {
          this.showHeader = child.snapshot.data['showHeader'] !== false;
          this.showFooter = child.snapshot.data['showFooter'] !== false;
        }
      }
    });
  }
}
