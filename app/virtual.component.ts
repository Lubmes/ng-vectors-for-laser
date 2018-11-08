// Angular 2
import { Component, Input, OnInit, OnChanges } from '@angular/core';
// Data
import { Virtual } from './data/virtual';
import { Vector } from './data/vector';
import { VectorService } from './data/vector.service';
// Pipes
import { TypePipe } from './type-pipe';
// Component
import { ExpandComponent } from './expand.component';

@Component({
  selector: 'virtual',
  pipes: [TypePipe],
  templateUrl: 'app/html/virtual.component.html',
  styleUrls: ['app/css/virtual.component.css'],
  directives: [ExpandComponent]
})
export class VirtualComponent implements OnInit, OnChanges {
  vectorsByVirtualID: Vector[] = []; // Verzamling vectors onder de virtual; onder de zoom; onder de aim.
  @Input() currentVirtual: Virtual; // Input uit het in-sight overzicht; uit de zoom output; uit de virtual id.
  selectedVector: Vector;
  
  constructor(
    private vectorService: VectorService) {}
    
  getVectors() {
    this.vectorService.getVectors() // Wacht op promise resolve.
      .then(vectors => this.vectorsByVirtualID = vectors.filter(
        vector => vector.virtual_id === this.currentVirtual.id)
    );
  }
  
  ngOnChanges() {
    this.getVectors();
  }

  ngOnInit() {
    this.getVectors();
  }
  
  gotoExpand(expandingVector: Vector) { this.selectedVector = expandingVector; }
}