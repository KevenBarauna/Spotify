import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/authentication/auth.service';
import { UserFormInterface } from 'src/app/core/user/user.interface';
import { enumMessage } from 'src/app/shared/enums/message.enum';
import { getMessageValidate } from 'src/app/shared/utils/validate';
import { enumRoutes } from 'src/app/shared/enums/routes.enum';


@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
})
export class PageHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  openTreeView(idMain: string, idChild: string): void {

    const mainElement = document.getElementById(idMain);
    console.log('Pai:',mainElement)
    if(mainElement){
      mainElement.classList.toggle("icon-tree-view-down");
    }

    const childElement = document.getElementById(idChild);
    if(childElement){

      const isOpen = childElement.style.visibility === 'visible'
      if(!isOpen){
        childElement.style.visibility = 'visible';
        childElement.style.display = '';
      }
      if(isOpen){
        childElement.style.visibility = 'hidden';
        childElement.style.display = 'none';
      }
    }
  }

}
