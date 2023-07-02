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
    return 'Hello World!'


if os.environ.get('IS_DEVELOPMENT'):
    app.run(debug=True)
else:
    app.run( host='0.0.0.0', port=os.environ.get('PORT') )