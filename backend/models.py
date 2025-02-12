from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    mobile = db.Column(db.String(15), nullable=False)
    password = db.Column(db.String(100), nullable=False)

    def __init__(self, first_name, last_name, email, mobile, password):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.mobile = mobile
        self.password = password  # You should hash this in production!
