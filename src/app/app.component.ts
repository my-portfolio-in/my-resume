import { Component,OnInit} from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import * as $ from 'jquery';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back"
    });
  }
  
}