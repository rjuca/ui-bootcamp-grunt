var Router = new( Backbone.Router.extend( {
    routes: {
        '': 'index',
        'results': 'showResults'
    },
    initialize: function () {
        console.log( "init Router" );
    },
    index: function () {
        console.log( "Index" );

        this.loginModel = new LoginModel();
        this.loginView = new LoginView( {
            model: this.loginModel
        } );

        this.quizzCollection = new QuizzCollection();
        this.quizzCollection.fetch( {
            success: function ( quizzCollection, response, options ) {
                console.log( "Success" );
                var quizzView = new QuizzView( {
                    collection: quizzCollection
                } );
            },
        } );
    },
    showResults: function () {
        this.resultsModel = new ResultsModel();
        this.resultsView = new ResultsView( {
            model: this.resultsModel
        } );
    }
} ) );

$( document ).ready( function () {
    Backbone.history.start( {
        pushState: true
    } );
} );
