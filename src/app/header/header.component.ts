import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { MediaMatcher } from '@angular/cdk/layout';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  opened = true;

  constructor( ) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
