using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using BoDi;
using Coypu;
using TechTalk.SpecFlow;

namespace AcceptanceTests
{
    [Binding]
    public class Hooks
    {
        // For additional details on SpecFlow hooks see http://go.specflow.org/doc-hooks

        private readonly IObjectContainer _objectContainer;
        private BrowserSession _browser;

        public Hooks(IObjectContainer objectContainer)
        {
            _objectContainer = objectContainer;
        }


        [BeforeFeature]
        public static void BeforeFeature()
        {
            //TODO: implement logic that has to run before executing each scenario
        }

        [AfterFeature]
        public static void AfterFeature()
        {
            //TODO: implement logic that has to run after executing each scenario
        }

        [BeforeScenario]
        public void BeforeScenario()
        {
            var uri = new Uri(ConfigurationManager.AppSettings["applicationUrl"]);
            var browserSessionConfiguration = new SessionConfiguration
            {
                Timeout = TimeSpan.FromSeconds(3),
                AppHost = uri.Host,
                Port = uri.Port,
                SSL = "https".Equals(uri.Scheme, StringComparison.OrdinalIgnoreCase),
                Browser = Coypu.Drivers.Browser.Chrome
            };
            _browser = new BrowserSession(browserSessionConfiguration);
            //_browser = new BrowserSession(browserSessionConfiguration, new CanaryChromeSeleniumWebDriver());
            _objectContainer.RegisterInstanceAs(_browser);
        }

        [AfterScenario]
        public void AfterScenario()
        {
            _browser.Dispose();
            _browser = null;
        }
    }

    public class AuroraSeleniumWebDriver : Coypu.Drivers.Selenium.SeleniumWebDriver
    {
        public AuroraSeleniumWebDriver()
            : base(CreateWebDriver(), Coypu.Drivers.Browser.Firefox)
        {
        }

        private static OpenQA.Selenium.IWebDriver CreateWebDriver()
        {
            var binary = new OpenQA.Selenium.Firefox.FirefoxBinary(@"C:\Program Files (x86)\Aurora\firefox.exe");
            var profile = new OpenQA.Selenium.Firefox.FirefoxProfile();
            return new OpenQA.Selenium.Firefox.FirefoxDriver(binary, profile);
        }
    }

    public class CanaryChromeSeleniumWebDriver : Coypu.Drivers.Selenium.SeleniumWebDriver
    {
        public CanaryChromeSeleniumWebDriver()
            : base(CreateWebDriver(), Coypu.Drivers.Browser.Chrome)
        {
        }

        private static OpenQA.Selenium.IWebDriver CreateWebDriver()
        {
            return new OpenQA.Selenium.Chrome.ChromeDriver(new OpenQA.Selenium.Chrome.ChromeOptions
            {
                BinaryLocation = @"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
            });
        }
    }
}
