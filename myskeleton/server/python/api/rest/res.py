# coding: utf-8

from flask_restx import fields
from flask_restx import Namespace, Resource
from flask_restx import reqparse

from flask_restx import fields, marshal
import json

from myapi import api



ns = Namespace('res', description='Reservations')

Return1 = ns.schema_model('Return1', {
    'session': 'string',
    'message': 'string',
    'retcode': 'string'
})


Category = api.model('Category', {
    'id': fields.Integer(description='Category ID'),
    'name': fields.String(description='Category Name'),
    'count': fields.Integer(description='Number of hosts')
})

Reservation = api.model('Reservation', {
    'description': fields.String(description='notes'),
    'start':  fields.DateTime(dt_format='iso8601', description='from...'),
    'time': fields.Integer(description='minutes'),
    'category_id': fields.Integer(description='Category'),
    'host_id': fields.Integer(description='Host'),
    'busy': fields.Integer(description='num hosts with busy state'),
    'free': fields.Integer(description='num free hosts'),
    'my': fields.Boolean(description='my reservation')
})

NewReservation = api.model('NewReservation', {
    'username': fields.String(description='Login'),
    'session': fields.String(description='Session id'),
    'category': fields.Integer(description='category id'),
    'number': fields.Integer(description='number of hosts'),
    'key': fields.String(description='reservation key'),
    'start':  fields.DateTime(dt_format='YYYY-MM-DD hh:mm',description='Start date and time'),
    'time': fields.Integer(description='how long')
})


ServiceRequest = api.model('ServiceRequest', {
    'username': fields.String(description='Login'),
    'session': fields.String(description='Session id'),
    'host_id': fields.Integer(description='Current Reservation'),
    'description': fields.String(description='notes')
})

Reservations = api.model('Reservations', {
    'retcode': fields.Integer(description='ret. code'),
    'message': fields.String(description='ret. message'),
    'reservations': fields.List(fields.Nested(Reservation))
})

CategoriesAndReservations = api.model('CategoriesAndReservations', {
    'retcode': fields.Integer(description='ret. code'),
    'message': fields.String(description='ret. message'),
    'reservations': fields.List(fields.Nested(Reservation)),
    'categories': fields.List(fields.Nested(Category))
})

 
@ns.route('/open/<string:username>/<string:session>',methods=['GET',])
@ns.param('username', 'ID zarejestrowanego klienta')
@ns.param('session','Sesja klienta')
class ResOpen(Resource):
    @ns.marshal_with(CategoriesAndReservations)
    @ns.doc('Open')
    def get(self, username, session):
      try:
        ret={
  "reservations": [
    {
      "busy": 0,
      "description": "string",
      "free": 0,
      "start": "2020-05-01T23:30:00+02:00",
      "time": 0,
      "host_id": 0,
      "category_id": 0,
      "my": True
    }
  ],
  "message": "string",
  "retcode": 0,
  "categories": [
    {
      "count": 0,
      "id": 0,
      "name": "string"
    }
  ]
        }
        return ret
      except Exception as e:
        return {
           'session': '-1',
           'message': 'Errror! {0}'.format(e),
           'retcode': 500
        }

@ns.route('/new',methods=['POST',])
class ResNew(Resource):

    @ns.expect(NewReservation)
    @ns.marshal_with(Reservations, 201)
    @ns.doc('New reservation')
    def post(self):
      parser = reqparse.RequestParser()
      parser.add_argument('username', required=True, location='json')
      parser.add_argument('session', required=True, location='json')
      parser.add_argument('category', required=True, location='json')
      parser.add_argument('number', required=True, location='json')
      parser.add_argument('key', required=True, location='json')
      parser.add_argument('start', required=True, location='json')
      parser.add_argument('time', required=True, location='json')
      args = parser.parse_args()
      (username, session, category, number, key, start, time) = ( 
         args['username'], 
         args['session'],
         args['category'],
         args['number'],
         args['key'],
         args['start'],
         args['time']
      )
      try:
        return {
  "reservations": [
    {
      "busy": 0,
      "description": "string",
      "free": 0,
      "start": "2020-05-12T20:21:34.781Z",
      "time": 0,
      "host_id": 0,
      "category_id": 0,
      "my": true
    }
  ],
  "message": "string",
  "retcode": 0
}
      except Exception as e:
        return {
           'session': '-1',
           'message': 'Errror! {0}'.format(e),
           'retcode': 500
        }

@ns.route('/service',methods=['POST',])
class ResService(Resource):

    @ns.expect(ServiceRequest)
    @ns.marshal_with(Reservations, 201)
    def post(self):
      parser = reqparse.RequestParser()
      parser.add_argument('username', required=True, location='json')
      parser.add_argument('session', required=True, location='json')
      parser.add_argument('host_id', required=True, location='json')
      parser.add_argument('description', required=True, location='json')
      args = parser.parse_args()
      (username, session, host_id, description) = ( 
         args['username'], 
         args['session'],
         args['host_id'],
         args['description']
      )
      try:
        return {
  "reservations": [
    {
      "busy": 0,
      "description": "string",
      "free": 0,
      "start": "2020-05-12T20:19:30.452Z",
      "time": 0,
      "host_id": 0,
      "category_id": 0,
      "my": true
    }
  ],
  "message": "string",
  "retcode": 0
}
      except Exception as e:
        return {
           'session': '-1',
           'message': 'Errror! {0}'.format(e),
           'retcode': 500
        }
