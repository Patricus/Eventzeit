from app.models import db
from app.models.ticket import Ticket

def seed_tickets():
    ticket_for_demo = Ticket(
        attendee = 'Demo Lition',
        for_sale = False,
        user_id = 1,
        event_id = 1
    )

    db.session.add(ticket_for_demo)
    db.session.commit()

def undo_tickets():
    db.session.execute('TRUNCATE tickets RESTART IDENTITY CASCADE;')
    db.session.commit()