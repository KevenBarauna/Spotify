import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-button',
  templateUrl: './checkbox-button.component.html',
  styleUrls: ['./checkbox-button.component.css'],
})
export class CheckBoxComponent {
  @Input() classStyle: string = ''
  @Input() label: string = ''
  @Input() disabled: boolean = false;
  @Input() isShowMessage: boolean = false;
  @Input() message: string = '';
}
