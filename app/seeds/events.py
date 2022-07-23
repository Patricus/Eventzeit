from app.models import db
from app.models.event import Event
import datetime


# Adds a demo user, you can add other users here if you want
def seed_events():
    reallycoolsuperbigbouncyparty = Event(
        user_id=1,
        category="Water",
        name='Really cool super BIG BOUNCY PARTY',
        event_image_url='https://img.freepik.com/free-vector/silhouette-crowd-party-people-starburst-background_1048-13832.jpg',
        date=datetime.datetime.now(),
        description="The coolest, most awesome, super big bounty party the world has ever seen",
        price=8,
        max_occupancy=4,
        tickets_available=4,
        street_address="500 Home Place",
        city="Long Beach",
        state="CA",
        zip_code=90715)

    eventoftheages = Event(
        user_id=2,
        category="Fire",
        name='Event of the Ages',
        event_image_url='https://img.freepik.com/free-photo/people-having-party-by-beach_53876-26402.jpg',
        date=datetime.datetime.now(),
        description="This is the event of the ages, do not miss it",
        price=0,
        max_occupancy=10,
        tickets_available=10,
        street_address="500 Main Street",
        city="Long Beach",
        state="CA",
        zip_code=90715)

    bumpbappers = Event(
        user_id=3,
        category="Air",
        name='House Party',
        event_image_url='https://img.freepik.com/premium-photo/people-concert_31965-3617.jpg',
        date=datetime.datetime.now(),
        description="Mega huge house party! Come on through and have some fun!",
        price=4,
        max_occupancy=5,
        tickets_available=0,
        street_address="300 Home Place",
        city="Long Beach",
        state="CA",
        zip_code=90715)

    discodunkers = Event(
        user_id=1,
        category="Earth",
        name='Disco Dunkers',
        event_image_url='https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg',
        date=datetime.datetime.now(),
        description="We will be dunking some maybe disco. Its going be a blast. Let the world know. We are going to bring this disco to all the dunkers world wide",
        price=12,
        max_occupancy=50,
        tickets_available=4,
        street_address="123 Home Place",
        city="Long Beach",
        state="CA",
        zip_code=90715)

    tomsbbq = Event(
        user_id=2,
        category="Fire",
        name='Tom\'s BBQ',
        event_image_url='https://simpleseasonal.com/wp-content/uploads/2018/08/shutterstock_279093950.jpg',
        date=datetime.datetime.now(),
        description="Come on down to Tom's BBQ!",
        price=5,
        max_occupancy=35,
        tickets_available=35,
        street_address="700 California Street",
        city="San Francisco",
        state="CA",
        zip_code=94115)

    chrisandallison = Event(
        user_id=2,
        category="Heart",
        name='Chris and Allison\'s Wedding!',
        event_image_url='https://i.insider.com/5eac8da748d92c3d275bb2de?width=700',
        date=datetime.datetime.now(),
        description="Chris and Allison and getting married! Come share this special moment in our lives with us!",
        price=50,
        max_occupancy=150,
        tickets_available=150,
        street_address="23570 Arnold Dr",
        city="Sonoma",
        state="CA",
        zip_code=95476)

    tysegallfilmore = Event(
        user_id=2,
        category="Wind",
        name='Ty Segall at the Filmore',
        event_image_url='https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/concert-photography/thumbnail.jpeg',
        date=datetime.datetime.now(),
        description="Ty Segall playing live at the Filmore",
        price=35,
        max_occupancy=550,
        tickets_available=550,
        street_address="1805 Geary Blvd",
        city="San Francisco",
        state="CA",
        zip_code=94115)

    runningforfun = Event(
        user_id=2,
        category="Air",
        name='Running for fun',
        event_image_url='https://upload.wikimedia.org/wikipedia/commons/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg',
        date=datetime.datetime.now(),
        description="This is running for fun. Come run for fun because it's fun",
        price=5,
        max_occupancy=200,
        tickets_available=200,
        street_address="101 Peacock Gap Trail",
        city="San Rafael",
        state="CA",
        zip_code=94901)


    db.session.add(reallycoolsuperbigbouncyparty)
    db.session.add(eventoftheages)
    db.session.add(bumpbappers)
    db.session.add(discodunkers)
    db.session.add(tomsbbq)
    db.session.add(chrisandallison)
    db.session.add(tysegallfilmore)
    db.session.add(runningforfun)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_events():
    db.session.execute('TRUNCATE events RESTART IDENTITY CASCADE;')
    db.session.commit()
