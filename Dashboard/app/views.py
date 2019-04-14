# views.py
from flask import render_template, jsonify, request
from bson import ObjectId

from app import app
from .database import *

@app.route('/')
def index():
    product_info = fetch_product('OnePlus 6T')
    return render_template("index.html", product=product_info)
    
@app.route('/reviews')
def reviews():
    type_rev = request.args.get('type')
    page = int(request.args.get('page'))
    return render_template("reviews.html", reviews=allreviews[type_rev][10*(page-1):10*page])

@app.route('/about')
def about():
    return render_template("about.html")