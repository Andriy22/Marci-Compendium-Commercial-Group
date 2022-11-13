using API.Consts;
using API.Helpers;
using API.Interfaces;
using Newtonsoft.Json.Linq;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;

namespace API.Services
{
    public class DepositService : IDepositService
    {

        public double Calculate(float sum, int daysCount)
        {
            return (sum * DepositConsts.Rate * daysCount / DepositConsts.yearDays) / 100;
        }
    }
}