import { Component, OnInit } from '@angular/core';
import { recettes } from '../../data.json/recette';
import { NavigationExtras , Router} from '@angular/router';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.page.html',
  styleUrls: ['./recette.page.scss'],
})


export class RecettePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
