import { Component, OnInit } from '@angular/core';
import {CreditDepositService} from "@shared/services/api/credit-deposit.service";

@Component({
  selector: 'app-deposit-helper',
  templateUrl: './deposit-helper.component.html',
  styleUrls: ['./deposit-helper.component.scss']
})
export class DepositHelperComponent  {
  amountOfMoneyForDeposit = 0
  quantityOfMonthForDeposit = 1

  constructor(public creditDepositService: CreditDepositService) {
  }


  calculateDeposit(amount: number, time: number) {
    this.creditDepositService.CalculateDeposit(amount, time * 30)
  }

  ngOnDestroy(): void {
    this.amountOfMoneyForDeposit = 0
    this.quantityOfMonthForDeposit = 1
    this.creditDepositService.depositValueResult.next({isLoading: false, isError: false, data: 0})
  }

}
