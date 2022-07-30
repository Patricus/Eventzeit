import email
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_length(form, field):
    username = field.data
    if len(username) > 40:
        raise ValidationError('User Name must be 40 characters or less.')


def email_length(form, field):
    email = field.data
    if len(email) > 40:
        raise ValidationError('Email must be 255 characters or less.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('User Name is already in use.')


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists, username_length])
    email = StringField('email', validators=[
                        DataRequired(), user_exists, email_length])
    password = StringField('password', validators=[DataRequired()])
    avatar = StringField('avatar', validators=[DataRequired()])
