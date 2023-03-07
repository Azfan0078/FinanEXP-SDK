import { Component, OnInit } from '@angular/core';
import { DialogControlService } from 'projects/finan-exp-sdk/src/lib/services';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(private dialogControlService:DialogControlService) { }

  ngOnInit(): void {
  }
  public teste(){
    this.dialogControlService.openConfirmationDialog('VAI CONFIRMAR OU NÃO ?')
  }
}
