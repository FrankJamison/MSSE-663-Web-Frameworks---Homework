@FE @heroes

Feature: Heroes

  Scenario: As an authenticated user, I can list of heroes on the heroes page
    Given Heroes: I navigate to the auth page
    Then Heroes: I see the authentiction home page
    Then Heroes: I enter my credentials
    Then Heroes: I see the heroes list