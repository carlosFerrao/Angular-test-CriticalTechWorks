import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() locations: string[];
  @Output() public enchangePositions = new EventEmitter();

  // Used for rendering
  getClasses(ctx, index) {
    let classes = `material-icons ${ctx}`;
    if (ctx === 'dots') {
      if (this.isLast(index)) {
        classes += ' hidden';
      }
    } else {
      classes += this.isLast(index) ? ' small' : ' x-small';
      if (index === 0) {
        classes += ' first';
      }
    }
    return classes;
  }

  // Used for rendering
  isLast(index) {
    return index === this.locations.length - 1;
  }

  enchange(type:string, currentIndex: number) {
      this.enchangePositions.emit({type, currentIndex});
  }
}
