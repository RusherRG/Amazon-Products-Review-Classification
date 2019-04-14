from pymongo import MongoClient
from bson.objectid import ObjectId

mongo_uri = 'mongodb://localhost:10000/'

# Database Functions
def connect(product):
    product = ''.join(product.lower().split())
    client = MongoClient(mongo_uri)
    return client.products[product]

def fetch_product(product):
    db = connect(product).details
    for i in db.find():
        if i['title'].find(product)!=-1:
            return i
    
def fetch_reviews(product):
    db = connect(product).reviews
    for i in db.find():
        if i['title'].find(product)!=-1:
            return i

allreviews = fetch_reviews('OnePlus 6T')