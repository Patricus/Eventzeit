from flask import Blueprint, jsonify, request
from app.forms.ticket_form import TicketForm
from app.models import Ticket, db
from auth_routes import validation_errors_to_error_messages

ticket_routes = Blueprint('tickets', __name__)

@ticket_routes.route('/', methods=['POST'])
def generate_ticket():
    form = TicketForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        ticket = Ticket(
            attendee = form.data['attendee'],
            for_sale = form.data['for_sale'],
            user_id = form.data['user_id'],
            event_id = form.data['event_id']
        )
        db.session.add(ticket)
        db.session.commit()
        return ticket.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@ticket_routes.route('/users/<int:userId>')
def load_tickets(userId):
    tickets = Ticket.query.filter(Ticket.user_id == userId)
    return tickets.to_dict()

@ticket_routes.route('/<int:id>', methods=['POST'])
def update_ticket(id):
    form = TicketForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        ticket = Ticket.query.filter(Ticket.id == id)
        ticket.attendee = form.data['attendee']
        ticket.for_sale = form.data['for_sale']
        ticket.user_id = form.data['user_id']
        db.session.commit()
        return ticket.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
