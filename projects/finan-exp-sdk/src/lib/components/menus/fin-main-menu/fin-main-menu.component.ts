import { NavMenuItem } from './navMenuItem';
import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { BreakpointState } from '@angular/cdk/layout';
import { CommonService } from '../../../services/commonServices/common.service';

@Component({
  selector: 'fin-main-menu',
  templateUrl: './fin-main-menu.component.html',
  styleUrls: ['./styles/fin-main-menu.component.css'],
  host: {
    class: 'h-100 w-100',
  },
})
export class FinMainMenuComponent implements OnDestroy {
  @Input() public navMenuItens!: Array<NavMenuItem>;
  @Input() public mainColor!:string;
  
  public isExtended = false;
  public smallScreen = false;
  private viewPortSizeObserver!: Subscription;

  @ViewChild(MatSidenav) sideNave!: MatSidenav;

  constructor(private commonService: CommonService) {
    this.viewPortSizeObserver = this.commonService
      .startViewPortSizeObserver()
      .subscribe((res: BreakpointState) => {
        if (res.matches) {
          this.smallScreen = true;
          this.isExtended = false;
          this.sideNave?.close();
        } else {
          this.smallScreen = false;
          this.isExtended = true;
          this.sideNave?.open();
        }
      });
  }
  ngOnDestroy(): void {
    this.viewPortSizeObserver.unsubscribe();
  }
}
