from .db import db, environment, SCHEMA, add_prefix_for_prod

class Ticket(db.Model):
    __tablename__ = 'tickets'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    attendee = db.Column(db.String(30), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id'), ondelete="CASCADE"))
    event_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('events.id'), ondelete="CASCADE"))
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
