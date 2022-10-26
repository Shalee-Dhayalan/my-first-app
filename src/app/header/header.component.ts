import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  source:string="/assets/image.PNG";
  slogan:string="You use one step application"
  siteslogan()
  {
    return "This is a new slogan";
  }
  add()
  {
    return 10+20;
  }
}
