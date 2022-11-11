using API.Interfaces;
using API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConverterController : ControllerBase
    {
        private readonly IConverterService converterService;

        public ConverterController(IConverterService converterService)
        {
            this.converterService = converterService;
        }

        [HttpGet("convert-to-UAH/{cc}/{amount}")]
        public IActionResult ConvertToUAH(string cc, float amount)
        {
            try
            {
                return Ok(converterService.ConvertToUAH(cc, amount));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("convert-from-UAH/{cc}/{amount}")]
        public IActionResult ConvertFromUAH(string cc, float amount)
        {
            try
            {
                return Ok(converterService.ConvertFromUAH(cc, amount));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
