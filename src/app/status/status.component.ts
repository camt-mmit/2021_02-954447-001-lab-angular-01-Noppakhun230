import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  public ngOnInit(): void {
    return;
  }
 time=new Date()
  Cook=navigator.cookieEnabled
  MTP=navigator.maxTouchPoints
  UA=navigator.userAgent
  VD=navigator.vendor
  lang=navigator.language
  hw=window.navigator.hardwareConcurrency
}
