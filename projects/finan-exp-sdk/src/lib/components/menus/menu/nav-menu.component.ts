import { NavMenuItem } from './../fin-main-menu/navMenuItem';
import { Component, Input, OnInit } from '@angular/core';
import { MenuPositionX } from '@angular/material/menu';
import { NavItem } from '../fin-main-menu/navItem';
import { NavButton } from '../fin-main-menu/navButton';
import { CommonService } from '../../../services/commonServices/common.service';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./styles/nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  @Input() navMenuItens!: Array<NavMenuItem>;
  @Input() smallScreen = false;

  public middleItens:Array<NavMenuItem> = [];
  public upperItens:Array<NavMenuItem> = [];
  public downItens:Array<NavMenuItem> = [];

  public menuPositionX: MenuPositionX = 'before';
  public processedItens = false;

  constructor(
    private commonService: CommonService,
  ) {
    
  }
  ngOnInit(): void {
    this.processNavItens();
  }

  public logout(): void {
    this.commonService.logout();
  }

  public isButton(item:NavMenuItem): boolean {
    return item instanceof NavButton 
  }
  public isNavItem(item:NavMenuItem): boolean {
    return item instanceof NavItem
  }
  public navButtonClickEvent(item:NavMenuItem) {
    if(this.isButton(item)) {
      const button = item as NavButton
      button.clickEvent();
    }
  }
  public getRouterLink(item:NavMenuItem):string {
    if(item instanceof NavItem) {
      return item.routerLink
    } else {
      return ''
    }
  }
  private processNavItens(){
    this.downItens = this.navMenuItens.filter((item:NavMenuItem) => item.position === 'down')

    this.middleItens = this.navMenuItens.filter((item:NavMenuItem) => item.position === 'middle')
    
    this.upperItens = this.navMenuItens.filter((item:NavMenuItem) => item.position === 'upper')

    this.processedItens = true
    
  }
}
