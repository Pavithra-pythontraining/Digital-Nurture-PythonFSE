from sqlalchemy import Column, Integer, String, ForeignKey,Boolean,Time
from sqlalchemy.orm import relationship

from database import Base


class Department(Base):
    __tablename__ = "departments"

    department_id = Column(Integer, primary_key=True)
    dept_name = Column(String(100), nullable=False)
    hod_name = Column(String(100))
    budget = Column(Integer)

    students = relationship("Student", back_populates="department")

class Student(Base):
    __tablename__ = "students"

    student_id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    age = Column(Integer)

    is_active = Column(Boolean, default=True)

    department_id = Column(Integer, ForeignKey("departments.department_id"))

    department = relationship("Department", back_populates="students")


class Teacher(Base):
    __tablename__ = "teachers"

    teacher_id = Column(Integer, primary_key=True)
    teacher_name = Column(String(100))
    subject = Column(String(100))


class Course(Base):
    __tablename__ = "courses"

    course_id = Column(Integer, primary_key=True)
    course_name = Column(String(100))
    credits = Column(Integer)


class Enrollment(Base):
    __tablename__ = "enrollments"

    enrollment_id = Column(Integer, primary_key=True)

    student_id = Column(Integer, ForeignKey("students.student_id"))
    course_id = Column(Integer, ForeignKey("courses.course_id"))

class CourseSchedule(Base):
    __tablename__ = "course_schedules"

    schedule_id = Column(Integer, primary_key=True)

    course_id = Column(Integer, ForeignKey("courses.course_id"))

    day_of_week = Column(String(20))

    start_time = Column(Time)

    end_time = Column(Time)