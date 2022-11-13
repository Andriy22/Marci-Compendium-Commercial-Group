import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CreditHelperComponent } from './credit-helper/credit-helper.component';
import { DepositHelperComponent } from './deposit-helper/deposit-helper.component';

const COMPONENTS: any[] = [
  DashboardComponent,
  CreditHelperComponent,
  DepositHelperComponent
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, RoutesRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, ],
})
export class RoutesModule {}
