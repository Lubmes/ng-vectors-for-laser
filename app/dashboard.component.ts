// Angular 2
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
// Data
import { Cover } from './data/cover';
import { Vector } from './data/vector';
import { VectorService } from './data/vector.service';
import { CoverService } from './data/cover.service';
// Pipes
import { CoverVectorPipe } from './cover-vector-pipe';
// Components
import { InSightComponent } from './in-sight.component';

@Component({
  selector: 'dashboard',
  pipes: [CoverVectorPipe],
  templateUrl: 'app/html/dashboard.component.html',
  styleUrls: ['app/css/dashboard.component.css'],
  directives: [InSightComponent]
})
export class DashboardComponent implements OnInit {
  covers: Cover[] = [];
  vectorsByCoverType: Vector[] = []; // Verzamling vectors met een cover.
  selectedCover: Cover; // Voor de in-sight input.
 
  constructor(
    private router: Router,
    private coverService: CoverService,
    private vectorService: VectorService) { }
  
  getCovers() {
    this.coverService.getCovers().then(covers => this.covers = covers);
  }
  
  getVectors() {
    this.vectorService.getVectors() // Wacht op promise resolve.
      .then(vectors => this.vectorsByCoverType = vectors.filter(
        vector => vector.type === 'aim-as-cover')
    );
  }
 
  ngOnInit() {
    this.getVectors();
    this.getCovers();
  }
  
  // Koppeling cover-selectie aan een variable.
  gotoInSight(cover: Cover) { 
    let link = ['InSight', { id: cover.id }];
    this.router.navigate(link);  
  }
}