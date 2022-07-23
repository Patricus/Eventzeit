from app.models import db
from app.models.event import Event
import datetime


# Adds a demo user, you can add other users here if you want
def seed_events():
    reallycoolsuperbigbouncyparty = Event(
        user_id=1,
        category="Water",
        name='really cool super big bouncy party',
        event_image_url='fake-image.jpg',
        date=datetime.datetime.now(),
        description="Non-descript",
        price=8,
        max_occupancy=4,
        tickets_available=4,
        street_address="123 Home Place",
        city="Long Beach",
        state="CA",
        zip_code=90715)


    db.session.add(reallycoolsuperbigbouncyparty)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_events():
    db.session.execute('TRUNCATE events RESTART IDENTITY CASCADE;')
    db.session.commit()
