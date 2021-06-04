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
