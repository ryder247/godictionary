import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  gotoApp = true;
  public appPages = [
    {
      title: 'Home',
      url: 'h',
      icon: 'home'
    },
    {
      title: 'Random word',
      url: 'r',
      icon: 'sync'
    },
    {
      title: 'Favourites',
      url: 'f',
      icon: 'star'
    },
    {
      title: 'About',
      url: 'a',
      icon: 'help'
    },
    {
      title: 'Developers',
      url: 'dev',
      icon: 'people-outline'
    },
    {
      title: 'Feedback',
      url: 'fbk',
      icon: 'book-outline'
    },
    {
      title: 'Help',
      url: 'hl',
      icon: 'body-outline'
    },
    {
      title: 'Rate us',
      url: 'ru',
      icon: 'star-half-outline'
    }
  ];
  originalJson: any[];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http: HttpClient,
    private router: Router
  ) {
    this.initializeApp();

    this.http.get('../../assets/words.csv', { responseType: 'text' }).subscribe(res => {
      let json = this.csvJSON(res);
      json = json.filter(j => j.word);
      this.originalJson = json;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  gotoPage(url: string) {
    switch (url) {
      case 'r':
        const randomWord = this.originalJson[Math.floor(Math.random() * this.originalJson.length)];
        this.router.navigate([`/listdetail/${randomWord.id}/${randomWord.word}/${randomWord.wordtype}/${randomWord.wordmeaning}`]);
        break;
      case 'f':
        this.router.navigate(['/favourites']);
        break;
      case 'h':
        this.router.navigate(['/home']);
        break;
      case 'a':
        this.router.navigate(['/about']);
        break;
      case 'dev':
        this.router.navigate(['/developers']);
        break;
      case 'fbk':
        this.router.navigate(['/feedback']);
        break;
      case 'hl':
        this.router.navigate(['/help']);
        break;
      case 'ru':
        this.router.navigate(['/rateus']);
        break;
      default:
        return;
    }
  }

  closeApp() {
    // TODO: close the app
  }

  csvJSON(csv: any) {
    const lines = csv.split('\n');
    const result = [];
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentline = lines[i].split(',');

      for (let j = 0; j < headers.length; j++) {
        const header = headers[j].trim();
        obj[header] = currentline[j];
      }
      result.push(obj);
    }
    return result; //JSON
  }
}
