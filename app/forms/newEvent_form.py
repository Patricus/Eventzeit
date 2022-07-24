from unicodedata import name
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateTimeField, FloatField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError
# from app.models import Event


class EventForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    category = StringField('category', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    image = StringField('event_image_url', validators=[DataRequired()])
    date = DateTimeField('date', validators=[DataRequired()])
    description = TextAreaField('description')
    price = FloatField('price', validators=[DataRequired()])
    occupancy = IntegerField('max_occupancy', validators=[DataRequired()])
    street_address = StringField('street_address', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    zip_code = IntegerField('zip_code', validators=[DataRequired()])
