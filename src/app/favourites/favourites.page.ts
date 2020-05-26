import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  favs = [] as any;
  constructor(private router: Router) {}

  ngOnInit() {
    const hasFavs = !!window.localStorage.getItem('favs');
    if (hasFavs) {
      const favsStr = window.localStorage.getItem('favs');
      this.favs = JSON.parse(favsStr);
    }
  }

  gotoDetailpage(word) {
    this.router.navigate([`/listdetail/${word.id}/${word.word}/${word.wordtype}/${word.wordmeaning}`]);
  }
}
