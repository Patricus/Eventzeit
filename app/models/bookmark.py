from .db import db


class Bookmark(db.Model):
    __tablename__ = 'bookmarks'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id', ondelete="CASCADE"))
    event_id = db.Column(db.Integer, db.ForeignKey(
        'events.id', ondelete="CASCADE"))

    user = db.relationship('User', back_populates='bookmarks')
    event = db.relationship('Event', back_populates='bookmarks')

    def to_dict(self):
        return {
            'id': self.id,
            'event_id': self.event_id,
            'user_id': self.user_id
        }
