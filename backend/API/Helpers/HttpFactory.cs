using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace API.Helpers
{
    public class HttpFactory
    {
        private static RestClient privateApi = null;
        public static RestClient GetPrivateApi()
        {
            if (privateApi == null)
            {
                privateApi = new RestClient("https://bank.gov.ua/");
            }

            return privateApi;
        }
    }
}
