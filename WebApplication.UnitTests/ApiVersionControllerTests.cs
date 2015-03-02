using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using WebApplication.Controllers;

namespace WebApplication.UnitTests
{
    [TestFixture]
    public class ApiVersionControllerTests
    {
        [Test]
        public void GetApiVersion()
        {
            var controller = new VersionController();

            var result = controller.Get();

            Assert.That(result.Version, Is.StringMatching(@"^\d+\.\d+\.\d+(\.\d+)?$"), "Version number should be in semver format.");
        }
    }
}
