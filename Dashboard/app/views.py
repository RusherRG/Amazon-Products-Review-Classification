# views.py
from flask import render_template, jsonify, request, redirect
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
    page = max(1, int(request.args.get('page')))
    print(page)
    if type_rev in ['all_reviews', 'most_recent_reviews']:
        return render_template("reviews.html", reviews=allreviews[type_rev][10*(page-1):10*page])
    elif type_rev in ['battery', 'picture', 'sound', 'fingerprint', 'value']:
        classs = request.args.get('class')
        reviews = []
        for i in allreviews[type_rev][classs]:
            reviews.append(allreviews['all_reviews'][i])
        return render_template("reviews.html", reviews=reviews[10*(page-1):10*page])
    else:
        return redirect('index')


@app.route('/about')
def about():
    return render_template("about.html")