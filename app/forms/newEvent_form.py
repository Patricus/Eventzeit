from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateField, TimeField, FloatField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError
# from app.models import Event

class EventForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    date = DateField('date', validators=[DataRequired()])
    time = TimeField('time', validators=[DataRequired()])
    category = StringField('category', validators=[DataRequired()])
    description = TextAreaField('description')
    image = StringField('image', validators=[DataRequired()])
    occupancy = IntegerField('occupancy', validators=[DataRequired()])
    price = FloatField('price', validators=[DataRequired()])
    street_adress = StringField('street adress', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    zip_code = IntegerField('zipCode', validators=[DataRequired()])
