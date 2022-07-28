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
    user_id = db.Column(db.Integer, db.ForeignKey('users.id',  ondelete="CASCADE"), nullable=False)
    category = db.Column(db.String(255), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    event_image_url = db.Column(db.String(255), nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.Float, nullable=False)
    max_occupancy = db.Column(db.Integer, nullable=False)
    tickets_available = db.Column(db.Integer)
    street_address = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(255), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    zip_code = db.Column(db.Integer, nullable=False)

    tickets = db.relationship('Ticket', back_populates='event', cascade='all, delete-orphan', passive_deletes=True)
    bookmarks = db.relationship('Bookmark', back_populates='event', cascade='all, delete-orphan', passive_deletes=True)
    users = db.relationship('User', secondary="user_events",back_populates='events')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'category': self.category,
            'name': self.name,
            'event_image_url': self.event_image_url,
            'date': self.date,
            'description': self.description,
            'price': self.price,
            'max_occupancy': self.max_occupancy,
            'tickets_available': self.tickets_available,
            'street_address': self.street_address,
            'city': self.city,
            'state': self.state,
            'zip_code': self.zip_code,
        }
