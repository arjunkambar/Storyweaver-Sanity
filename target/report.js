$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Feature/Feature1/Home.feature");
formatter.feature({
  "name": "Storyweaver Home page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.scenario({
  "name": "Open browser and validate home page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.steps.HomePageSteps.open_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the url",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.HomePageSteps.user_enters_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.HomePageSteps.user_should_be_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see the footer notice",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.HomePageSteps.user_should_be_able_to_see_the_footer_notice()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:Feature/Feature1/Login.feature");
formatter.feature({
  "name": "Storyweaver login page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.scenario({
  "name": "Test Login page with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.steps.LoginPageSteps.open_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid  username and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.LoginPageSteps.user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be successfully login in storyweaver",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.LoginPageSteps.user_should_be_successfully_login_sw()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see login successful notification",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.LoginPageSteps.user_should_see_login_successfull_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:Feature/Feature1/Read.feature");
formatter.feature({
  "name": "Storyweaver Read page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag3"
    }
  ]
});
formatter.scenario({
  "name": "Test readpage to verify the filters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "go to readpage and validate the page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.steps.ReadPageSteps.user_is_already_on_readpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see five filters",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.ReadPageSteps.user_should_be_able_to_see_filters()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to click on any filter and should be able to see all the options in the dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.ReadPageSteps.user_should_be_able_to_see_the_options()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test readpage to verify the Sort By",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Sort By",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.ReadPageSteps.user_clicks_on_Sort_By()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there should be five options in the dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.ReadPageSteps.there_should_be_options_in_the_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see all the options",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.ReadPageSteps.user_should_be_able_to_see_all_the_options()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test readpage for story reader",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is already on readpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.steps.ReadPageSteps.go_to_readpage_and_validate_the_readpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on first story in readpage",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.ReadPageSteps.user_clicks_on_first_story_in_readpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to story details page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.ReadPageSteps.user_should_be_navigated_to_story_details_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to read the story",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.ReadPageSteps.user_should_be_able_to_read_the_story()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test readpage for story\u0027s read count",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user read the story",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.ReadPageSteps.user_read_the_story()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "read count of the story should be increased with one count",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.ReadPageSteps.read_count_of_the_story_should_be_increased_with_one_count()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:Feature/Feature1/Readalong.feature");
formatter.feature({
  "name": "Storyweaver Readalong Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag4"
    }
  ]
});
formatter.scenario({
  "name": "Test readalong page to verify the filters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "go to readalong page and validate the page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.steps.ReadalongPageSteps.go_to_readalong_page_and_validate_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see five filters in readalong page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.ReadalongPageSteps.user_should_be_able_to_see_five_filters_in_readalong_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to click on any filter and should be able to see all the options in the dropdown of readalong page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.ReadalongPageSteps.user_should_be_able_to_click_on_any_filter_and_should_be_able_to_see_all_the_options_in_the_dropdown_of_readalong_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test readalong page to verify the Sort By",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Sort By in readalong page",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.ReadalongPageSteps.user_clicks_on_Sort_By_in_readalong_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there should be five options in the dropdown of Sort By",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.ReadalongPageSteps.there_should_be_five_options_in_the_dropdown_of_readalong_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see all the options in the dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.ReadalongPageSteps.user_should_be_able_to_see_all_the_options_in_the_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test readalong page for story reader",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is already on readalong page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.steps.ReadalongPageSteps.user_is_already_on_readalong_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on first story in readalong page",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.ReadalongPageSteps.user_clicks_on_first_story_in_readalong_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //div[@class\u003d\u0027pb-book__content\u0027]//h1\u0027 (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.pages.HomePage.Visibility_wait(HomePage.java:50)\r\n\tat com.pages.ReadPage.select_First_Story_Card(ReadPage.java:121)\r\n\tat com.steps.ReadalongPageSteps.user_clicks_on_first_story_in_readalong_page(ReadalongPageSteps.java:52)\r\n\tat ✽.user clicks on first story in readalong page(file:///H:/Java/Eclipse/Eclipse%20Photon/Workspace/StoryweaverSanity/Feature/Feature1/Readalong.feature:16)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027pb-book__content\u0027]//h1\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51114}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fd7a2d4fd60ce5ed2f5fc32e380d97d7\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027pb-book__content\u0027]//h1}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.pages.HomePage.Visibility_wait(HomePage.java:50)\r\n\tat com.pages.ReadPage.select_First_Story_Card(ReadPage.java:121)\r\n\tat com.steps.ReadalongPageSteps.user_clicks_on_first_story_in_readalong_page(ReadalongPageSteps.java:52)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should be navigated to story details page of readalong story",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.ReadalongPageSteps.user_should_be_navigated_to_story_details_page_of_readalong_story()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to read the readalong story",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.ReadalongPageSteps.user_should_be_able_to_read_the_readalong_story()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test readalong page for story\u0027s read count",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user read the readalong story",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.ReadalongPageSteps.user_read_the_readalong_story()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@dir\u003d\u0027ltr\u0027]//span[@class\u003d\u0027pb-stat__value\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51114}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fd7a2d4fd60ce5ed2f5fc32e380d97d7\n*** Element info: {Using\u003dxpath, value\u003d//span[@dir\u003d\u0027ltr\u0027]//span[@class\u003d\u0027pb-stat__value\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat com.pages.ReadPage.read_a_Story(ReadPage.java:135)\r\n\tat com.steps.ReadalongPageSteps.user_read_the_readalong_story(ReadalongPageSteps.java:67)\r\n\tat ✽.user read the readalong story(file:///H:/Java/Eclipse/Eclipse%20Photon/Workspace/StoryweaverSanity/Feature/Feature1/Readalong.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "read count of the readalong story should be increased with one count",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.ReadalongPageSteps.read_count_of_the_readalong_story_should_be_increased_with_one_count()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:Feature/Feature2/Bookshelf.feature");
formatter.feature({
  "name": "Storyweaver bookshelf",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag5"
    }
  ]
});
formatter.scenario({
  "name": "Open bookshelf popup and validate",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag5"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"My Bookshelf\" button",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.BookshelfPageSteps.user_clicks_on_button(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027My Bookshelf\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51114}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fd7a2d4fd60ce5ed2f5fc32e380d97d7\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027My Bookshelf\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.pages.BookshelfPage.click_On_Bookshelf_Button(BookshelfPage.java:67)\r\n\tat com.steps.BookshelfPageSteps.user_clicks_on_button(BookshelfPageSteps.java:17)\r\n\tat ✽.user clicks on \"My Bookshelf\" button(file:///H:/Java/Eclipse/Eclipse%20Photon/Workspace/StoryweaverSanity/Feature/Feature2/Bookshelf.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should be able to see \"Add this book to your bookshelf!\" popup",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.BookshelfPageSteps.user_should_be_able_to_see_popup(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add story to bookshelf",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag5"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on any bookshelf in \"Add this book to your bookshelf!\" popup",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.BookshelfPageSteps.user_clicks_on_any_bookshelf_in_popup(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//div[@class\u003d\u0027pb-select-bookshelf__bookshelf-el\u0027]//p\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat com.pages.BookshelfPage.add_Story_to_Bookshelf(BookshelfPage.java:80)\r\n\tat com.steps.BookshelfPageSteps.user_clicks_on_any_bookshelf_in_popup(BookshelfPageSteps.java:27)\r\n\tat ✽.user clicks on any bookshelf in \"Add this book to your bookshelf!\" popup(file:///H:/Java/Eclipse/Eclipse%20Photon/Workspace/StoryweaverSanity/Feature/Feature2/Bookshelf.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should be able to see \"Yay! This book has been added to your bookshelf!\" notification",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.BookshelfPageSteps.user_should_be_able_to_see_notification(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to see \"Delete from My Bookshelf\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.BookshelfPageSteps.user_should_be_able_to_see_button(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to see added story in the respective bookshelf under Bookshelf tab",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.BookshelfPageSteps.user_should_be_able_to_see_added_story_in_the_respective_bookshelf_under_Bookshelf_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51114}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fd7a2d4fd60ce5ed2f5fc32e380d97d7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.utility.Screenshot.teardown(Screenshot.java:20)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Delete story from the bookshelf list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag5"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user deletes added story from the bookshelf list",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.BookshelfPageSteps.uuser_deletes_the_added_story_from_the_bookshelf_list()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51114}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fd7a2d4fd60ce5ed2f5fc32e380d97d7\n*** Element info: {Using\u003dxpath, value\u003d//div[@title\u003d\u0027Pen\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.pages.BookshelfPage.delete_Story_from_Bookshelf_Lists(BookshelfPage.java:110)\r\n\tat com.steps.BookshelfPageSteps.uuser_deletes_the_added_story_from_the_bookshelf_list(BookshelfPageSteps.java:68)\r\n\tat ✽.user deletes added story from the bookshelf list(file:///H:/Java/Eclipse/Eclipse%20Photon/Workspace/StoryweaverSanity/Feature/Feature2/Bookshelf.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should not see the added story in the respective bookshelf list",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.BookshelfPageSteps.user_should_not_see_the_added_story_in_the_respective_bookshelf_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51114}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fd7a2d4fd60ce5ed2f5fc32e380d97d7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.utility.Screenshot.teardown(Screenshot.java:20)\r\n",
  "status": "failed"
});
formatter.uri("file:Feature/Feature2/Offline.feature");
formatter.feature({
  "name": "Storyweaver Offline library page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag6"
    }
  ]
});
formatter.scenario({
  "name": "Add story to offline library",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag6"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "go to story details page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.steps.OfflinePageSteps.go_to_story_details_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:332)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\r\n\tat java.util.LinkedHashMap$LinkedValues.forEach(Unknown Source)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat com.pages.ReadPage.readpage(ReadPage.java:61)\r\n\tat com.pages.OfflinePage.go_To_Story_Details_Page(OfflinePage.java:46)\r\n\tat com.steps.OfflinePageSteps.go_to_story_details_page(OfflinePageSteps.java:13)\r\n\tat ✽.go to story details page(file:///H:/Java/Eclipse/Eclipse%20Photon/Workspace/StoryweaverSanity/Feature/Feature2/Offline.feature:5)\r\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:279)\r\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:44)\r\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\t\tat com.pages.ReadPage.readpage(ReadPage.java:61)\r\n\t\tat com.pages.OfflinePage.go_To_Story_Details_Page(OfflinePage.java:46)\r\n\t\tat com.steps.OfflinePageSteps.go_to_story_details_page(OfflinePageSteps.java:13)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\t\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\t\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\t\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\t\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\t\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\t\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\t\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\t\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\t\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\t\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\t\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\t\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\t\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\t\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\t\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\t\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\t\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\t\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\t\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\t\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\t\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:328)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\r\n\tat java.util.LinkedHashMap$LinkedValues.forEach(Unknown Source)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat com.pages.ReadPage.readpage(ReadPage.java:61)\r\n\tat com.pages.OfflinePage.go_To_Story_Details_Page(OfflinePage.java:46)\r\n\tat com.steps.OfflinePageSteps.go_to_story_details_page(OfflinePageSteps.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51114}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fd7a2d4fd60ce5ed2f5fc32e380d97d7\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Read\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:204)\r\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:155)\r\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:75)\r\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:84)\r\n\t... 65 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on Save to Offline Library button",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.OfflinePageSteps.user_clicks_on_Save_to_Offline_Library_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to see This story has been saved in your Offline Library notification",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.OfflinePageSteps.user_should_be_able_to_see_This_story_has_been_saved_in_your_Offline_Library_notification()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to see Delete from Offline Library button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.OfflinePageSteps.user_should_see_Delete_from_Offline_Library_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51114}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fd7a2d4fd60ce5ed2f5fc32e380d97d7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.utility.Screenshot.teardown(Screenshot.java:20)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify saved story in offline library",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag6"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Offline Library button",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.OfflinePageSteps.user_clicks_on_Offline_Library_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51114}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fd7a2d4fd60ce5ed2f5fc32e380d97d7\n*** Element info: {Using\u003dxpath, value\u003d//div[@title\u003d\u0027Offline Library\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.pages.OfflinePage.click_on_OL(OfflinePage.java:71)\r\n\tat com.steps.OfflinePageSteps.user_clicks_on_Offline_Library_button(OfflinePageSteps.java:34)\r\n\tat ✽.user clicks on Offline Library button(file:///H:/Java/Eclipse/Eclipse%20Photon/Workspace/StoryweaverSanity/Feature/Feature2/Offline.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should be navigated to Offline Library page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.OfflinePageSteps.user_should_be_navigated_to_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to see Read,Reading Programme and Translate tabs",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.OfflinePageSteps.user_should_be_able_to_see_tabs()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to see saved story in \"Read\" tab",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.OfflinePageSteps.user_should_be_able_to_see_saved_story_in_tab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51114}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fd7a2d4fd60ce5ed2f5fc32e380d97d7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.utility.Screenshot.teardown(Screenshot.java:20)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Delete story from Offline Library",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag6"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user deletes saved story from \"Offline Library\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.OfflinePageSteps.user_deletes_saved_story_from(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51114}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fd7a2d4fd60ce5ed2f5fc32e380d97d7\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Manage Stories\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.pages.OfflinePage.delete_Story_From_OL(OfflinePage.java:91)\r\n\tat com.steps.OfflinePageSteps.user_deletes_saved_story_from(OfflinePageSteps.java:54)\r\n\tat ✽.user deletes saved story from \"Offline Library\"(file:///H:/Java/Eclipse/Eclipse%20Photon/Workspace/StoryweaverSanity/Feature/Feature2/Offline.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should not see saved story in \"Read\" tab",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.OfflinePageSteps.user_should_not_see_saved_story_in_tab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51114}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fd7a2d4fd60ce5ed2f5fc32e380d97d7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.utility.Screenshot.teardown(Screenshot.java:20)\r\n",
  "status": "failed"
});
formatter.uri("file:Feature/Feature3/Create.feature");
formatter.feature({
  "name": "Storyweaver Create page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag8"
    }
  ]
});
formatter.scenario({
  "name": "Go to create page and validate",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag8"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "go to create page and validate the page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.steps.CreatePageSteps.go_to_create_page_and_validate_the_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:332)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\r\n\tat java.util.LinkedHashMap$LinkedValues.forEach(Unknown Source)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat com.pages.HomePage.mouse_Hover(HomePage.java:78)\r\n\tat com.pages.CreatePage.go_to_Create_Page(CreatePage.java:94)\r\n\tat com.steps.CreatePageSteps.go_to_create_page_and_validate_the_page(CreatePageSteps.java:13)\r\n\tat ✽.go to create page and validate the page(file:///H:/Java/Eclipse/Eclipse%20Photon/Workspace/StoryweaverSanity/Feature/Feature3/Create.feature:5)\r\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:279)\r\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:44)\r\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\t\tat com.pages.HomePage.mouse_Hover(HomePage.java:78)\r\n\t\tat com.pages.CreatePage.go_to_Create_Page(CreatePage.java:94)\r\n\t\tat com.steps.CreatePageSteps.go_to_create_page_and_validate_the_page(CreatePageSteps.java:13)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\t\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\t\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\t\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\t\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\t\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\t\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\t\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\t\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\t\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\t\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\t\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\t\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\t\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\t\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\t\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\t\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\t\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\t\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\t\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\t\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\t\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:328)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\r\n\tat java.util.LinkedHashMap$LinkedValues.forEach(Unknown Source)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat com.pages.HomePage.mouse_Hover(HomePage.java:78)\r\n\tat com.pages.CreatePage.go_to_Create_Page(CreatePage.java:94)\r\n\tat com.steps.CreatePageSteps.go_to_create_page_and_validate_the_page(CreatePageSteps.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51114}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fd7a2d4fd60ce5ed2f5fc32e380d97d7\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Create\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:204)\r\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:155)\r\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:75)\r\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:84)\r\n\t... 65 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "\"Create New Book\" popup should be displayed in create page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.CreatePageSteps.popup_should_be_displayed_in_create_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to select \"Langauge,Level and Orientation\" on \"Create New Book\" popup",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.CreatePageSteps.user_should_be_able_to_select_on_popup(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to select \"start with images/start with words\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.CreatePageSteps.user_should_be_able_to_select_button(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51114}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fd7a2d4fd60ce5ed2f5fc32e380d97d7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.utility.Screenshot.teardown(Screenshot.java:20)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Add images to pages",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag8"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"add an image\" button in editor",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.CreatePageSteps.user_clicks_on_button_in_editor(java.lang.String)"
});
