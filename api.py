'''The main Endpoints API file.'''
__author__ = 'Sebastian Boyd and Duncan Grubbs?'


import endpoints
from protorpc import messages, message_types, remote

from translate import text_to_morse

class MorsecodeRequest(messages.Message):
	message = messages.StringField(1)

class MorsecodeResponse(messages.Message):
	message = messages.StringField(1)

@endpoints.api(name='morsetranslate', version='v1')
class MorseTranslateAPI(remote.Service):
    '''The morse translation API.'''
    @endpoints.method(MorsecodeRequest,
                  MorsecodeResponse,
                  name='morsetranslate.morsecode', path='texttomorse')
    def morsecode(self, request):
        data = text_to_morse(request)
        return data

application = endpoints.api_server([MorseTranslateAPI])
