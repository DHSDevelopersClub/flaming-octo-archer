/**
 * Main script for local-translator element.
 *
 * Author: insert name here
 */

Polymer({
    publish: {
        input: '',
    },
    updateOut: function() {
        console.log('debug input = "' + this.input + '"');
        this.$.output.innerHTML = '<div>--. -.--.-. .-..- -.-.-</div>' +
                           '<div>-.-.-. -..</div>';
    },
});
