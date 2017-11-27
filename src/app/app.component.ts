import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  url = 'http://localhost:9090/';
  results: string;
  constructor(private http: HttpClient) {  }
  title = 'a simple angular 5 client app';
  get() {
    alert(this.url);
    this.http.get(this.url).subscribe(data => {
      this.results = data;
    });
  }
}
