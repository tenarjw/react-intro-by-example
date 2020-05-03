#!/bin/bash
# coding: utf-8

from flask import request, flash, redirect, render_template, url_for
from flask import Flask
from flask_restx import Api, Resource
from flask_bootstrap import Bootstrap
# api
from rest.booking import api as booking_api
from rest.login import api as login_api

from flask_cors import CORS

# flask app, Bootstrap
app=Flask(__name__)
#app.config['SECRET_KEY'] = 'secret_csrf' # zabezpieczenie przed csrf

# CORS
CORS(app)
@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response


Bootstrap(app)


# home
@app.route('/')
@app.route('/index')
#@login_required
#@cache.cached(timeout=1000)
def index():
  return render_template('index.html')


#app.config.setdefault('RESTX_MASK_HEADER', 'mask') #'X-Fields') 
app.config.setdefault('RESTX_MASK_SWAGGER', True) 

# API
api = Api(app,
    endpoint="/",
    version='1.0',
    title='API Backend',
    description='Booking API',
    doc='/help/'
)

ns = api.namespace('api', description='Backend API')

#api.add_namespace(booking_api)
api.add_namespace(login_api)

debug=True
if __name__ == '__main__':
  app.run(debug=debug)


