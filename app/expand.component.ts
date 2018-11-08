// Angular 2
import { Component, Input, OnChanges } from '@angular/core';
// Data
import { Vector } from './data/vector';

@Component({
    selector: 'expand',
    templateUrl: 'app/html/expand.component.html',
    styleUrls: ['app/css/expand.component.css']
})
export class ExpandComponent implements OnChanges {
    @Input() currentExpandable: Vector;

    ngOnChanges() { 
        
    }
    
    closeExpand() {
        this.currentExpandable = null;
    }
    
}