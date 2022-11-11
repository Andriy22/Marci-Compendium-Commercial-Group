using System.Collections.Generic;

namespace API.Interfaces
{
    public interface IConverterService
    {
        public float ConvertToUAH(string cc, float amount);
    }
}
