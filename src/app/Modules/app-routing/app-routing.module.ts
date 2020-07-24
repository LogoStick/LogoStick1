import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../../app.component';
import {HomepageComponent} from '../../Components/homepage/homepage.component';
import {ProductpageComponent} from '../../Components/productpage/productpage.component';
import {ProductPageResolverService} from '../../Resolvers/product-page-resolver.service';
import {CartpageComponent} from '../../Components/cartpage/cartpage.component';
import {NotFoundProductPageComponent} from '../../Components/not-found-product-page/not-found-product-page.component';
import {NotFoundProductGuard} from '../../RouteGuards/NotFoundProduct/not-found-product.guard';
import {LoginpageComponent} from '../../Components/loginpage/loginpage.component';
import {PurchasePageComponent} from '../../Components/purchase-page/purchase-page.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'productpage/:id',
    component: ProductpageComponent,
    resolve: {product: ProductPageResolverService},
    canActivate: [NotFoundProductGuard]
  },
  {path: 'cartpage', component: CartpageComponent},
  {path: 'not-found-product-page', component: NotFoundProductPageComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'purchase', component: PurchasePageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
