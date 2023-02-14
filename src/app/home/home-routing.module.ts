import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'inputs',
        loadChildren: () => import('./inputs/inputs.module').then(m => m.InputsModule),
      },
      {
        path: 'buttons',
        loadChildren: () => import('./buttons/buttons.module').then(m => m.ButtonsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
