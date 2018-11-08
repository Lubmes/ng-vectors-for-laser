import { Vector } from './vector'

export var VECTORS: Vector[] = [
  // MEI DE 6E, 2016
  // Building
  // Aim
  { 'id': 1, 'aim_id': 1, 'zoom_id': null, 'virtual_id': null, 'type': 'aim-as-cover', 
    'url': 'img/6by5s/first-outline.svg', 'title':'First outline' },
  // Zoom
  { 'id': 2, 'aim_id': 1, 'zoom_id': 1, 'virtual_id': null, 'type': 'zoom', 
    'url': '/img/7by6es/vertakkingsboom.svg', 'title':'Vertakkingsboom' },
  { 'id': 3, 'aim_id': 1, 'zoom_id': 2, 'virtual_id': null, 'type': 'zoom', 
    'url': '/img/7by6es/trap.svg', 'title':'Trap' },
  // Virtuals
  // virtual id 1
  { 'id': 5, 'aim_id': 1, 'zoom_id': 1, 'virtual_id': 1, 'type': 'search', 
    'url': '/img/7by6es/vloerdrager-skelet.svg', 'title':'Vloerdrager in skelet' },
  { 'id': 6, 'aim_id': 1, 'zoom_id': 1, 'virtual_id': 1, 'type': 'search', 
    'url': '/img/7by6es/vloerdrager-integraal.svg', 'title':'Vloerdrager integraal' },
  { 'id': 7, 'aim_id': 1, 'zoom_id': 1, 'virtual_id': 1, 'type': 'part', 
    'url': '/img/7by6es/tak-boven.svg', 'title':'Tak boven' },
  { 'id': 8, 'aim_id': 1, 'zoom_id': 1, 'virtual_id': 1, 'type': 'part', 
    'url': '/img/7by6es/tak-midden.svg', 'title':'Taken midden' },
  { 'id': 9, 'aim_id': 1, 'zoom_id': 1, 'virtual_id': 1, 'type': 'part', 
    'url': '/img/7by6es/tak-onder.svg', 'title':'Tak onder' },
  // virtual id 2
  { 'id': 10, 'aim_id': 1, 'zoom_id': 1, 'virtual_id': 2, 'type': 'search', 
    'url': '/img/7by6es/16-24-hoek-idee.svg', 'title':'16/24 hoekig idee' },
  { 'id': 11, 'aim_id': 1, 'zoom_id': 1, 'virtual_id': 2, 'type': 'search', 
    'url': '/img/7by6es/16-24-hoek-raster.svg', 'title':'16/24 hoekig raster' },
  // New Aim
  { 'id': 12, 'aim_id': 2, 'zoom_id': 1, 'virtual_id': null, 'type': 'aim-as-cover', 
    'url': 'img/6by5s/300x250px-temp.svg', 'title':'empty' },
    
  { 'id': 13, 'aim_id': 1, 'zoom_id': 3, 'virtual_id': null, 'type': 'zoom', 
    'url': '/img/7by6es/facade.svg', 'title':'Façade' },
    
    
];