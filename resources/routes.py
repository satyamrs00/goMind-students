from .students import StudentsApi


def initialize_routes(api):
    api.add_resource(StudentsApi, '/api/students')