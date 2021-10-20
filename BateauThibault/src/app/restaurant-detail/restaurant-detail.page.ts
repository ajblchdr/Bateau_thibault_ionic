import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.page.html',
  styleUrls: ['./restaurant-detail.page.scss'],
})
export class RestaurantDetailPage implements OnInit {

  restaurant: any;

  constructor(private route: ActivatedRoute ,private router: Router) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.restaurant = this.router.getCurrentNavigation().extras.state.restaurant;
        console.log("restaurant =>",this.restaurant);
      }
    })

  }

  ngOnInit() {
  }

}
