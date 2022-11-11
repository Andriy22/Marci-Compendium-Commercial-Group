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
    public class CreditService : ICreditService
    {

        public double Calculate(float sum, int creditTerm)
        {
            return sum * (CreditConsts.Rate + (CreditConsts.Rate / (Math.Pow(1 + CreditConsts.Rate, creditTerm) - 1)));
        }
    }
}