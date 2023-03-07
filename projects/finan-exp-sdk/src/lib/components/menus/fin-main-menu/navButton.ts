import { NavMenuItem } from './navMenuItem';

export class NavButton extends NavMenuItem {
  public clickEvent!: Function;
  override icon!: string;
  
  constructor(navButton: NavButton) {
    super(navButton)
    this.clickEvent = navButton.clickEvent;
  }
  
}
