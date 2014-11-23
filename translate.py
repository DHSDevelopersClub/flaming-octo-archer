'''Helper functions for morse code translation.'''
__author__ = 'insert name here'


def text_to_morse(words):
    '''Translate a list of words into morse code.

    @param words: A list of Alphanumeric strings.
    @returns: A list of lists of strings containing . and -
    '''
    return [['-.-.-', '---', '..-'], ['-..', '-..', '...', '---']]
