import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.css'],
})
export class MessageErrorComponent {
  @Input() classStyle: string = '';
  @Input() isShowMessage: boolean = false;
  @Input() message: string = '';
}
