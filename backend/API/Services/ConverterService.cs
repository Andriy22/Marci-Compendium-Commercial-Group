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
    public class ConverterService : IConverterService
    {
        private readonly ICurrencyService _currencyService;

        public ConverterService(ICurrencyService currencyService)
        {
            _currencyService = currencyService;
        }

        public float ConvertToUAH(string cc, float amount)
        {
            var Currency = _currencyService.GetCurrencyList().FirstOrDefault(x => x.ShortCurrencyName.ToLower() == cc.ToLower());
            if (Currency == null)
            {
                throw new Exception("invalid Currency");
            }

            return amount * Currency.Rate;
        }
    }
}