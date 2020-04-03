import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  inputHasData = false;
  items = ['ama', 'kwadjo'];
  originalJson = [] as any;
  json = [] as any;
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('../../assets/words.csv', { responseType: 'text' }).subscribe(res => {
      let json = this.csvJSON(res);
      json = json.filter(j => j.word);
      this.originalJson = json;
      this.json = json;
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
      case 'a':
        this.router.navigate(['/about']);
        break;
      default:
        return;
    }
  }

  onKey(val: string) {
    if (val.length > 0) {
      this.json = this.originalJson.filter(o => {
        return o.word.toLowerCase().startsWith(val.toLowerCase());
      });
    }
  }

  onFocus(val: string) {
    console.log('sgdg', val);
    this.inputHasData = true;
  }

  onBlur(val: string) {
    console.log(val);
    if (val.length < 1) {
      this.inputHasData = false;
    }
  }

  gotoDetailpage(word) {
    this.router.navigate([`/listdetail/${word.id}/${word.word}/${word.wordtype}/${word.wordmeaning}`]);
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
