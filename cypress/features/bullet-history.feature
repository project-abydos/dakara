Feature: Bullet history
  As Sgt Snuffy you want to be able to see the history of the
  bullet you are working

  Background:
    Given you are on the dakara page
    And you have entered a bullet

  Scenario: Sgt Snuffy edits the bullet
    Given I type in the bullet edit box
    When I press enter
    Then I should see the old version of the bullet in the history section
    But if I the bullet already exists in the history, nothing happens
