;
var app = app || {};

(function() {
    'use strict';
    
    app.Tournament = Backbone.Model.extend({});
    
    var tournament = new app.Tournament();
    
    var tournamentCreatorView = new app.TournamentCreatorView({
        model: tournament
    });
    
    var resultsView = new app.ResultsView({
        model: tournament
    });
    
    new app.Router({
        tournamentCreatorView: tournamentCreatorView,
        resultsView: resultsView
    });
    
    $(function(){
        Backbone.history.start();	
    });
})();