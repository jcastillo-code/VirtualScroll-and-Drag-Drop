import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport, {static:true} ) viewport: CdkVirtualScrollViewport;

  public people = Array(1000).fill(0);

  constructor() { }

  ngOnInit() {
  }

  goToEnd(){
    this.viewport.scrollToIndex( this.people.length );
  }

  goToStart(){
    this.viewport.scrollToIndex( 0 );
  }

  goToMid(){
    this.viewport.scrollToIndex( this.people.length / 2 );
  }
}
