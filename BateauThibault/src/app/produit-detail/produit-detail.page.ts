import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.page.html',
  styleUrls: ['./produit-detail.page.scss'],
})
export class ProduitDetailPage implements OnInit {

  produit: any;
  produitList:any;

  constructor(public http: HttpClient, private route: ActivatedRoute ,private router: Router) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.produit = this.router.getCurrentNavigation().extras.state.produit;
        console.log("Cat =>",this.produit)
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
      case 3:
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
  }
}

  ngOnInit() {
  }

}

