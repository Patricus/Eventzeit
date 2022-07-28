from flask import Blueprint, request
import os

map_routes = Blueprint('maps', __name__)

@map_routes.route('/')
def get_keys():
    return {'google_key': os.environ.get('REACT_APP_GOOGLE_MAPS_API_KEY'),
            'tomtom_key': os.environ.get('REACT_APP_TOMTOM_API_KEY')}
