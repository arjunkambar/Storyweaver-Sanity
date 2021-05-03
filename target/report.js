$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Storyweaver login page",
  "description": "",
  "id": "storyweaver-login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 94895394,
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
  "duration": 139813717308,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_enters_valid_username_and_password()"
});
formatter.write("User is entered username as: arjun@yopmail.com and password as: password");
formatter.result({
  "duration": 53914540544,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_should_be_successfully_login_sw()"
});
formatter.result({
  "duration": 2210771721,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_should_see_login_successfull_notification()"
});
formatter.result({
  "duration": 181972679,
  "status": "passed"
});
formatter.after({
  "duration": 181003,
  "status": "passed"
});
});