;
var app = app || {};

(function() {
    'use strict';
    
    app.ResultsView = Backbone.View.extend({
        el: $("#results"),

        initialize: function(){
            this.editMatchView = new app.EditMatchView({model: this.model});
            this.knockoutTournamentView = new app.KnockoutTournamentView({model: this.model});
        }
    });
})();