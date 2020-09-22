import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public countries : any = [];

  constructor(private _http: HttpClient) { }

  ngOnInit() {

    this._http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( data =>{
      this.countries = data;
    });
  }

  drop(event: CdkDragDrop<any>){
    
    moveItemInArray( this.countries, event.previousIndex, event.currentIndex );

  }

}
