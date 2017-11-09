function viewModel() {
  var self = this;
  self.screen_holder= ko.observable("home_page");

  self.gotoHome = function() {
    self.screen_holder("home_page");
  }

  self.gotoProjects = function() {
    self.screen_holder("projects_page");
  }

  self.gotoHobbies = function() {
    self.screen_holder("hobbies_page");
  }

  self.gotoGoals = function() {
    self.screen_holder("goals_page");
  }

  self.gotoContact = function() {
    self.screen_holder("contact_page");
  }

}

$(document).ready(function(){ko.applyBindings(new viewModel());});
