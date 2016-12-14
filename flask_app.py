from flask import Flask, request, jsonify, Response
import json
app = Flask(__name__)

@app.route('/')
def helloWorld():
    return "Hello world"

@app.route('/albums', methods=["GET"])
def get():
    if request.method == "GET":
        dat = json.dumps([
                           {
                              "title":"Vessel",
                              "artist":"twenty one pilots",
                              "url":"https://www.amazon.com/Vessel-twenty-one-pilots/dp/B00A50PDDY",
                              "image":"https://images-na.ssl-images-amazon.com/images/I/61PX1uDSjgL._SL1425_.jpg",
                              "thumbnail_image":"https://i.imgur.com/GSCXlbb.jpg"
                           },
                           {
                              "title":"Blurryface",
                              "artist":"twenty one pilots",
                              "url":"https://www.amazon.com/Blurryface-Twenty-One-Pilots/dp/B00VI2L3L4",
                              "image":"https://images-na.ssl-images-amazon.com/images/I/71Vl-qLrVtL._SL1203_.jpg",
                              "thumbnail_image":"https://i.imgur.com/GSCXlbb.jpg"
                           },
                           {
                              "title":"X Infinity",
                              "artist":"George Watsky",
                              "url":"https://www.amazon.com/X-Infinity-Watsky/dp/B01I6RN3BG",
                              "image":"https://images-na.ssl-images-amazon.com/images/I/61-NJfXHAjL._SY355_.jpg",
                              "thumbnail_image":"https://i.imgur.com/XcXkxiF.jpg"
                           },
                           {
                              "title":"All You Can Do",
                              "artist":"George Watsky",
                              "url":"https://www.amazon.com/All-You-Can-Do-Watsky/dp/B00KTFJ9DA",
                              "image":"https://images-na.ssl-images-amazon.com/images/I/A14cZ0P%2BpCL._SL1500_.jpg",
                              "thumbnail_image":"https://i.imgur.com/XcXkxiF.jpg"
                           },
                           {
                              "title":"Grand",
                              "artist":"Matt and Kim",
                              "url":"https://www.amazon.com/Grand-Matt-Kim/dp/B001KY47RW",
                              "image":"https://images-na.ssl-images-amazon.com/images/I/91N4wpK1uUL._SL1500_.jpg",
                              "thumbnail_image":"https://pbs.twimg.com/profile_images/779455439348043777/KmJ65Tzo.jpg"
                           }
                        ])
        resp = Response(response=dat, status=200, \
               mimetype="application/json")
        return resp
    else:
        return "Not valid"