'''The main Endpoints API file.'''
__author__ = 'Sebastian Boyd and Duncan Grubbs'


import endpoints
import json
from protorpc import messages, message_types, remote

from translate import text_to_morse

class MorsecodeRequest(messages.Message):
	text = messages.StringField(1)

class MorsecodeResponse(messages.Message):
	message = messages.StringField(1)

@endpoints.api(name='morsetranslate', version='v1')
class MorseTranslateAPI(remote.Service):
    '''The morse translation API.'''
    @endpoints.method(MorsecodeRequest,
                  MorsecodeResponse,
                  name='morsetranslate.morsecode', path='texttomorse')
    def morsecode(self, request):
	print request.text
        data = text_to_morse(request.text)
	data = json.dumps(data)
        return MorsecodeResponse(message=data)

application = endpoints.api_server([MorseTranslateAPI])
