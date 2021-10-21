import { Component } from '@angular/core';
import { Router } from '@angular/router' ;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router : Router) {}

  onGoToContact(){
    this.router.navigate(['/information-gerant']);
  }

  onGoToRecette(){
    this.router.navigate(['/recette']);
  }
  onGoToProduit(){
    this.router.navigate(['/produit']);
  }
}
