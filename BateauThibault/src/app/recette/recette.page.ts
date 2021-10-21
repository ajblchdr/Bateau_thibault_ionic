import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-recette',
  templateUrl: './recette.page.html',
  styleUrls: ['./recette.page.scss'],
})


export class RecettePage implements OnInit {

  recetteList: any;

  constructor(public http: HttpClient, private router : Router) { }

  ngOnInit() {
    this.getDataFromJson();
  }

  getDataFromJson(){
    this.http.get('../../assets/data/recettes.json').subscribe(
      (data) => {
        console.log("data => ", data)
        this.recetteList = data;
      },
      (error) => {
        console.log(error)
      }
    );
  }
onLoadRecette(recette){

    let navigationExtras : NavigationExtras = {
      state : {
        recette: recette
      }
    };
    this.router.navigate(['/recette-detail'], navigationExtras);

  }

}
