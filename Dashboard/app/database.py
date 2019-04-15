from pymongo import MongoClient
from bson.objectid import ObjectId
from pprint import pprint
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
review_graph = {'all':[]}
for Key in allreviews:
    if Key in ['battery', 'value', 'fingerprint', 'picture', 'sound']:
        review_graph[Key] = []
        review_graph['all'].append(len(allreviews[Key]['all']))
        for key in allreviews[Key]:
            review_graph[Key].append(len(allreviews[Key][key]))


for i in range(len(allreviews['all_reviews'])):
    try:
        allreviews['all_reviews'][i]['tags'] = set(allreviews['all_reviews'][i]['tags'])
    except:
        allreviews['all_reviews'][i]['tags'] = set()

# for key in ['battery', 'value', 'fingerprint', 'picture', 'sound']:
#     for c in ['pos', 'neu', 'neg']:
#         for i in allreviews[key][c]:
#             try:
#                 allreviews['all_reviews'][i[0]]['results']
#             except:
#                 allreviews['all_reviews'][i[0]]['results'] = i[1]
#             else:
#                 for j in ['pos', 'neu', 'neg']:
#                     allreviews['all_reviews'][i[0]]['results'][j] += i[1][j]
#     for i in allreviews[key]['all']:
#         try:
#             allreviews['allreviews']['tags']
#         except:
#             allreviews['allreviews']['tags'] = [key]
#         else:
#             allreviews['allreviews']['tags'].append(key)

# pprint(allreviews['all_reviews'])

# for i in range(len(allreviews['all_reviews'])):
#     for c in ['pos', 'neu', 'neg']:
#         allreviews['all_reviews'][i]['results'][c] /= sum(allreviews['all_reviews'][i]['results'].values())

