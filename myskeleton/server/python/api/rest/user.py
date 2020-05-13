# coding: utf-8

from flask_restx import fields
from flask_restx import Namespace, Resource
from flask_restx import reqparse

from myapi import api

ns = Namespace('user', description='Login')

Ret1 = api.model('Ret1', {
    'session': fields.String,
    'message': fields.String,
    'retcode': fields.Integer
})

Session = api.model('Session', {
    'session': fields.String,
    'message': fields.String,
    'retcode': fields.Integer,
})

@ns.route('/login',methods=['POST',])
@ns.response(404, "User not found")
class Login(Resource):

    @ns.marshal_with(Session) #,  as_list=False, envelope='resource')
    @ns.param('username', 'User name', 'formData')
    @ns.param('password', 'Password', 'formData')
    def post(self):
      parser = reqparse.RequestParser()
      parser.add_argument('username', required=True, location='form')
      parser.add_argument('password', required=True, location='form')
      args = parser.parse_args()
      (username, password) = ( args['username'], args['password'] )
      try:
        if (username==password) and (username=='demo'):
          return {
           'session': '999',
           'message': 'OK',
           'retcode': 200
          }
        else:
          ns.abort(404)
      except Exception as e:
        return {
           'session': '-1',
           'message': 'Errror! {0}'.format(e),
           'retcode': 500
        }


@ns.route('/logout',methods=['POST',])
@ns.response(404, "User not found")
class Logout(Resource):

    @ns.marshal_with(Session) #,  as_list=False, envelope='resource')
    @ns.param('username', 'User name', 'formData')
    @ns.param('session', 'Session', 'formData')
    def post(self):
      parser = reqparse.RequestParser()
      parser.add_argument('username', required=True, location='form')
      parser.add_argument('session', required=True, location='form')
      args = parser.parse_args()
      (username, session) = ( args['username'], args['session'] )
      try:
        if (username=='demo'):
          return {
           'session': '',
           'message': 'OK',
           'retcode': 200
          }
        else:
          ns.abort(404)
      except Exception as e:
        return {
           'session': '-1',
           'message': 'Errror! {0}'.format(e),
           'retcode': 500
        }

