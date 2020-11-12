import os
import secrets
from PIL import Image
from pichest import app


def save_picture(form_picture, path):
    random_hex = secrets.token_hex(8)
    _, f_ext = os.path.splitext(form_picture.filename)
    picture_fn = random_hex + f_ext
    picture_path = os.path.join(app.root_path, path, picture_fn)

    i = Image.open(form_picture)
    if path == 'static/profile_pics':
        output_size = (125, 125)
        i.thumbnail(output_size)
        i.save(picture_path)
    elif path == 'static/posts':
        output_size = (600,600)
        i.thumbnail(output_size)
        i.save(picture_path)

    return picture_fn