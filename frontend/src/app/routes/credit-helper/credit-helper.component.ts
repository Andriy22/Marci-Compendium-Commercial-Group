import {Component, OnDestroy, OnInit} from '@angular/core';
import {CreditDepositService} from "@shared/services/api/credit-deposit.service";

@Component({
  selector: 'app-credit-helper',
  templateUrl: './credit-helper.component.html',
  styleUrls: ['./credit-helper.component.scss']
})
export class CreditHelperComponent implements OnDestroy{
  amountOfMoneyForCredit = 0
  quantityOfMonthForCredit = 1

  constructor(public creditDepositService: CreditDepositService) {
  }

  calculateCredit(amount: number, time: number) {
    this.creditDepositService.CalculateCredit(amount, time)
  }

  ngOnDestroy(): void {
    this.amountOfMoneyForCredit = 0
    this.quantityOfMonthForCredit = 1
    this.creditDepositService.creditValueResult.next({isLoading: false, isError: false, data: 0})
  }

}
