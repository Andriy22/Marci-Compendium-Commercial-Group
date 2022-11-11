using API.Helpers;
using API.Interfaces;
using Newtonsoft.Json.Linq;
using RestSharp;
using System.Collections.Generic;


namespace API.Services
{
    public class CurrencyService : ICurrencyService
    {

        public List<Currency> GetCurrencyList()
        {

            var request = new RestRequest("NBUStatService/v1/statdirectory/exchange?date=20200302&json");

            var result = new List<Currency>();

            var response = HttpFactory.GetPrivateApi().Get(request);

            var CurrencyList = (JArray.Parse(response.Content));

            foreach (var item in CurrencyList)
            {
                var Currency = item.ToObject<Currency>();


                result.Add(Currency);

            }

            return result;
        }
    }
}
