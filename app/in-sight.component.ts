// Angular 2
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
// Data
import { Cover } from './data/cover';
import { Vector } from './data/vector';
import { CoverService } from './data/cover.service';
// Components
import { AimComponent } from './aim.component';
import { ZoomsComponent } from './zooms.component';
import { VirtualsComponent } from './virtuals.component';

@Component({
  selector: 'in-sight',
  templateUrl: '/app/html/in-sight.component.html',
  styleUrls: ['app/css/in-sight.component.css'],
  directives: [AimComponent, ZoomsComponent, VirtualsComponent]
})
export class InSightComponent implements OnChanges, OnInit {
  currentAim: Cover; // Gegeven door de router.
  selectedZoom: Vector; // Voor virtuals input.
  
  constructor(
    private coverService: CoverService,
    private routeParams: RouteParams) { }
  
  ngOnChanges() {
   this.selectedZoom = null;
  }
  
  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.coverService.getCover(id)
      .then(cover => this.currentAim = cover);
  }
  
  onSelectingZoom(zoomVector: Vector) { this.selectedZoom = zoomVector; }
}