var ResultsView = Backbone.View.extend({
    el: $("#results"),

    initialize: function(){
        this.editMatchView = new EditMatchView({model: this.model});
        this.knockoutTournamentView = new KnockoutTournamentView({model: this.model});
    }
});