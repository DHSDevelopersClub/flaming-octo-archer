/**
 * Main script for local-translator element.
 *
 * Author: Max Starr
 */

Polymer({
    publish: {
        input: '',
    },
    updateOut: function () {
        console.log('debug input = "' + this.input + '"');
        this.$.output.innerHTML = this.input;
    },
});
