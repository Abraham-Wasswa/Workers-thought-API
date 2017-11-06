using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeService.Controllers
{
    public class TestController : ApiController
    {
        public string Get()
        {
            return "Helo from the Testcontroller";
        }
    }
}
