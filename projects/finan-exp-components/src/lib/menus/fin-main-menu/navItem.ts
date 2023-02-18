import { NavMenuItem } from './navMenuItem';

export class NavItem extends NavMenuItem {
  public routerLink!:string;
  override label!:string;
  constructor(navItem: NavItem) {
    super(navItem)
    this.routerLink = navItem.routerLink
  }
  
}