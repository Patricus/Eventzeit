from app.models import db
from app.models.event import Event


# Adds a demo user, you can add other users here if you want
def seed_events():
    reallycoolsuperbigbouncyparty = Event(
        name='really cool super big bouncy party', date="", time="", category="", description="", image="", occupancy=4, price=8, street_address="", state="CA", city="Long Beach", zip_code=90715)


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
