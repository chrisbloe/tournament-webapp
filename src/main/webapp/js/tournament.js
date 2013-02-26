$(document).ready(function(){
    "use strict";
    
    var Tournament = Backbone.Model.extend({});
    
    var tournament = new Tournament();
    
    new TournamentCreatorView({model: tournament});
    new EditMatchView({model: tournament});
    new KnockoutTournamentView({model: tournament});
});