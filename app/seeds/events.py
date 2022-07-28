from secrets import choice
from app.models import db
from app.models.event import Event
import datetime
import random


# Adds a demo user, you can add other users here if you want
def seed_events():
    images = [
        'https://img.freepik.com/free-vector/silhouette-crowd-party-people-starburst-background_1048-13832.jpg',
        'https://img.freepik.com/free-photo/people-having-party-by-beach_53876-26402.jpg',
        'https://img.freepik.com/premium-photo/people-concert_31965-3617.jpg',
        'https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg',
        'https://simpleseasonal.com/wp-content/uploads/2018/08/shutterstock_279093950.jpg',
        'https://i.insider.com/5eac8da748d92c3d275bb2de?width=700',
        'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/concert-photography/thumbnail.jpeg',
        'https://www.paradiseretreats.com/wp-content/uploads/2021/03/SBSummerSolsticeParade2016_Dancers_PhotobyDanielleMethmann.JPG-scaled.jpg',
    ]

    categories = [
        "Sport",
        "Party",
        "Concert",
        "Dinner",
        "Game",
        "Seminar",
        "Conference",
        "Workshop",
        "Social",
        "Class",
        "Auction",
        "Gala",
        "Festival",
        "Exercise",
        "Celebration",
        "Other",
    ]

    addresses = [
        {'street_address': "185 S Patterson Ave D",
            'city': "Santa Barbara", 'state': "CA", 'zip_code': 93111},

        {'street_address': '5722 Calle Real',
            'city': 'Goleta', 'state': 'CA', 'zip_code': 93117},

        {'street_address': '3891 State St', 'city': 'Santa Barbara',
            'state': 'CA', 'zip_code': 93105},

        {'street_address': '217 Stearns Wharf', 'city': 'Santa Barbara',
            'state': 'CA', 'zip_code': 93101},

        {'street_address': '500 Ninos Dr', 'city': 'Santa Barbara',
            'state': 'CA', 'zip_code': 93103},
    ]

    name1 = [
        'Big',
        'Fancy',
        'Small',
        'Fantastic',
        'Bodacious',
        'Grand',
        'Amazing'
    ]

    name2 = [
        'Kahuna',
        'Shindig',
        'Get Together',
        'Meeting of the Minds',
        'Brunch',
        'Wedding',
        'Jam',
        'Party',
        'Sleep Over',
        'Camping Trip',
        'Hangout'
    ]

    for i in range(100):
        address = random.choice(addresses)

        event = Event(
            user_id=i % 3 + 1,
            category=random.choice(categories),
            name=f'{random.choice(name1)} {random.choice(name2)}',
            event_image_url=random.choice(images),
            date=datetime.datetime.now() + datetime.timedelta(days=i),
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!",
            price=i,
            max_occupancy=i*3,
            tickets_available=i*3,
            street_address=address['street_address'],
            city=address['city'],
            state=address['state'],
            zip_code=address['zip_code']
        )
        db.session.add(event)

    reallycoolsuperbigbouncyparty = Event(
        user_id=1,
        category="Party",
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
        category="Social",
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
        category="Party",
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
        category="Festival",
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
        category="Dinner",
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
        category="Celebration",
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
        category="Concert",
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
        category="Sport",
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
