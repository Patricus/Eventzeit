from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired

class TicketForm(FlaskForm):
    attendee = StringField('attendee', validators=[DataRequired()])
    for_sale = BooleanField('for_sale', default='unchecked', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    event_id = IntegerField('event_id', validators=[DataRequired()])
