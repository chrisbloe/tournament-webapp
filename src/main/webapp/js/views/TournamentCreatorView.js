var TournamentCreatorView = Backbone.View.extend({
    el: $("#createTournamentForm"),
    $tournamentTitle: $("#tournamentTitle"),
    $newTeam: $("#newTeam"),
    $addTeamButton: $("#addTeam"),
    $currentTeams: $('#currentTeams'),

    $removeTeamButton: $("#removeTeam"),
    $createTournamentButton: $("#createTournament"),

    initialize: function(){
        this.$newTeam.focus();
    },

    updateTournament: function(){
        var teams = [];

        $("#currentTeams option").each(function(i, option){
            teams[i] = $(option).text();
        });
        
        this.model.set({title: this.$tournamentTitle.val(), teams: teams});
    },

    /**
     * Sorts all of the options in a select element
     *
     * @author Dan Delaney http://fluidmind.org/
     * @param  element     The HTML select element to be sorted
     */
    sortOptions: function(element){
        // We have to put the whole options array into a new array, because
        // the options array doesn't support all of the Array methods (like sort)
        // Doesn't that suck?
        var options = [];

        for(var i = 0; i < element.options.length; i++){
            options.push(element.options[i]);
        }

        // Sort it with a function that uses the 'text' property of the Option object
        options.sort(function(a, b){
             if(a.text.toLowerCase() < b.text.toLowerCase()){
                 return -1;
             }

             if(a.text.toLowerCase() > b.text.toLowerCase()){
                 return 1;
             }

             return 0;
         });

        // Now copy the array back into the options array
        for(var i = 0; i < options.length; i++){
            element.options[i] = new Option(options[i].text, 
                                            options[i].value, 
                                            options[i].defaultSelected, 
                                            options[i].selected);
        }
    },

    events: {
        "click #addTeam": "addTeam",
        "click #removeTeam": "removeTeam",
        "click #createTournament": "createTournament",
        "keyup #tournamentTitle": "updateTournament",
        "change #tournamentTitle": "updateTournament"
    },

    addTeam: function(){
        this.$currentTeams.append("<option value='"+this.$newTeam.val()+"'>"+this.$newTeam.val()+"</option>");
        this.sortOptions(this.$currentTeams[0]);
        this.updateTournament();

        this.$newTeam.val("");
        this.$newTeam.focus();
    },

    removeTeam: function(){
        $("#currentTeams :selected").remove();
        this.updateTournament();

        this.$newTeam.focus();
    },

    createTournament: function(){
        this.updateTournament();
    }
});