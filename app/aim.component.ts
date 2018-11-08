// Angular 2
import { Component, Input, OnInit, OnChanges } from '@angular/core';
// Data
import { Cover } from './data/cover';
import { Vector } from './data/vector';
import { VectorService } from './data/vector.service';

// Pipes
import { TypePipe } from './type-pipe';

@Component({
  selector: 'aim',
  pipes: [TypePipe],
  templateUrl: 'app/html/aim.component.html',
  styleUrls: ['app/css/aim.component.css']
})
export class AimComponent implements OnInit, OnChanges {
  vectorsByAimID: Vector[] = []; // Verzameling vectors onder de aim.
  @Input() currentAim: Cover; // Input uit het in-sight overzicht; uit een bovenliggende cover.
  
  constructor(  
      private vectorService: VectorService) { }
    
  getVectors() {
    this.vectorService.getVectors() // Wacht op promise resolve.
      .then(vectors => this.vectorsByAimID = vectors.filter(
        vector => vector.aim_id === this.currentAim.id)
    );
  }

  ngOnChanges() {
    this.getVectors();
  }

  ngOnInit() {
    this.getVectors();
  }
}