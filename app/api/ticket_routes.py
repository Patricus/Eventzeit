from flask import Blueprint, jsonify, request
from app.api.auth_routes import validation_errors_to_error_messages
from app.forms.ticket_form import TicketForm
from app.models import Ticket, db, Event
from flask_login import login_required

ticket_routes = Blueprint('tickets', __name__)


@ticket_routes.route('/', methods=['POST'])
def generate_ticket():
    form = TicketForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        ticket = Ticket(
            attendee=form.data['attendee'],
            user_id=form.data['user_id'],
            event_id=form.data['event_id'],
            event_url=form.data['event_url']
        )

        event = Event.query.get(ticket.event_id)
        if event.tickets_available == 0:
            return {"error": "Sorry, there are no more tickets left for this event"}, 405
        else:
            # Every time a ticket is purchased, tickets available is
            # decreased by one
            event.tickets_available -= 1

        db.session.add(ticket)
        db.session.commit()
        return ticket.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@ticket_routes.route('/<int:userId>')
def load_tickets(userId):
    tickets = Ticket.query.filter(Ticket.user_id == userId)
    return {'tickets': [ticket.to_dict() for ticket in tickets]}


@ticket_routes.route('/<int:id>', methods=['POST'])
def update_ticket(id):
    form = TicketForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        ticket = Ticket.query.get(id)
        ticket.id = id
        ticket.attendee = form.data['attendee']
        ticket.user_id = form.data['user_id']
        ticket.event_url = form.data['event_url']
        db.session.commit()
        return ticket.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@ticket_routes.route('/delete/<int:id>', methods=["DELETE"])
def delete_event(id):
    form = TicketForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        event_id = form.data['event_id']
        ticket = Ticket.query.filter(Ticket.id == id)
        event = Event.query.filter(Event.id == event_id).first()
        ticket.delete()
        event.tickets_available = event.tickets_available + 1
        db.session.commit()
        return {'id': id}
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
