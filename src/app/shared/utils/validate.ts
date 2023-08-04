import { AbstractControl } from '@angular/forms';


export function getMessageValidate(formControl: AbstractControl | null): string{
  if(!formControl) return 'Erro ao validar campos'
  if(formControl?.status === 'VALID') return '';

  if(formControl?.errors?.['required']) return 'O campo é obrigatório';
  if(formControl?.errors?.['email']) return 'Email invalido';
  if(formControl?.errors?.['minlength']) return `O campo deve ter no mínimo `;
  if(formControl?.errors?.['maxLength']) return `O campo deve ter no máximo`;

  return 'Erro de validação';
}
