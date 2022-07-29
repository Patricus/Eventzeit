from .db import db


class Ticket(db.Model):
    __tablename__ = 'tickets'

    id = db.Column(db.Integer, primary_key=True)
    attendee = db.Column(db.String(30), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id', ondelete="CASCADE"))
    event_id = db.Column(db.Integer, db.ForeignKey(
        'events.id', ondelete="CASCADE"))
    event_url = db.Column(db.String(255), nullable=False)

    user = db.relationship('User', back_populates='tickets')
    event = db.relationship('Event', back_populates='tickets')

    def to_dict(self):
        return {
            'id': self.id,
            'attendee': self.attendee,
            'event_id': self.event_id,
            'user_id': self.user_id,
            'event_url': self.event_url
        }
