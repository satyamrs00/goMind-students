from .students import StudentsApi, CollegeListApi, DepartmentListApi


def initialize_routes(api):
    api.add_resource(StudentsApi, '/api/students')
    api.add_resource(CollegeListApi, '/api/colleges')
    api.add_resource(DepartmentListApi, '/api/departments')