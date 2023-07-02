from mongoengine import *
import os


connect(host=os.environ.get('MONGODB_URI'))


class Student( Document ):
    first_name = StringField( required=True )
    last_name = StringField( required=False, default="" )
    email = EmailField( required=True, unique=True )
    college = StringField( required=True )
    department = StringField( required=True )