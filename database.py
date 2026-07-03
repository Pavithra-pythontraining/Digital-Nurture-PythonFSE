from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base

DATABASE_URL = "postgresql+psycopg2://postgres:Pavithra@localhost/college_db_orm"

engine = create_engine(DATABASE_URL)

Base = declarative_base()