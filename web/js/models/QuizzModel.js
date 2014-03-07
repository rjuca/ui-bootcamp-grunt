var QuestionModel = Backbone.Model.extend( {
    initialize: function () {
        console.log( "Initializing Quizz model" );
    }
} );

var QuizzCollection = Backbone.Collection.extend( {
    url: '/data/data1.json',
    model: QuestionModel,

    initialize: function () {
        console.log( "Init Collection" );
    }
} );
