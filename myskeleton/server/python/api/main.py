#!/bin/bash
# coding: utf-8

from flask import request, flash, redirect, render_template, url_for
from flask import Flask
from flask_restx import Api, Resource
from flask_bootstrap import Bootstrap

from flask_cors import CORS

from myapi import app, api
#app=Flask(__name__)

#app.config['SECRET_KEY'] = 'secret_csrf' # CSRF protect
app.config['RESTX_MASK_HEADER']=False
app.config['RESTX_MASK_SWAGGER']=False
app.config.setdefault('RESTX_MASK_SWAGGER', True) 

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
def index():
  return render_template('index.html')


# API
ns = api.namespace('api', description='Backend API')
from rest.user import ns as user_ns
api.add_namespace(user_ns)

#from rest.res import ns as res_ns
#api.add_namespace(res_ns)

debug=True
if __name__ == '__main__':
  app.run(debug=debug, 
         host='0.0.0.0', 
         port=5000, 
         threaded=True)
