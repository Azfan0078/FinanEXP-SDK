import { NgModule } from "@angular/core";
import { ButtonsModule } from "./buttons/buttons.module";
import { CardsModule } from "./cards/cards.module";
import { InputsModule } from "./inputs/inputs.module";
import { SelectModule } from "./select/select.module";
import { TablesModule } from "./tables/tables.module";
import { MenusModule } from './menus/menus.module';
import { FinTextsModule } from "./texts";
import { DialogsModule } from "./dialogs";

@NgModule({
  declarations:[],
  exports: [
    ButtonsModule,
    CardsModule,
    FinTextsModule,
    InputsModule,
    SelectModule,
    TablesModule,
    MenusModule,
    DialogsModule
  ],
})
export class FinanEXPComponentsModule { }
