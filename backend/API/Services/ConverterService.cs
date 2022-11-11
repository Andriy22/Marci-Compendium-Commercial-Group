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

        public float ConvertFromUAH(string cc, float amount)
        {
            var Currency = _currencyService.GetCurrencyByCC(cc);

            return amount / Currency.Rate;
        }

        public float ConvertToUAH(string cc, float amount)
        {
            var Currency = _currencyService.GetCurrencyByCC(cc);

            return amount * Currency.Rate;
        }
    }
}