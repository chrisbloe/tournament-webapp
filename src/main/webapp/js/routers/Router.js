;
var app = app || {};

(function($) {
    'use strict';
    
    app.Router = Backbone.Router.extend({
        initialize : function(options) {
            this.tournamentCreatorView = options.tournamentCreatorView;
            this.resultsView = options.resultsView;
            
            this.tournamentCreatorView.on("submit", $.proxy(this.tournament, this));
        },
        
        routes: {
            "": "home",
            "tournament": "tournament"
        },
        
        home: function(){
            $("#content").html(this.tournamentCreatorView.$el);
        },
        
        tournament: function(){
            $("#content").html(this.resultsView.$el);
        }
    });
})(jQuery);