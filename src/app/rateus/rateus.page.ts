import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rateus',
  templateUrl: './rateus.page.html',
  styleUrls: ['./rateus.page.scss'],
})
export class RateusPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  logRatingChange(rating) {
    console.log('changed rating: ', rating);
    // do your stuff
  }
}
