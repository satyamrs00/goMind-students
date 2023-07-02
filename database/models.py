from mongoengine import *


connect(host="mongodb://127.0.0.1:27017/my_db")


class Student( Document ):
    student_id = UUIDField( required=True, unique=True )
    first_name = StringField( required=True )
    last_name = StringField( required=False, default="" )
    email = EmailField( required=True, unique=True )
    college = StringField( required=True )
    department = StringField( required=True )