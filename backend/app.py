from flask import Flask
from flask_cors import CORS
from flask_restful import Api
from resources.routes import initialize_routes
import os


app = Flask(__name__)
CORS(app)
api = Api(app)

initialize_routes(api)

@app.route('/')
def hello_world():
    return {'hello': 'world'}


if __name__ == '__main__':
  
    app.run(debug = True)