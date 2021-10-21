import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {

  produitList: any;

  constructor(public http: HttpClient, private router : Router) { }

  ngOnInit() {
    this.getDataFromJson();
  }

  getDataFromJson(){
    this.http.get('../../assets/data/panier/type.json').subscribe(
      (data) => {
        console.log("data => ", data)
        this.produitList = data;
      },
      (error) => {
        console.log(error)
      }
    );
  }

  onLoadProduit(produit){

    let navigationExtras : NavigationExtras = {
      state : {
        produit: produit
      }
    };
    this.router.navigate(['/produit-detail'], navigationExtras);
  }

  onGoToHome(){
    this.router.navigate(['/home']);
  }

  onGoToCart(){
    this.router.navigate(['/panier'])
  }
}