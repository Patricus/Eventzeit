from flask import Blueprint, jsonify, request
from app.models import db, Event
from app.models.bookmark import Bookmark
from flask_login import login_required

bookmark_routes = Blueprint('bookmarks', __name__)

@bookmark_routes.route('/create', methods=['POST'])
@login_required
def generate_bookmark():
    data = request.json
    # pulling the events from the body by keying into the data
    bookmark = Bookmark(
        user_id = data['user_id'],
        event_id = data['event_id'],
        title = data['title']
    )


    # # checking if there is already a bookmark for the event for that user and if there is, return so you dont make anything new
    # event = Bookmark.query.filter(bookmark.event_id == data.event_id and bookmark.user_id == data.user_id)
    # if event:
    #     return {"message": "already bookmarked"}, 401

    db.session.add(bookmark) #adding the bookmark
    db.session.commit() #commiting it to the database
    return bookmark.to_dict()

@bookmark_routes.route('/<int:userId>')
@login_required
def load_bookmarks(userId):
    bookmarks = Bookmark.query.filter(Bookmark.user_id == userId)
    return {'bookmarks': [bookmark.to_dict() for bookmark in bookmarks]}

@bookmark_routes.route('/delete/<int:id>', methods=["DELETE"])
@login_required
def delete_event(id):
    bookmark = Bookmark.query.filter(Bookmark.id == id)
    bookmark.delete()
    db.session.commit()
    return {'id': id}
