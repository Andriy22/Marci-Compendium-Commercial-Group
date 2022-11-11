import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
    private cdr: ChangeDetectorRef,
    public currencyService: CurrencyService,
    public converter: ConverterService
  ) {}

  ngOnInit() {
    this.currencyService.UpdateCurrencyList();
  }
}
