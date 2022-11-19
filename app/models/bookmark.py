from .db import db, environment, SCHEMA, add_prefix_for_prod


class Bookmark(db.Model):
    __tablename__ = 'bookmarks'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id'), ondelete="CASCADE"))
    event_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('events.id'), ondelete="CASCADE"))

    user = db.relationship('User', back_populates='bookmarks')
    event = db.relationship('Event', back_populates='bookmarks')

    def to_dict(self):
        return {
            'id': self.id,
            'event_id': self.event_id,
            'user_id': self.user_id
        }
