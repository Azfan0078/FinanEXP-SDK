import { Component, Input } from '@angular/core';

@Component({
  selector: 'fin-button',
  templateUrl: './fin-button.component.html',
  styleUrls: ['./fin-button.component.css']
})
export class FinButtonComponent {
  @Input() public color!:string;
  @Input() public disabled?:boolean;
  @Input() public type?:string = 'button';
}
