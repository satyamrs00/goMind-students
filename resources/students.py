from database.models import Student
from flask_restful import Resource
from flask import Response, request


class StudentsApi(Resource):
    def get(self):
        students = Student.objects().to_json()
        return Response(students, mimetype="application/json", status=200)

    def post(self):
        body = request.get_json()
        student = Student(**body).save()
        id = student.id
        return {'id': str(id)}, 200
