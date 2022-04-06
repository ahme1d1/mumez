import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
    data: { showHeader: false, showFooter: false },
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./pages/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./pages/category/category.module').then((m) => m.CategoryModule),
  },
  {
    path: 'sub-category',
    loadChildren: () =>
      import('./pages/sub-category/sub-category.module').then(
        (m) => m.SubCategoryModule
      ),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./pages/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./pages/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./pages/checkout/checkout.module').then((m) => m.CheckoutModule),
  },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
  { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
  { path: 'join', loadChildren: () => import('./pages/join/join.module').then(m => m.JoinModule) },
  { path: 'careers', loadChildren: () => import('./pages/careers/careers.module').then(m => m.CareersModule) },
  { path: 'sell', loadChildren: () => import('./pages/sell/sell.module').then(m => m.SellModule) },
  { path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule) },
  { path: 'returns-policy', loadChildren: () => import('./pages/returns-policy/returns-policy.module').then(m => m.ReturnsPolicyModule) },
  { path: 'terms', loadChildren: () => import('./pages/terms/terms.module').then(m => m.TermsModule) },
  { path: 'privacy', loadChildren: () => import('./pages/privacy/privacy.module').then(m => m.PrivacyModule) },
  { path: 'demo', loadChildren: () => import('./pages/demo/demo.module').then(m => m.DemoModule) },
  { path: 'categories', loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
