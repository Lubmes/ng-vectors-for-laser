// Angular 2
import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
// Data
import { Cover } from './data/cover';
import { Vector } from './data/vector';
import { VectorService } from './data/vector.service';
// Pipes
import { TypePipe } from './type-pipe';

@Component({
  selector: 'zooms',
  pipes: [TypePipe],
  templateUrl: 'app/html/zooms.component.html',
  styleUrls: ['app/css/zooms.component.css']
})
export class ZoomsComponent implements OnInit, OnChanges {
  vectorsByZoomIDByAimID: Vector[] = []; // Voor de verzameling vectors onder de zoom; onder de aim.
  selectedZoom: Vector; // Voor de geselecteerde vector.
  @Input() currentAim: Cover; // Input uit het in-sight overzicht; uit een bovenliggende cover.
  @Output() zoomSelect = new EventEmitter(); // Output naar het in-sight overzicht.
  
  constructor(
    private vectorService: VectorService) {}
    
  getVectors() {
    this.vectorService.getVectors() // Wacht op promise resolve.
      .then(vectors => this.vectorsByZoomIDByAimID = vectors.filter(
        vector => vector.aim_id === this.currentAim.id)
    );
  }

  ngOnChanges() {
    this.getVectors();
    this.selectedZoom = null;
  }

  ngOnInit() {
    this.getVectors();
  }

  onSelect(vector: Vector) { 
    if (this.selectedZoom != vector) {
      this.selectedZoom = vector;
    } else {
      this.selectedZoom = null;
    }
    this.zoomSelect.emit(this.selectedZoom);
  }
}
