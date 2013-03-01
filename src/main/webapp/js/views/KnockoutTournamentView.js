;
var app = app || {};

(function() {
    'use strict';
    
    app.KnockoutTournamentView = Backbone.View.extend({
        el: $("#knockoutTournament"),

        initialize: function(){
            this.knockout = this.$el.knockout({});

            this.model.on("change:teams", this.onChangeTeams, this);
            this.model.on("change:tournament", this.onChangeTournament, this);
        },

        onChangeTeams: function(){
            var tournament = this.knockout.createRandomTournament(this.model.get("title"), this.model.get("teams"));
            this.model.set({schedule: tournament.schedule}, {silent: true});
            this.model.set({locations: tournament.locations}, {silent: true});
            this.model.set({scores: tournament.scores}, {silent: true});
            this.model.set({fixtures: tournament.fixtures}, {silent: true});
            this.model.set({headers: tournament.headers}, {silent: true});
        },

        onChangeTournament: function(){
            var tournament = {
                title: this.model.get("title"),
                teams: this.model.get("teams"),
                schedule: this.model.get("schedule"),
                locations: this.model.get("locations"),
                scores: this.model.get("scores"),
                fixtures: this.model.get("fixtures"),
                headers: this.model.get("headers")
            };

            this.knockout.showTournament(tournament);
        }
    });
})();