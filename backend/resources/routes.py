from .students import StudentsApi, CollegeListApi


def initialize_routes(api):
    api.add_resource(StudentsApi, '/api/students')
    api.add_resource(CollegeListApi, '/api/colleges')