# coding: utf-8

from flask_restx import fields
from flask_restx import Namespace, Resource
from flask_restx import reqparse

api = Namespace('user', description='Login')

Session = api.model('Session', {
    'session': fields.String,
    'message': fields.String,
    'retcode': fields.Integer,
})


@api.route('/login',methods=['POST',])
@api.response(404, "User not found")
class Login(Resource):

    @api.marshal_with(Session,  as_list=False)
    @api.param('username', 'User name')
    @api.param('password','Password')
    def post(self):
      parser = reqparse.RequestParser()
      parser.add_argument('username', required=True, location='json')
      parser.add_argument('password', required=True, location='json')
      args = parser.parse_args()
      (username, password) = ( args['username'], args['password'] )
      try:
        if (username==password) and (username=='demo'):
          return {
           'session': 999,
           'message': 'OK',
           'retcode': 200
          }
        else:
          api.abort(404)
      except Exception as e:
        return {
           'session': -1,
           'message': 'Errror! {0}'.format(e),
           'retcode': 500
        }

