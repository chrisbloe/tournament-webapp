;
var app = app || {};

(function($) {
    'use strict';
    
    app.Router = Backbone.Router.extend({
        initialize : function(options) {
            this.loading = $("#loading");
            this.tournamentCreatorView = options.tournamentCreatorView;
            this.resultsView = options.resultsView;
            
            this.tournamentCreatorView.on("submit", $.proxy(function(){
                    Backbone.history.navigate("tournament");
                    this.tournament();
                }), this);
        },
        
        routes: {
            "": "home",
            "tournament": "tournament"
        },
        
        home: function(){
            this.loading.hide();
            this.resultsView.$el.hide();
            this.tournamentCreatorView.$el.show();
        },
        
        tournament: function(){
            this.loading.hide();
            this.tournamentCreatorView.$el.hide();
            this.resultsView.$el.show();
        }
    });
})(jQuery);