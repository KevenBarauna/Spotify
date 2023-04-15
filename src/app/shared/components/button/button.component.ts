import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css', './styleFixed.css'],
})
export class ButtonComponent {
  @Input() classStyle: string = ''
  @Input() text: string ="Button"

}
