import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from './components/landing-page/landing-page';
import {ProductCatalog} from './components/product-catalog/product-catalog';
import {AboutUs} from './components/about-us/about-us';
import {Contact} from './components/contact/contact';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  { path: 'nosotros', component: AboutUs },
  { path: 'pedido', component: ProductCatalog },
  { path: 'contacto', component: Contact },
  { path: '', redirectTo: 'nosotros', pathMatch: 'full' }, // Redirección inicial
  { path: '**', redirectTo: 'nosotros' } // Ruta comodín
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
