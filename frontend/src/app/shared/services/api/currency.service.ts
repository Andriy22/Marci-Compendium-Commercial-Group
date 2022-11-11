import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { CurrencyModel } from '@shared/models/currency.model';
import { BehaviorSubject } from 'rxjs';
import { MessageService } from '@shared';
import { ResultModel } from '@shared/models/result.model';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  public currencyListResult: BehaviorSubject<ResultModel<CurrencyModel[]>>;

  constructor(private http: HttpClient, private messageService: MessageService) {
    this.currencyListResult = new BehaviorSubject<ResultModel<CurrencyModel[]>>({
      isError: false,
      isLoading: false,
      data: [],
    });
  }

  public UpdateCurrencyList() {
    this.currencyListResult.next({
      isError: false,
      isLoading: true,
      data: [],
    });

    this.http.get<CurrencyModel[]>(environment.apiURL + '/currency/get-currency-list').subscribe(
      (data: CurrencyModel[]) => {
        this.currencyListResult.next({
          isError: false,
          isLoading: false,
          data: data,
        });
      },
      error => {
        this.messageService.add(error);
        this.currencyListResult.next({
          isError: true,
          isLoading: false,
          data: [],
        });
      }
    );
  }
}
