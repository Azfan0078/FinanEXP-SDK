import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanEXPServicesModule } from './services/finan-exp-services.module';
import { FinanEXPComponentsModule } from './components/finan-exp-components.module';
import { FinanEXPPipesModule } from './pipes/finan-exp-pipes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[FinanEXPServicesModule, FinanEXPComponentsModule, FinanEXPPipesModule]
})
export class FinanExpSDKModule { }
