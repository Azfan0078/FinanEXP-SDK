import { NgModule } from "@angular/core";
import { ButtonsModule } from "./buttons/buttons.module";
import { CardsModule } from "./cards/cards.module";
import { FinCommonModule } from "./common/fin-common.module";
import { DialogsModule } from "./dialogs/dialogs.module";
import { InputsModule } from "./inputs/inputs.module";
import { SelectModule } from "./select/select.module";
import { TablesModule } from "./tables/tables.module";

@NgModule({
  declarations:[],
  exports: [
    ButtonsModule,
    CardsModule,
    FinCommonModule,
    DialogsModule,
    InputsModule,
    SelectModule,
    TablesModule
  ]
})
export class FinanEXPComponentsModule { }
