import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.page.html',
  styleUrls: ['./produit-detail.page.scss'],
})
export class ProduitDetailPage implements OnInit {

  produit: any;
  produitList:any;
  cart: [];

  constructor(public http: HttpClient, private route: ActivatedRoute ,private router: Router, private storage: Storage) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.produit = this.router.getCurrentNavigation().extras.state.produit;
        this.afficherCat(this.produit)
      }
    })
   
    

  }

  afficherCat(id){

    switch (id) {
      case 1:
        console.log('test')
        this.http.get('../../assets/data/panier/poissons.json').subscribe(
          (data) => {
            console.log("data => ", data)
            this.produitList = data;
          },
          (error) => {
            console.log(error)
          }
        );
          break;
      case 2:
        console.log('test')
        this.http.get('../../assets/data/panier/coquillage.json').subscribe(
          (data) => {
            console.log("data => ", data)
            this.produitList = data;
          },
          (error) => {
            console.log(error)
          }
        );
          break;
      case 3:
        console.log('test')
        this.http.get('../../assets/data/panier/crustace.json').subscribe(
          (data) => {
            console.log("data => ", data)
            this.produitList = data;
          },
          (error) => {
            console.log(error)
          }
        );
          break;
          case 4:
        console.log('test')
        this.http.get('../../assets/data/panier/promo.json').subscribe(
          (data) => {
            console.log("data => ", data)
            this.produitList = data;
          },
          (error) => {
            console.log(error)
          }
        );
          break;
          case 4:
        console.log('test')
        this.http.get('../../assets/data/panier/promo.json').subscribe(
          (data) => {
            console.log("data => ", data)
            this.produitList = data;
          },
          (error) => {
            console.log(error)
          }
        );
          break;
    }
  }

  ngOnInit() {
    this.storage.create();
  }

  addProduitToCart(produit){
    this.storage.set(this.create_UUID(),produit);
    console.log("-------------------START")
    this.storage.forEach((key, value, index) => {
      console.log("key", key.name)
      console.log("value", value)
    });
    console.log("-------------------END")
  }

  create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
  }

  onGoToHome(){
    this.router.navigate(['/home'])

  }

  onGoToCart(){
    this.router.navigate(['/panier'])

  }

}