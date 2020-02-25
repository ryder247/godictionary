import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutPage implements OnInit {
  constructor(private loc: Location) {}

  ngOnInit() {}

  goback() {
    this.loc.back();
  }
}
