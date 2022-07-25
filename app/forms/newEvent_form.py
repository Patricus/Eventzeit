from unicodedata import name
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateTimeField, FloatField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError
# from app.models import Event


class EventForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    category = StringField('category', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    event_image_url = StringField(
        'event_image_url', validators=[DataRequired()])
    date = DateTimeField('date', validators=[
                         DataRequired()], format='%Y-%m-%d %H:%M')
    description = TextAreaField('description')
    price = FloatField('price')
    occupancy = IntegerField('max_occupancy', validators=[DataRequired()])
    street_address = StringField('street_address', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    zipCode = IntegerField('zip_code', validators=[DataRequired()])
