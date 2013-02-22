$(document).ready(function(){
    "use strict";
    
    var knockout = $('#knockout-tournament').knockout({});
    
//    knockout.Events("editMatch").subscribe(function(value){
//        alert("Selected match: " + value);
//    });
    
    var TournamentCreator = function(){
        var $tournamentTitle = $("#tournamentTitle");
        var $newTeam = $("#newTeam");
        var $addTeamButton = $("#addTeam");
        var $currentTeams = $('#currentTeams');

        var $removeTeamButton = $("#removeTeam");
        var $createTournamentButton = $("#createTournament");
        
        $tournamentTitle.on("keyup change", function(){
            updateTournament();
        });
        
        $addTeamButton.on("click", function(){
            $currentTeams.append("<option value='"+$newTeam.val()+"'>"+$newTeam.val()+"</option>");
            sortOptions($currentTeams[0]);
            updateTournament();
            
            $newTeam.val("");
            $newTeam.focus();
        });

        $removeTeamButton.on("click", function(){
            $("#currentTeams :selected").remove();
            updateTournament();

            $newTeam.focus();
        });

        $createTournamentButton.on("click", function(){
            updateTournament();
        });
        
        var updateTournament = function(){
            var teams = [];

            $("#currentTeams option").each(function(i, option){
                teams[i] = $(option).text();
            });
            
            knockout.createRandomTournament($tournamentTitle.val(), teams);
        };

       /**
        * Sorts all of the options in a select element
        *
        * @author Dan Delaney http://fluidmind.org/
        * @param  element     The HTML select element to be sorted
        */
        var sortOptions = function(element){
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
        };
    };
    
    new TournamentCreator();
    
    $("#newTeam").focus();
});