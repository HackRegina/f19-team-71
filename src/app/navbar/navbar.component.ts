import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isShown:boolean = false;
  navTitle: string;


  constructor(
    private route:ActivatedRoute, 
    private router:Router) {
      
  }

  ngOnInit() {
    //console.log(this.route.root.firstChild.snapshot.data['title']);    
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        if(['educations', 'education', 'quiz'].includes(this.route.root.firstChild.snapshot.data['title'])){
          this.navTitle = 'educations';
          console.log(this.navTitle);
        }

      }
    });    
  }

}
