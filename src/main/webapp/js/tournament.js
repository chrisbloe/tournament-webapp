$(document).ready(function(){
    "use strict";
    
    var Tournament = Backbone.Model.extend({});
    
    var tournament = new Tournament();
    
    new TournamentCreatorView({model: tournament});
    
    new ResultsView({model: tournament});
});