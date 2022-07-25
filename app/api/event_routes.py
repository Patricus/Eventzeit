from flask import Blueprint, request
from flask_login import login_required
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import Event, db
from app.forms.newEvent_form import EventForm

event_routes = Blueprint('events', __name__)


@event_routes.route('/')
def get_events():
    events = Event.query.all()
    return {'events': [event.to_dict() for event in events]}


@event_routes.route('/', methods=["POST"])
@login_required
def create_event():
    form = EventForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print("----DATE----", form.data)
    if form.validate_on_submit():

        event = Event(
            user_id=form.data['user_id'],
            category=form.data['category'],
            name=form.data['name'],
            event_image_url=form.data['event_image_url'],
            date=form.data['date'],
            description=form.data['description'],
            price=form.data['price'],
            max_occupancy=form.data['occupancy'],
            tickets_available=form.data['occupancy'],
            street_address=form.data['street_address'],
            city=form.data['city'],
            state=form.data['state'],
            zip_code=form.data['zipCode'],
        )

        db.session.add(event)
        db.session.commit()
        return event.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@event_routes.route("/<int:id>", methods=["PUT"])
@login_required
def update_event(id):
    data = request.json
    event = Event.query.get(id)

    event.user_id = data['user_id'],
    event.category = data['category'],
    event.name = data['name'],
    event.event_image_url = data['event_image_url'],
    event.date = data['date'],
    event.description = data['description'],
    event.price = data['price'],
    event.max_occupancy = data['max_occupancy'],
    event.tickets_available = data['max_occupancy'],
    event.street_address = data['street_address'],
    event.city = data['city'],
    event.state = data['state'],
    event.zip_code = data['zip_code'],

    db.session.commit()
    return event.to_dict()


@event_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_event(id):
    event = Event.query.filter(Event.id == id)
    event.delete()
    db.session.commit()
    return dict(event)
