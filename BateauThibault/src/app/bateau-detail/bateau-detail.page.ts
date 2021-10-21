import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bateau-detail',
  templateUrl: './bateau-detail.page.html',
  styleUrls: ['./bateau-detail.page.scss'],
})
export class BateauDetailPage implements OnInit {

  bateau: any;

  constructor(private route: ActivatedRoute ,private router: Router) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.bateau = this.router.getCurrentNavigation().extras.state.bateau;
        console.log("bateau =>",this.bateau);
      }
    })
  }

  ngOnInit() {
  }

}
