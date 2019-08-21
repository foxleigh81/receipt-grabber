Feature: Test example

  Scenario: I visit the site
    Given I visit the website
    Then the site title is "Test Example Page"

  Scenario Outline: The user can see a specific ingredient in the ingredients detail card
    Given the user can see the ingredients tab
    And the user clicks on the ingredients tab
    And this step isnt defined
    Then the user can see the ingredients list
    And the user can see <ingredients> in the ingredients list items
    And the user clicks on the <ingredients> item from the ingredients list
    Then the user can see <ingredients> in the ingredients detail card

    Examples:
      | ingredients |
      | Cinnamon |
      | Apple |
      | Clove |
      | Tumeric |