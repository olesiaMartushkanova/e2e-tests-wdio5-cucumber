Feature: Login

@openBaseUrl
    Scenario Outline: Successful login
        Given I enter <username> and <password>
        When I submit my login
        Then I am successfully logged in as <name> user
@takeScreenshot
Examples:
| username        |  password | name         |
| testemail.com   |  Q1w2e3r4 | userName     |