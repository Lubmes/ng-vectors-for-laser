// Angular 2
import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
//Data
import { Cover } from './data/cover';
import { Vector } from './data/vector';
import { VectorService } from './data/vector.service';
import { CoverService } from './data/cover.service';
// Components
import { DashboardComponent } from './dashboard.component';
import { InSightComponent } from './in-sight.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/html/app.component.html',
  styleUrls: ['app/css/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS, 
    VectorService,
    CoverService
  ]
})
@RouteConfig([
  {
    path: '/in-sight/:id',
    name: 'InSight',
    component: InSightComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  }
])
export class AppComponent implements OnInit { 
  title = "Lubmes";
  navVis: boolean = false;
  covers: Cover[] = [];
  vectors: Vector[] = []; 
  
  constructor(
    private coverService: CoverService, 
    private vectorService: VectorService) { }
    
  toggle() {
    this.navVis = !this.navVis;
  }
  
  getVectors() {
    this.vectorService.getVectors().then(vectors => this.vectors = vectors);
  }
  
  getCovers() {
    this.coverService.getCovers().then(covers => this.covers = covers);
  }
  
  ngOnInit() {
    this.getVectors();
    this.getCovers();
  }
}