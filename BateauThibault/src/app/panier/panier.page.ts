import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  cartItems : Array<any>;
  total: Number;

  constructor(public http: HttpClient, private route: ActivatedRoute ,private router: Router, private storage: Storage) { }

  ngOnInit() {
    this.storage.create();
    this.generateItemCart()
  }

  generateItemCart(){
    this.cartItems = new Array<any>();
    this.total = 0;
    this.storage.forEach((value, key, index) => {
      this.cartItems.push({data: value, itemKey: key});
      this.total += value.prix;
    });
  }

  deleteItemFromCart(item){
    this.storage.remove(item.itemKey);
    this.generateItemCart();
  }

  onGoToHome(){
    this.router.navigate(['/home'])
  }

  onGoToCart(){
    this.router.navigate(['/panier'])
  }

}