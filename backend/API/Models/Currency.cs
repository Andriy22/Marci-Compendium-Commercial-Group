using Newtonsoft.Json;
using System;

public class Currency
{
    [JsonProperty("txt", Required = Required.Always)]
    public string FullCurrencyName { get; set; }

    [JsonProperty("cc", Required = Required.Always)]
    public string ShortCurrencyName { get; set; }
    public float Rate { get; set; }
}
