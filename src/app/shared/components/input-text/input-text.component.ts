import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent {
  @Input() class: string = ''
  @Input() type: string ="text"
  @Input() placeholder: string ="Input"

  valueInput: string = '';
}
