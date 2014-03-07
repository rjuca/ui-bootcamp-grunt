var ResultsView = Backbone.View.extend( {
    initialize: function () {
        console.log( "Results View initialized" );
        this.render();
    },
    render: function () {
        console.log( "Results View rendered" );
        $( '.container' ).append( '<div></div>' );
    }
} );
