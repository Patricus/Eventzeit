from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired


def attendee_length(form, field):
    attendee = field.data
    if len(attendee) > 30:
        raise ValidationError(
            'Name of Attendee must be 30 characters or less.')


class TicketForm(FlaskForm):
    attendee = StringField('attendee', validators=[
                           DataRequired(), attendee_length])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    event_id = IntegerField('event_id', validators=[DataRequired()])
    event_url = StringField('event_url', validators=[DataRequired()])
