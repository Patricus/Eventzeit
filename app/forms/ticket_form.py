from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired

class TicketForm(FlaskForm):
    attendee = StringField('Attendee', validators=[DataRequired()])
    for_sale = BooleanField('For Sale?', validators=[DataRequired()])
    user_id = IntegerField()
    event_id = IntegerField()
