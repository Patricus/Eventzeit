from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired

class TicketForm(FlaskForm):
    attendee = StringField('attendee', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    event_id = IntegerField('event_id', validators=[DataRequired()])
    event_url = StringField('event_url', validators=[DataRequired()])
