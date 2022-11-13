import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CurrencyService } from '@shared/services/api/currency.service';
import { ConverterService } from '@shared/services/api/converter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  selectedItemFrom = 'USD'
  selectedAmountFrom: number = 0

  selectedItemTo = 'USD'
  selectedAmountTo: number = 0
  constructor(
    public currencyService: CurrencyService,
    public converter: ConverterService
  ) {}

  ngOnInit() {
    this.currencyService.UpdateCurrencyList();
  }

  ngOnDestroy(): void {
    this.selectedItemFrom = 'USD'
    this.selectedAmountFrom = 0

    this.selectedItemTo = 'USD'
    this.selectedAmountTo = 0
    this.converter.converterFromUAHResult.next({isLoading: false, isError: false, data: 0})
    this.converter.converterToUAHResult.next({isLoading: false, isError: false, data: 0})
  }
}
