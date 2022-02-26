import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  offset:boolean;
  HTML5:string = "assets/images/html5.png";
  CSS3:string = "assets/images/css3.png";
  js:string = "assets/images/js.png";
  bootstrap:string = "assets/images/bootstrap.png";
  jquery:string = "assets/images/jquery.png";
  json:string = "assets/images/json.png";
  ajax:string = "assets/images/ajax.png";
  angular:string = "assets/images/angular.png";
  github:string = "assets/images/github.png";
  c:string = "assets/images/c.png";
  java:string = "assets/images/java.png";
  sql:string = "assets/images/sql.png";
  firebase:string = "assets/images/firebase.png";
  constructor() { }

  ngOnInit(): void {
  }
  
  scroll()
  {
    window.scroll({
      top: 0,      
      behavior: 'smooth'
    });
    console.log(window.pageYOffset);
  }
  @HostListener("document:scroll")
  onscroll()
  {
    if(document.documentElement.scrollTop >300)
    {
      this.offset = true;
    }else
    {
      this.offset = false;
    }
  }
}

