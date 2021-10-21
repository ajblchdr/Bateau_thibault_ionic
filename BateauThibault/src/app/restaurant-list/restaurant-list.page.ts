import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.page.html',
  styleUrls: ['./restaurant-list.page.scss'],
})
export class RestaurantListPage implements OnInit {

  restaurantsList: any;

  constructor(public http: HttpClient, private router : Router) { }

  ngOnInit() {
    this.getDataFromJson();
  }

  getDataFromJson(){
    this.http.get('../../assets/data/restaurants.json').subscribe(
      (data) => {
        console.log("data => ", data)
        this.restaurantsList = data;
      },
      (error) => {
        console.log(error)
      }
    );
  }

  onLoadRestaurant(restaurant){

    let navigationExtras : NavigationExtras = {
      state : {
        restaurant: restaurant
      }
    };
    this.router.navigate(['/restaurant-detail'], navigationExtras);

  }

}
