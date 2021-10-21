import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.page.html',
  styleUrls: ['./recette-detail.page.scss'],
})
export class RecetteDetailPage implements OnInit {

  recette: any;

  constructor(private route: ActivatedRoute ,private router: Router) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.recette = this.router.getCurrentNavigation().extras.state.recette;
        console.log("recette =>",this.recette);
      }
    })

  }

  ngOnInit() {
  }

}
