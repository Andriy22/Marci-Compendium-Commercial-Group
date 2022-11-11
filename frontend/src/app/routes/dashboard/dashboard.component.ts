import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CurrencyService } from '@shared/services/api/currency.service';
import { ConverterService } from '@shared/services/api/converter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor(
    private cdr: ChangeDetectorRef,
    public currencyService: CurrencyService,
    private converter: ConverterService
  ) {}

  ngOnInit() {
    this.currencyService.UpdateCurrencyList();
    this.converter.ConvertToUAH('USD', 1000);
    this.converter.converterToUAHResult.subscribe(data => {
      console.log(data.data);
    });
  }
}
