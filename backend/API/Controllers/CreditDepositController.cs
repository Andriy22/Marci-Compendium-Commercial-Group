using API.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreditDepositController : ControllerBase
    {
        private readonly IDepositService depositService;
        private readonly ICreditService creditService;

        public CreditDepositController(IDepositService depositService, ICreditService creditService)
        {
            this.depositService = depositService;
            this.creditService = creditService;
        }

        [HttpGet("get-deposit-value/{sum}/{days}")]
        public IActionResult GetDepositValue (float sum, int days)
        {
            return Ok(depositService.Calculate(sum, days));
        }

        [HttpGet("get-credit-value/{sum}/{month}")]
        public IActionResult GetCreditValue(float sum, int month)
        {
            return Ok(creditService.Calculate(sum, month));
        }
    }
}