from flask import Blueprint, jsonify, request
from app.forms.ticket_form import TicketForm
from app.models import Ticket, db

ticket_routes = Blueprint('tickets', __name__)

@ticket_routes.route('/purchase', methods=['POST'])
def generate_ticket():
    data = request.json
    ticket = Ticket(
        attendee = data['attendee'],
        for_sale = False,
        user_id = data['user_id'],
        event_id = data['event_id']
    )
    db.session.add(ticket)
    db.session.commit()
    return ticket.to_dict()

@ticket_routes.route('/<int:userId>')
def load_tickets(userId):
    tickets = Ticket.query.filter(Ticket.user_id == userId)
    return {'tickets': [ticket.to_dict() for ticket in tickets]}

@ticket_routes.route('/<int:id>', methods=['POST'])
def update_ticket(id):
    data = request.json
    ticket = Ticket.query.get(id)
    ticket.id = id
    ticket.attendee = data['attendee']
    ticket.for_sale = data['for_sale']
    ticket.user_id = data['user_id']
    db.session.commit()
    return ticket.to_dict()
