from sqlalchemy import ForeignKey
from .db import db

user_events = db.Table(
    'user_events',
    db.Column(
        'user_id',
        db.Integer,
        db.ForeignKey('users.id'),
        primary_key = True
    ),
    db.Column(
        'event_id',
        db.Integer,
        db.ForeignKey('events.id'),
        primary_key = True
    )
)

class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    category = db.Column(db.String(255), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    event_image_url = db.Column(db.String(255), nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    description = db.Column(db.Text(30))
    price = db.Column(db.Float, nullable=False)
    max_occupancy = db.Column(db.Integer, nullable=False)
    tickets_available = db.Column(db.Integer)
    street_address = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(255), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    zip_code = db.Column(db.Integer, nullable=False)

    user = db.relationship('User', secondary="user_events",back_populates='events')
