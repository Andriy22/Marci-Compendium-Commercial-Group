import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResultModel } from '@shared/models/result.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  public converterToUAHResult: BehaviorSubject<ResultModel<number>>;
  public converterFromUAHResult: BehaviorSubject<ResultModel<number>>;

  constructor(private http: HttpClient) {
    this.converterToUAHResult = new BehaviorSubject<ResultModel<number>>({
      data: 0,
      isLoading: false,
      isError: false,
    });

    this.converterFromUAHResult = new BehaviorSubject<ResultModel<number>>({
      data: 0,
      isLoading: false,
      isError: false,
    });
  }

  public ConvertToUAH(cc: string, amount: number) {
    this.converterToUAHResult.next({
      data: 0,
      isLoading: true,
      isError: false,
    });

    this.http
      .get<number>(`${environment.apiURL}/converter/convert-to-UAH/${cc}/${amount}`)
      .subscribe(
        data => {
          console.log(data);
          this.converterToUAHResult.next({
            data: Math.round(data * 100) / 100 ,
            isLoading: false,
            isError: false,
          });
        },
        error => {
          console.log(error);
          this.converterToUAHResult.next({
            data: 0,
            isLoading: false,
            isError: true,
          });
        }
      );
  }

  public ConvertFromUAH(cc: string, amount: number) {
    this.converterFromUAHResult.next({
      data: 0,
      isLoading: true,
      isError: false,
    });

    this.http
      .get<number>(`${environment.apiURL}/converter/convert-from-UAH/${cc}/${amount}`)
      .subscribe(
        (data: number) => {
          this.converterFromUAHResult.next({
            data: Math.round(data * 100) / 100,
            isLoading: false,
            isError: false,
          });
        },
        error => {
          this.converterFromUAHResult.next({
            data: 0,
            isLoading: false,
            isError: true,
          });
        }
      );
  }
}
