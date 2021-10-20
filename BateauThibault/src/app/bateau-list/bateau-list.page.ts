import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-bateau-list',
  templateUrl: './bateau-list.page.html',
  styleUrls: ['./bateau-list.page.scss'],
})
export class BateauListPage implements OnInit {

  bateauxList: any;

  constructor(public http: HttpClient, private router : Router) { }

  ngOnInit() {
    this.getDataFromJson()
  }

  getDataFromJson(){
    this.http.get('../../assets/data/bateaux.json').subscribe(
      (data) => {
        console.log("data => ", data)
        this.bateauxList = data;
      },
      (error) => {
        console.log(error)
      }
    );
  }

  onLoadBateau(bateau){

    let navigationExtras : NavigationExtras = {
      state : {
        bateau: bateau
      }
    };
    this.router.navigate(['/bateau-detail'], navigationExtras);

  }

}
