from flask import Blueprint, request
from app.AWS import (allowed_file, upload_file_to_s3, get_unique_filename)
from app.models import Event, db
from flask_login import login_required


aws_routes = Blueprint('images', __name__)


@aws_routes.route('/<int:id>', methods=["POST"])
@login_required
def upload(id):
    if "image" not in request.files:
        return {'errors': 'Image required'}, 401

    image = request.files['image']

    if not allowed_file(image.filename):
        return {"errors": "image must be .pdf .jpg .jpeg .png .gif"}

    image.filename = get_unique_filename(image.filename)
    upload = upload_file_to_s3(image)

    if "url" not in upload:
        return {"errors": upload}, 400

    url = upload['url']

    event = Event.query.get(id).first()
    event.event_image_url = url

    db.session.commit()
    return {"url": url}
