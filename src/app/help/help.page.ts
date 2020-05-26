import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    loop: true,
  };
  sliderOne: any;
  constructor() {
    this.sliderOne = {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 995,
          image: '../../assets/godictionary/1.png',
          title: 'HOME',
          desc: 'Search for a word pick a Random word Add Favourites',
          color: '#241352',
        },
        {
          id: 925,
          image: '../../assets/godictionary/2.png',
          title: 'FAVOURITES',
          desc: 'Search through your Favorites and select A word to view At any time.',
          color: '#A8094E',
        },
        {
          id: 940,
          image: '../../assets/godictionary/3.png',
          title: 'FEEDBACK',
          desc: 'Search for a word pick a Random word Add Favourites',
          color: '#241352',
        },
        {
          id: 943,
          image: '../../assets/godictionary/4.png',
          title: 'GUIDE',
          desc: '',
          color: '#3788FC',
        },
      ],
    };
  }

  ngOnInit() {}
}
