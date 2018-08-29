Feature: Bullet history
  As Sgt Snuffy I want to be able to see the history of the
  bullet I am working

  Background:
    Given I am on the dakara page
    And I have entered a bullet

  Scenario: Sgt Snuffy edits the bullet
    Given I type in the bullet edit box
    When I press enter
    Then I should see the old version of the bullet in the history section
    But if I the bullet already exists in the history, nothing happens
