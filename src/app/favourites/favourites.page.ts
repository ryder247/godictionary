import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss']
})
export class FavouritesPage implements OnInit {
  favs = [] as any;
  constructor(private router: Router) {}

  // const hasFavs = !!window.localStorage.getItem('favs');
  //   if (hasFavs) {
  //     const favsStr = window.localStorage.getItem('favs');
  //     const favs = JSON.parse(favsStr);
  //     const fav = favs.find(f => f.id === this.word.id);
  //     if (fav) {
  //       const favIndex = favs.findIndex(f => f.id === this.word.id);
  //       favs.splice(favIndex, 1);
  //       alert(`"${this.word.word}" has been removed from favourites`);
  //     } else {
  //       favs.push(this.word);
  //       alert(`"${this.word.word}" has been added from favourites`);
  //     }
  //     window.localStorage.setItem('favs', JSON.stringify(favs));
  //   } else {
  //     window.localStorage.setItem('favs', JSON.stringify([this.word]));
  //     alert(`"${this.word.word}" has been added from favourites`);
  //   }

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
