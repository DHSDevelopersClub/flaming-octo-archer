flaming-octo-archer
===================

IMPORTANT
---------
The request format has changed from a list of strings to a string separated by
spaces. Make sure you modify your code to work with this format.

Introduction
------------

This project is a learning experience.  Hopefully, when we are done, we will
have a better idea of what it is like to work as a group.

We will make an app using Google App Engine.  There will be a server and there
will be a web client.  We may even make Android and iOS clients, so we know
how, but that is a secondary goal.

*IMPORTANT*
When you pick a file, set the author line (at the top) to your name, then do
a commit and push, before you do anything else.  This way we won't have two
people doing the same work.

If you have any questions, feel free to email me at 
[zotavka@gmail.com](mailto:zotavka@gmail.com).

How To Test and Run the App
-------------------

You will need these packages:

-   [Python 2.7](https://www.python.org/downloads/release/python-278/)
-   [Google App Engine Python](https://cloud.google.com/appengine/downloads)

If you are working on the client side, you will also need:

-   [Less.js](http://lesscss.org/#using-less-installation)
-   [Bower](http://bower.io/#install-bower)

And, of course, you will need a good text editor for coding.

Once you have all the software, the next step is always to clone the GitHub 
repository.  Open a terminal, and navigate to a place where you want to keep
the project folder.  Then run:

    git clone https://github.com/DHSDevelopersClub/flaming-octo-archer.git

or if you prefer to use SSH:
    
    git clone git@github.com:DHSDevelopersClub/flaming-octo-archer.git

To run a development server to test the app, make sure you are in the project
root folder, then run:

    path/to/appengine/sdk/dev_appserver.py .

Substituting `path/to/appengine/sdk/` with the actual path.

If you don't like to use the terminal, or you are using windows, there are
GUI interfaces for both git and appengine. See:

-   [GitHub GUI Mac](https://mac.github.com/)
-   [GitHub GUI Windows](https://windows.github.com/)
-   The App Engine GUI should be included with the SDK.

Once the dev server is running you can go to `http://localhost:8080/` in your
bowser to see the client.  To test the Endpoints api, go instead to 
`http://localhost:8080/_ah/api/explorer`, to navigate the api.  Error and 
debugging output will appear in the terminal you ran the dev server from.
Javascript debugging info will appear in the console in your browser's 
developer tools.

Files
-----

Below is a list of the files and scripts we will need to make the app work.
Everyone should have one file that they are responsible for.  That person can
do anything they want with that file, as long as it functions as described 
below.

If any flaws become apparent with this model, make sure to communicate them
with everyone, and modify this file.

-   `app.yaml` 
    -   Config file.
    -   Everyone is responsible for making this one work.

-   `api.py`
    -   Main endpoints file.
    -   This request:
            
            Method: GET
            URL: /_ah/api/morsetranslate/v1/texttomorse
            Headers: default
            Content: text="json alphanumeric string"

    -   Should return a response like this:
            
            Status: 200 OK
            Headers: default
            Content: '[[".---", "...", "---", "-."],[".-",".-..", ".--.", "....", ".-", "-.", "..-", "--", ".", ".-.", "..", "-.-."]]'

    -   Each string in the request JSON array should correspond to an array
        of strings in the response.  That response array should be a letter
        by letter translation into morse code, each string representing a 
        letter.

    -   api.py should import translate.py and use it's `text_to_morse` function
        to make the translation.

-   `translate.py`
    -   Should implement the function:

            text_to_morse
            @param words: A list of Alphanumeric strings.
            @returns: A list of lists of strings containing . and -

-   `index.html`
    -   Should look fairly good, and use the Polymer core and paper elements.
    -   Must implement the `translator` element
        -   There should be an input field in `index.html`.
        -   When the user enters input, `translator.translate('input string')`
            should be called.
        -   Index may reach inside translator's shadow dom and style it to
            look nice.
-   `main.css`
    -   Styling for `index.html`.

-   `local_components/`
    -   `translator/`
        -   `translator.html`
            -   The html file for the `translator` element written using 
                Polymer.
            -   Must import it's main script from `translator.js`.
            -   Must include a `div` with the id `"output"`.
        -   `transltator.js`
            -   Must implement the function `translate` and in that function,
                it should rewrite the contents of `<div id="output">` in
                `translator.html`.
        -   Other files, like CSS, imported by `translator.html` can go here.
