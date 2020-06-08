import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from './class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';

  constructor(private http:HttpClient){
    
    this.http.get<RootObject>("https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/9/query?where=1%3D1&outFields=*&outSR=4326&f=json")
      .subscribe((data)=>{
        console.log(data.features);
      });

  }
}
