import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' ;

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {

  private readonly URL = '../../constant/type.js';


  constructor(private router : Router) {}

  
  onGoToHome(){
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

  
}
