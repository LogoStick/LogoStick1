import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../../app.component';
import {HomepageComponent} from '../../Components/homepage/homepage.component';
import {ProductpageComponent} from '../../Components/productpage/productpage.component';
import {ProductPageResolverService} from '../../Resolvers/product-page-resolver.service';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'productpage/:id', component: ProductpageComponent, resolve: {product: ProductPageResolverService}},
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
