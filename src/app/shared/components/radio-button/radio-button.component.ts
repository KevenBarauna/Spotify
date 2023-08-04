import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css'],
})
export class RadioButtonComponent {
  @Input() classStyle: string = ''
  @Input() label: string = ''
  @Input() disabled: boolean = false;
  @Input() id: string = ''
  @Input() isShowMessage: boolean = false;
  @Input() message: string = '';
  @Input() controlName: string = '';
}
