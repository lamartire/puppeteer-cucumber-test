Feature: Google search is working
  Scenario: Google search is working
    Given open google page
    When type "Hello world"
    When press enter
    Then results were showed
