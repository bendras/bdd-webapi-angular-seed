using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication.Models;

namespace WebApplication.Controllers
{
    public class VersionController : ApiController
    {
        // GET api/version
        public ApiVersion Get()
        {
            return new ApiVersion { Version = "1.0.0" };
        }
    }
}
