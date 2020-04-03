import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.page.html',
  styleUrls: ['./list-detail.page.scss']
})
export class ListDetailPage implements OnInit {
  word = {} as any;

  constructor(private route: ActivatedRoute) {
    const routeParam = route.snapshot.params;
    this.word = {
      id: routeParam.id,
      word: routeParam.word,
      wordtype: routeParam.wordtype,
      wordmeaning: routeParam.wordmeaning
    };
  }

  toggleFav() {
    const hasFavs = !!window.localStorage.getItem('favs');
    if (hasFavs) {
      const favsStr = window.localStorage.getItem('favs');
      const favs = JSON.parse(favsStr);
      const fav = favs.find(f => f.id === this.word.id);
      if (fav) {
        const favIndex = favs.findIndex(f => f.id === this.word.id);
        favs.splice(favIndex, 1);
        alert(`"${this.word.word}" has been removed from favourites`);
      } else {
        favs.push(this.word);
        alert(`"${this.word.word}" has been added from favourites`);
      }
      window.localStorage.setItem('favs', JSON.stringify(favs));
    } else {
      window.localStorage.setItem('favs', JSON.stringify([this.word]));
      alert(`"${this.word.word}" has been added from favourites`);
    }
  }

  ngOnInit() {}
}
