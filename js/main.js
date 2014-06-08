// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    var aboutTemplate, afterLoginTemplate, beforeLoginTemplate, contactTemplate, helpTemplate, loginNav, main, newEventTemplate, pastGames, privacyTemplate, profileTemplate, resultsTemplate, setActive, termsTemplate, unsetActive, upcomingGames, upcomingTemplate;
    upcomingGames = [
      {
        homeTeam: "Brazil",
        awayTeam: "Argentina",
        date: "06-11-14 20:00",
        overUnder: 2.5,
        handicap: -1.5
      }, {
        homeTeam: "Switzerland",
        awayTeam: "France",
        date: "06-12-14 20:00",
        overUnder: 2.5,
        handicap: +1.5
      }, {
        homeTeam: "Germany",
        awayTeam: "Spain",
        date: "06-13-14 20:00",
        overUnder: 2.5,
        handicap: -1.5
      }, {
        homeTeam: "United States",
        awayTeam: "Hong Kong",
        date: "06-30-15 20:00",
        overUnder: 4.5,
        handicap: +2.5
      }
    ];
    pastGames = [
      {
        homeTeam: "South Korea",
        awayTeam: "Australia",
        homeScore: 1,
        awayScore: 2,
        date: "06-07-14 20:00",
        overUnder: 2.5,
        handicap: -1.5
      }
    ];
    unsetActive = function() {
      $('#header-navlinks').children().removeClass('active');
      return $('#login-nav').children().children().removeClass('active');
    };
    setActive = function(lnk) {
      lnk = $(lnk);
      unsetActive();
      return lnk.parent().addClass('active');
    };
    upcomingTemplate = Handlebars.compile($("#upcoming-template").html());
    resultsTemplate = Handlebars.compile($("#results-template").html());
    helpTemplate = Handlebars.compile($("#help-template").html());
    aboutTemplate = Handlebars.compile($("#about-template").html());
    contactTemplate = Handlebars.compile($("#contact-template").html());
    termsTemplate = Handlebars.compile($("#terms-template").html());
    privacyTemplate = Handlebars.compile($("#privacy-template").html());
    main = $('#main');
    main.html(upcomingTemplate({
      games: upcomingGames
    }));
    beforeLoginTemplate = Handlebars.compile($("#before-login-template").html());
    afterLoginTemplate = Handlebars.compile($("#after-login-template").html());
    profileTemplate = Handlebars.compile($("#profile-template").html());
    newEventTemplate = Handlebars.compile($("#new-event-template").html());
    loginNav = $('#login-nav');
    loginNav.html(beforeLoginTemplate);
    $('#header-navlinks').on('click', '#upcoming-link', function(e) {
      e.preventDefault();
      setActive(this);
      return main.html(upcomingTemplate({
        games: upcomingGames
      }));
    });
    $('#header-navlinks').on('click', '#results-link', function(e) {
      e.preventDefault();
      setActive(this);
      return main.html(resultsTemplate({
        games: pastGames
      }));
    });
    $('#footer-navlinks').on('click', '#help-link', function(e) {
      e.preventDefault();
      main.html(helpTemplate());
      return unsetActive();
    });
    $('#footer-navlinks').on('click', '#about-link', function(e) {
      e.preventDefault();
      main.html(aboutTemplate());
      return unsetActive();
    });
    $('#footer-navlinks').on('click', '#contact-link', function(e) {
      e.preventDefault();
      main.html(contactTemplate());
      return unsetActive();
    });
    $('#footer-navlinks').on('click', '#terms-link', function(e) {
      e.preventDefault();
      main.html(termsTemplate());
      return unsetActive();
    });
    $('#footer-navlinks').on('click', '#privacy-link', function(e) {
      e.preventDefault();
      main.html(privacyTemplate());
      return unsetActive();
    });
    $('#login-nav').on('click', 'button', function(e) {
      e.preventDefault();
      return loginNav.html(afterLoginTemplate());
    });
    $('#login-nav').on('click', '#before-login-link', function(e) {
      e.preventDefault();
      loginNav.html(beforeLoginTemplate());
      return main.html(eventsTemplate());
    });
    $('#login-nav').on('click', '#profile-link', function(e) {
      e.preventDefault();
      main.html(profileTemplate());
      return setActive(this);
    });
    $('#login-nav').on('click', '#new-event-link', function(e) {
      e.preventDefault();
      main.html(newEventTemplate());
      return setActive(this);
    });
    $('#paid-event').on('click', function(e) {
      return $('#event-price-show').removeClass('hide');
    });
    return $('#free-event').on('click', function(e) {
      return $('#event-price-show').addClass('hide');
    });
  });

}).call(this);

//# sourceMappingURL=main.map
