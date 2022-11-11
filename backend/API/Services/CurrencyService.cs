using API.Interfaces;
using System.Collections.Generic;

namespace API.Services
{
    public class CurrencyService : ICurrencyService
    {
        public List<string> GetCurrencyList()
        {
            var result = new List<string>();

            // make request to bank and get currency list

            // ya eblan (
            result.Add("USD");

            return result;
        }
    }
}
