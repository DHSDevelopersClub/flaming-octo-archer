'''The main Endpoints API file.'''
__author__ = 'insert name here'


import endpoints
from protorpc import messages, message_types, remote

from translate import text_to_morse


@endpoints.api(name='morsetranslate', version='v1')
class MorseTranslateAPI(remote.Service):
    '''The morse translation API.'''
    pass


application = endpoints.api_server([MorseTranslateAPI])
