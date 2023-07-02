from database.models import Student
from flask_restful import Resource
from flask import Response, request
import json


class StudentsApi(Resource):
    def get(self):
        students = Student.objects().to_json()
        return Response(students, mimetype="application/json", status=200)

    def post(self):
        body = request.get_json()
        try:
            student = Student(**body).save()
        except Exception as e:
            return {'error': str(e)}, 400
        
        return json.loads(student.to_json()), 201
