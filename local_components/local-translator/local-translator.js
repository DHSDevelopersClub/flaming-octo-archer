/**
 * Main script for local-translator element.
 *
<<<<<<< HEAD
 * Author: Max Starr
=======
 * Author: insert name here
>>>>>>> test/master
 */

Polymer({
    publish: {
        input: '',
    },
    updateOut: function() {
        console.log('debug input = "' + this.input + '"');
<<<<<<< HEAD
        this.$.output.innerHTML = this.input;
=======
        this.$.output.innerHTML = '<div>--. -.--.-. .-..- -.-.-</div>' +
                           '<div>-.-.-. -..</div>';
>>>>>>> test/master
    },
});
