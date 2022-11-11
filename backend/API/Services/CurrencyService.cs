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
    public class CurrencyService : ICurrencyService
    {
        public Currency GetCurrencyByCC(string cc)
        {
            if (BlackList.Curencies.Contains(cc.ToUpper())) 
            {
                throw new System.Exception(cc + " currency is blacklisted!");
            }

            var currency = GetCurrencyList().FirstOrDefault(x => x.ShortCurrencyName.ToLower() == cc.ToLower());
            if(currency == null)
            {
                throw new System.Exception(cc + " currency not found!");
            }

            return currency;
        }

        public List<Currency> GetCurrencyList()
        {
            var request = new RestRequest($"NBUStatService/v1/statdirectory/exchange?date={DateTime.Now.ToString("yyyyMMdd")}&json");

            var result = new List<Currency>();

            var response = HttpFactory.GetPrivateApi().Get(request);

            var CurrencyList = (JArray.Parse(response.Content));

            foreach (var item in CurrencyList)
            {
                var Currency = item.ToObject<Currency>();

                if (BlackList.Curencies.Contains(Currency.ShortCurrencyName)) 
                {
                    continue; 
                } 

                result.Add(Currency);
            }

            return result;
        }
    }
}