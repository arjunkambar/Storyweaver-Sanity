$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Feature/Login.feature");
formatter.feature({
  "name": "Storyweaver login page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test Login page with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.steps.LoginPageSteps.open_chrome_browser()"
});
formatter.write("Chrome browser is invoked and opened https://dev.pbees.party");
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
formatter.write("User is entered username as: arjun@yopmail.com and password as: password");
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
  "name": "User should see login successfull notification",
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
});