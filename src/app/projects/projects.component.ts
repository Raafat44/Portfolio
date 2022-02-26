import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  offset:boolean; 
  firstImage:string = "assets/images/colorlib.png" ;
  secondImage:string = "assets/images/flights.png" ;
  thirdImages:string = "assets/images/restaurant.png" ;
  forthImage:string = "assets/images/security.png" ;
  fifthImage:string = "assets/images/game.png" ;
  portfolio:string = "assets/images/portfolio.png" ;
  TaskManager:string = "assets/images/taskmanager.png";
  EcommerceApp:string = "assets/images/ecommerceapp.png";

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
