$(document).ready(function(){
    "use strict";
    
    var NewTournament = Backbone.Model.extend({});
    
    var tournament = new NewTournament();
    
    new TournamentCreatorView({model: tournament});
    new KnockoutTournamentView({model: tournament});
});