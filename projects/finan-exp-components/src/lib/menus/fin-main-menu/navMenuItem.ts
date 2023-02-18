export class NavMenuItem{
  public icon?:string;
  public label?:string;
  public isBold? = false;
  public position!:'upper' | 'middle' | 'down';

  constructor(navMenuItem:NavMenuItem) {
    this.icon = navMenuItem.icon
    this.label = navMenuItem.label
    this.position = navMenuItem.position
    this.isBold = navMenuItem.isBold
  }
  
}