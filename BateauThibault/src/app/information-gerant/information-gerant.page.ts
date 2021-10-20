import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' ;


@Component({
  selector: 'app-information-gerant',
  templateUrl: './information-gerant.page.html',
  styleUrls: ['./information-gerant.page.scss'],
})
export class InformationGerantPage implements OnInit {

  constructor(private router : Router) {}

  ReturnToHome(){
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }

}



  
