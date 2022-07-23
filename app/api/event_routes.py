from flask import Blueprint, request
from flask_login import login_required
from app.models import Event, db
from app.forms.newEvent_form import EventForm
from .auth_routes import validation_errors_to_error_messages

event_routes = Blueprint('events', __name__)


@event_routes.route('/')
def get_events():
    events = Event.query.all()
    return {'events': [event.to_dict() for event in events]}


@event_routes.route('/', methods=["POST"])
@login_required
def create_event():
    data = request.json
    event = Event(
        user_id=data['user_id'],
        category=data['category'],
        name=data['name'],
        event_image_url=data['event_image_url'],
        date=data['date'],
        description=data['description'],
        price=data['price'],
        max_occupancy=data['max_occupancy'],
        tickets_available=data['max_occupancy'],
        street_address=data['street_address'],
        city=data['city'],
        state=data['state'],
        zip_code=data['zip_code'],
    )

    db.session.add(event)
    db.session.commit()
    return event.to_dict()
    # return {'errors': validation_errors_to_error_messages(form.errors)}, 401
