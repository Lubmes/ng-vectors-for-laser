// Angular 2
import { Component, Input, OnInit, OnChanges } from '@angular/core';
// Data
import { Vector } from './data/vector';
import { Virtual } from './data/virtual';
import { VirtualService } from './data/virtual.service';
// Components
import { VirtualComponent } from './virtual.component';

@Component({
  selector: 'virtuals',
  templateUrl: 'app/html/virtuals.component.html',
  styleUrls: ['app/css/virtuals.component.css'],
  directives: [VirtualComponent],
  providers: [VirtualService]
})
export class VirtualsComponent implements OnInit, OnChanges { 
  virtualsByZoomID: Virtual[] = []; // Verzameling virtuals uit de geselecteerde zoom. 
  @Input() currentZoom: Vector; // Geselecteerde zoom: Input uit het in-sight overzicht; uit de zoom output.
  
  constructor(
    private virtualService: VirtualService) {}
    
  getVirtuals() {
    this.virtualService.getVirtuals() // Wacht op promise resolve.
      .then(virtuals => this.virtualsByZoomID = virtuals.filter(
        virtual => virtual.zoom_id === this.currentZoom.zoom_id)
    );
  }

  ngOnChanges() {
    this.getVirtuals();
  }

  ngOnInit() {  
    this.getVirtuals(); 
  }
}