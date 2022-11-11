import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResultModel } from '@shared/models/result.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class CreditDepositService {
  public depositValueResult: BehaviorSubject<ResultModel<number>>;
  public creditValueResult: BehaviorSubject<ResultModel<number>>;

  constructor(private http: HttpClient) {
    this.depositValueResult = new BehaviorSubject<ResultModel<number>>({
      data: 0,
      isLoading: false,
      isError: false,
    });

    this.creditValueResult = new BehaviorSubject<ResultModel<number>>({
      data: 0,
      isLoading: false,
      isError: false,
    });
  }

  public CalculateDeposit(amount: number, days: number) {
    this.depositValueResult.next({
      data: 0,
      isLoading: true,
      isError: false,
    });

    this.http
      .get<number>(`${environment.apiURL}/creditdeposit/get-deposit-value/${amount}/${days}`)
      .subscribe(
        (data: number) => {
          this.depositValueResult.next({
            data: data,
            isLoading: false,
            isError: false,
          });
        },
        error => {
          this.depositValueResult.next({
            data: 0,
            isLoading: false,
            isError: true,
          });
        }
      );
  }

  public CalculateCredit(amount: number, month: number) {
    this.creditValueResult.next({
      data: 0,
      isLoading: true,
      isError: false,
    });

    this.http
      .get<number>(`${environment.apiURL}/creditdeposit/get-credit-value/${amount}/${month}`)
      .subscribe(
        (data: number) => {
          this.creditValueResult.next({
            data: data,
            isLoading: false,
            isError: false,
          });
        },
        error => {
          this.creditValueResult.next({
            data: 0,
            isLoading: false,
            isError: true,
          });
        }
      );
  }
}
