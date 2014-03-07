var LoginView = Backbone.View.extend( {
    tagName: 'form',
    initialize: function () {
        console.log( "Initializing Login view" );
        this.render();
    },
    template: _.template( "<div class='form-group'><label for='emailInput'>Email address</label><input type='email' class='form-control' id='emailInput' placeholder='Enter email'></div><div class='form-group'><label for='pwInput'>Password</label><input type='password' class='form-control' id='pwInput' placeholder='Password'>  </div></div>  <button type='submit' class='btn btn-primary'>Submit</button>" ),
    render: function () {
        $( this.el ).html( this.template() );
        $( '.container' ).append( this.el );
    },
    events: {
        submit: 'validate'
    },
    validate: function () {
        var emailValue = $( '#emailInput' ).val(),
            pwValue = $( '#pwInput' ).val();

        if ( emailValue.length && pwValue.length ) {
            this.save( emailValue, pwValue );
            this.hide();
        } else {
            alert( "Please fill both fields" );
        }
    },
    save: function ( emailValue, pwValue ) {
        this.model.set( {
            'username': emailValue,
            'password': pwValue
        } );
        this.model.save();
    },
    hide: function () {
        $( this.el ).hide();
    }
} );
