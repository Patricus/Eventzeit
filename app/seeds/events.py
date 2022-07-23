from app.models import db
from app.models.event import Event
import datetime


# Adds a demo user, you can add other users here if you want
def seed_events():
    reallycoolsuperbigbouncyparty = Event(
        user_id=1,
        category="Water",
        name='really cool super big bouncy party',
        event_image_url='https://img.freepik.com/free-vector/silhouette-crowd-party-people-starburst-background_1048-13832.jpg',
        date=datetime.datetime.now(),
        description="Non-descript",
        price=8,
        max_occupancy=4,
        tickets_available=4,
        street_address="123 Home Place",
        city="Long Beach",
        state="CA",
        zip_code=90715)

    eventoftheages = Event(
        user_id=2,
        category="Fire",
        name='event of the ages',
        event_image_url='https://img.freepik.com/free-photo/people-having-party-by-beach_53876-26402.jpg',
        date=datetime.datetime.now(),
        description="Non-descript",
        price=0,
        max_occupancy=10,
        tickets_available=10,
        street_address="123 Home Place",
        city="Long Beach",
        state="CA",
        zip_code=90715)

    bumpbappers = Event(
        user_id=3,
        category="Air",
        name='bounce party',
        event_image_url='https://img.freepik.com/premium-photo/people-concert_31965-3617.jpg',
        date=datetime.datetime.now(),
        description="Non-descript",
        price=4,
        max_occupancy=5,
        tickets_available=0,
        street_address="123 Home Place",
        city="Long Beach",
        state="CA",
        zip_code=90715)

    discodunkers = Event(
        user_id=1,
        category="Earth",
        name='disco dunkers',
        event_image_url='https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg',
        date=datetime.datetime.now(),
        description="Non-descript",
        price=12,
        max_occupancy=50,
        tickets_available=4,
        street_address="123 Home Place",
        city="Long Beach",
        state="CA",
        zip_code=90715)

    db.session.add(reallycoolsuperbigbouncyparty)
    db.session.add(eventoftheages)
    db.session.add(bumpbappers)
    db.session.add(discodunkers)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_events():
    db.session.execute('TRUNCATE events RESTART IDENTITY CASCADE;')
    db.session.commit()
