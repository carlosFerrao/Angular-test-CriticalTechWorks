import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  locations: string[];

  constructor() {
  }

  ngOnInit() {
    this.locations = [...locations];
  }

  enchangeArray(event) {
    let tempArray = this.locations;
    this.setEnchange(tempArray, event);
  }

  setEnchange(preArray, event ) {
    if (event.type === 'down') {
      const deleteItem = this.locations.splice(event.currentIndex, 1,preArray[event.currentIndex +1]);
      this.locations.splice(event.currentIndex, 1,preArray[event.currentIndex + 1]);
      this.locations.splice(event.currentIndex + 1, 1,deleteItem[0]);
    } else {
      const deleteItem = this.locations.splice(event.currentIndex, 1,preArray[event.currentIndex -1]);
      this.locations.splice(event.currentIndex, 1,preArray[event.currentIndex -1]);
      this.locations.splice(event.currentIndex - 1, 1,deleteItem[0]);
    }
  }
}


const locations: string[] = [
  'Lombard St, San Francisco, CA, USA',
  'PIER 39, The Embarcadero, San Francisco, CA, USA',
  'Golden Gate Bridge, San Francisco, CA, USA',
  `Fisherman's Wharf, San Francisco, CA, USA`,
  'Alcatraz Island, San Francisco, CA, USA'
];
