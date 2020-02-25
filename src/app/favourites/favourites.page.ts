import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss']
})
export class FavouritesPage implements OnInit {
  favourites = [
    { word: 'Art', addedat: '' },
    { word: 'Dictionary', addedat: '' },
    { word: 'Gold', addedat: '' }
  ];
  constructor() {}

  ngOnInit() {}
}
