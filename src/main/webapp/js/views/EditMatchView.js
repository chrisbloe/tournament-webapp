var EditMatchView = Backbone.View.extend({
    el: $("#matchEditor"),

    initialize: function(){
        this.$fixtureDate = this.$el.find(".fixture-date");
        this.$fixtureTime = this.$el.find(".fixture-time");
        this.$winner = this.$el.find(".winner");
        this.$homeScore = this.$el.find(".home-score");
        this.$awayScore = this.$el.find(".away-score");
        this.$endEditingButton = this.$el.find(".end-editing-button");
        
        this.$el.find(".fixture-date").datepicker({
            autoSize    : true,
            dateFormat  : "dd-mm-yy",
            firstDay    : 1
        });
        
        this.addListeners();
        
        $("#knockoutTournament").on("editMatch", $.proxy(function(event, editMatchEvent){
            this.setupEditMatchFields(editMatchEvent);
        }, this));
    },
    
    addListeners: function(){
        this.$endEditingButton.on("click", $.proxy(function(){
            this.$el.hide();
        }, this));
        
        this.$fixtureDate.on("change paste textInput input", {that: this}, function(event){
            var that = event.data.that;
            
            var fixtures = that.model.get("fixtures");
            fixtures[that.position][0] = this.value;
            
            that.model.set({fixtures: fixtures});
            that.model.trigger('change:tournament');
        });
        
        this.$fixtureTime.on("change paste textInput input", {that: this}, function(event){
            var that = event.data.that;
            
            var fixtures = that.model.get("fixtures");
            fixtures[that.position][1] = this.value;
            
            that.model.set({fixtures: fixtures});
            that.model.trigger('change:tournament');
        });
        
        this.$winner.on("change", {that: this}, function(event){
            var that = event.data.that;

            var schedule = that.model.get("schedule");
            schedule[that.position] = this.value;

            that.model.set({schedule: schedule});
            that.model.trigger('change:tournament');
        });
        
        this.$homeScore.on("change paste textInput input", {that: this}, function(event){
            var that = event.data.that;
            
            var scores = that.model.get("scores");
            scores[that.position][0] = this.value;
            
            that.model.set({scores: scores});
            that.model.trigger('change:tournament');
        });
        
        this.$awayScore.on("change paste textInput input", {that: this}, function(event){
            var that = event.data.that;
            
            var scores = that.model.get("scores");
            scores[that.position][1] = this.value;
            
            that.model.set({scores: scores});
            that.model.trigger('change:tournament');
        });
    },
    
    setupEditMatchFields: function(editMatchEvent){
        editMatchEvent.preventDefault();
        this.position = editMatchEvent.position;
        
        this.populateDateAndTime();
        
        var schedule = this.model.get("schedule");
        var team1 = schedule[this.position * 2];
        var team2 = schedule[this.position * 2 + 1];
        
        if(team1 !== "" && team2 !== ""){
            var currentWinner = schedule[this.position];
            
            this.populateWinnerComboBox(currentWinner, team1, team2);
            this.populateScores();
            
            this.$el.children(".match-result-container").show();
        } else {
            this.$el.children(".match-result-container").hide();
        }
        
        this.$el.show();
    },
    
    populateDateAndTime: function(){
        var fixtures = this.model.get("fixtures");
        
        this.$fixtureDate.val(fixtures[this.position][0]);
        this.$fixtureTime.val(fixtures[this.position][1]);
    },
    
    populateWinnerComboBox: function(currentWinner, team1, team2){
        this.$winner.empty();
        this.$winner.append(new Option("Winner", "", true));
        this.$winner.append(new Option(team1, team1, false, currentWinner === team1));
        this.$winner.append(new Option(team2, team2, false, currentWinner === team2));
    },
    
    populateScores: function(){
        var scores = this.model.get("scores");
        
        this.$homeScore.val(scores[this.position][0]);
        this.$awayScore.val(scores[this.position][1]);
    }
});