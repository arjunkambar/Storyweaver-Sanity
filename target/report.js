$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Storyweaver login page",
  "description": "",
  "id": "storyweaver-login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 140014545,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Test Login page with valid credentials",
  "description": "",
  "id": "storyweaver-login-page;test-login-page-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters valid  username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be successfully login in storyweaver",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User should see login successfull notification",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.open_chrome_browser()"
});
formatter.write("Chrome browser is invoked and opened https://dev.pbees.party");
formatter.result({
  "duration": 74719447960,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_enters_valid_username_and_password()"
});
formatter.result({
  "duration": 32805991100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027username\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.43.248\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Windows\\TEMP\\scoped_dir4...}, goog:chromeOptions: {debuggerAddress: localhost:53455}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ed176430615a7265be157dce66a44889\n*** Element info: {Using\u003dname, value\u003dusername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat com.pages.LoginPage.Login_Page(LoginPage.java:37)\r\n\tat com.steps.LoginPageSteps.user_enters_valid_username_and_password(LoginPageSteps.java:41)\r\n\tat ✽.When User enters valid  username and password(Login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageSteps.user_should_be_successfully_login_sw()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageSteps.user_should_see_login_successfull_notification()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 199108701,
  "status": "passed"
});
});