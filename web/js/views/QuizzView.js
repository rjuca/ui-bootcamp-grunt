var QuizzView = Backbone.View.extend( {
    tagName: 'form',
    id: 'formID',
    initialize: function () {
        console.log( "Init Quizz list views" );
        this.render();
    },
    events: {
        submit: 'validate'
    },
    template: _.template( "<table><tbody><tr>Question <%= id%></tr><tr><td><input type='radio'></input></td><td><%= options[0] %></td></tr><tr><td><input type='radio'></input></td><td><%= options[1] %></td></tr><tr><td><input type='radio'></input></td><td><%= options[2] %></td></tr><tr><td><input type='radio'></input></td><td><%= options[3] %></td></tr></tbody></table>" ),
    render: function () {
        this.collection.forEach( this.appendModel, this );
        $( '.container' ).append( this.el );
        $( '#formID' ).append( "<button type='submit' class='btn btn-primary'>Submit</button>" );
    },
    appendModel: function ( questionModel ) {
        $( this.el ).append( this.template( questionModel.toJSON() ) );
    },
    validate: function () {
        console.log( "Submit button" );
        Backbone.history.navigate( "/results", {
            trigger: true
        } );
    },
    save: function () {

    }
} );
