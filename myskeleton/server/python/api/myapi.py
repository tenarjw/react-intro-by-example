from flask import Flask
from flask_restx import Api, Resource
from flask import render_template

app=Flask(__name__)

api = Api(app,
    endpoint="/",
    version='1.0',
    title='API Backend',
    description='Reservation API',
    doc='/help/'
)
