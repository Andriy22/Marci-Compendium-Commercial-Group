using System.Collections.Generic;

namespace API.Interfaces
{
    public interface ICurrencyService
    {
        public List<Currency> GetCurrencyList();
    }
}
