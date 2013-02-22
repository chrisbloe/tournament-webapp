var KnockoutTournamentView = Backbone.View.extend({
    el: $("#knockoutTournament"),

    initialize: function(){
        this.knockout = this.$el.knockout({});
        
        this.$el.on("editMatch", function(event, editMatchEvent){
            alert("Selected match: " + editMatchEvent.position);
            editMatchEvent.preventDefault();
        });
        
        this.model.on("change", this.onChange, this);
    },
    
    onChange: function(){
        this.knockout.createRandomTournament(this.model.get("title"), this.model.get("teams"));
    }
});