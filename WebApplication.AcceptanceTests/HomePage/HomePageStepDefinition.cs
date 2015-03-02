using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Coypu;
using Coypu.NUnit.Matchers;
using NUnit.Framework;
using TechTalk.SpecFlow;

namespace AcceptanceTests.HomePage
{
    [Binding]
    public class HomePageStepDefinition
    {
        private readonly BrowserSession _browser;

        public HomePageStepDefinition(BrowserSession browser)
        {
            _browser = browser;
        }

        [Given(@"I am in '(.*)' page")]
        public void GivenIAmInPage(string url)
        {
            _browser.Visit(url);
        }


        [Then(@"I should see: '(.*)'")]
        public void ThenIShouldSee(string content)
        {
            Assert.That(_browser, Shows.Content(content));
        }
    }
}
