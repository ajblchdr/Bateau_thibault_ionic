import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'information-gerant',
    loadChildren: () => import('./information-gerant/information-gerant.module').then( m => m.InformationGerantPageModule)
  },
  {
    path: 'recette',
    loadChildren: () => import('./recette/recette.module').then( m => m.RecettePageModule)
  },  {
    path: 'restaurant-list',
    loadChildren: () => import('./restaurant-list/restaurant-list.module').then( m => m.RestaurantListPageModule)
  },
  {
    path: 'restaurant-detail',
    loadChildren: () => import('./restaurant-detail/restaurant-detail.module').then( m => m.RestaurantDetailPageModule)
  },
  {
    path: 'bateau-list',
    loadChildren: () => import('./bateau-list/bateau-list.module').then( m => m.BateauListPageModule)
  },
  {
    path: 'bateau-detail',
    loadChildren: () => import('./bateau-detail/bateau-detail.module').then( m => m.BateauDetailPageModule)
  },
  {
    path: 'recette-detail',
    loadChildren: () => import('./recette-detail/recette-detail.module').then( m => m.RecetteDetailPageModule)
  },
  {
    path: 'produit',
    loadChildren: () => import('./produit/produit.module').then( m => m.ProduitPageModule)
  },
  {
    path: 'produit-detail',
    loadChildren: () => import('./produit-detail/produit-detail.module').then( m => m.ProduitDetailPageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./panier/panier.module').then( m => m.PanierPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
