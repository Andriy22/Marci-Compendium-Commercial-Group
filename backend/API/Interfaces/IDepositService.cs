using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IDepositService
    {
        public double Calculate(float sum, int daysCount);
    }
}
