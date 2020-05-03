# coding: utf-8

from __future__ import absolute_import
from flask_restx import fields, Model, OrderedModel, SchemaModel
from flask_restx import Namespace, Resource
from flask_restx import reqparse

api = Namespace('events', description='Booking - bigcalendar')

EventConfig = api.model('Event', {
    'id': fields.Integer,
    'title': fields.String,
    'allDay': fields.Boolean,
    'start': fields.Date,
    'result': fields.Date
})

EventState = api.model('EventState', {
    'id': fields.Integer,
    'result': fields.String,
    'retcode': fields.Integer,
})



@api.route('/new')
@api.param('client_id', 'ID zarejestrowanego klienta')
@api.param('client_secret','Tajne hasło dla client ID')
class EvNew(Resource):
    @api.marshal_with(EventState)
    @api.doc('New event')
    def post(self):
      parser = reqparse.RequestParser()
      parser.add_argument('client_id', required=True, location='values')
      parser.add_argument('client_secret', required=True, location='values')
      args = parser.parse_args()
      (client_id, client_secret) = ( args['client_id'], args['client_secret'] )
      try:
        # tu cos robi
        return args
      except Exception as e:
        res1 = getattr(e, 'message', repr(e))
        res2 = getattr(e, 'message', str(e))
        args['result'] = 'Internal Errror! %s , %s' % (res1, res2)
        args['retcode'] = -1
        return args


@api.route('/list')
@api.param('client_id', 'ID zarejestrowanego klienta')
@api.param('client_secret','Tajne hasło dla client ID')
class EvList(Resource):
    @api.marshal_with(EventState)
    @api.doc('Events')
    def get(self):
      parser = reqparse.RequestParser()
      parser.add_argument('client_id', required=True, location='values')
      parser.add_argument('client_secret', required=True, location='values')
      args = parser.parse_args()
      (client_id, client_secret) = ( args['client_id'], args['client_secret'] )
      try:
        # tu cos robi
        return args
      except Exception as e:
        res1 = getattr(e, 'message', repr(e))
        res2 = getattr(e, 'message', str(e))
        args['result'] = 'Internal Errror! %s , %s' % (res1, res2)
        args['retcode'] = -1
        return args




