import { Component, Input } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class InputTextComponent {
  @Input() classStyle: string = '';
  @Input() type: string ="text";
  @Input() placeholder: string ="Input";
  @Input() label: string = '';
  @Input() controlName!: string;
  @Input() message: string = '';

  valueInput: string = '';

}
