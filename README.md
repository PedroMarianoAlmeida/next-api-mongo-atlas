# next-api-mongo-atlas
The simplest way to connect your mongo DB cloud with your Next.js project

Conect the Mongo DB Atlas with your Next.js App adding just **ONE FILE** on your project (and one *eviorement variable*, but I will explain everything here 😎)

## Set up

1. Open any Next.js Project (or create a new one) 
2. Install [mongodb](https://www.npmjs.com/package/mongodb) ( ```npm i mongodb``` or ```yarn mongodb```)
3. Get your mongo string required to connection (if you don't know how, check [this tutorial](https://www.youtube.com/watch?v=S4fi6Qux-4g) - only the first 15 min - and [this repo](https://github.com/mongodb-developer/mongodb-next-todo))
4. Add a enviorement variable called ```MONGO_URI``` and put the mongoDb string, like in the image bellow

![enviorement-variable](https://user-images.githubusercontent.com/59484474/141597402-55962717-25bf-4ceb-ab24-b406d02e0b70.PNG)

5. Go to [mongodb.js file in this repo](https://github.com/PedroMarianoAlmeida/next-api-mongo-atlas/blob/main/mongodb.js), copy it and paste inside ```/pages/api``` directory, like the image bellow

![mongodb-file](https://user-images.githubusercontent.com/59484474/141597764-701117ad-2d80-4522-955d-0a7b8856ed3f.PNG)
Note: In this file is required the mongodb installed and the enviorement variable called MONGO_URI to everything works

...and IT'S DONE 🥳🥳🥳

## Usage

This Next.js endpoint needs to receive a body with an Object who has the following structure (sample):
```js
{
   "mongo": {
        "db": "test", //NAME OF DATABASE
        "collection": "accountA", //NAME OF COLLECTION, OPTIONAL
        "action": "insertOne", //NAME OF ACTION (ONE OF THE MONGODB ACTIONS)
        "data": { //THE DATA OBJECT, SHOULD BE AT LEAST AN EMPTY OBJECT
            "name": "My info",
            "time": "Wed, 21 Oct 2015 18:27:50 GMT"
        }
    }
}
```

So you can send this information the way you see fit, but in the list above I made some examples:
- [Postman](https://github.com/PedroMarianoAlmeida/next-api-mongo-atlas/blob/main/example/postman.md)
- [REST Client (VS Code Extension)](https://github.com/PedroMarianoAlmeida/next-api-mongo-atlas/blob/main/example/rest-client.md)
- [Fetch based function](https://github.com/PedroMarianoAlmeida/next-api-mongo-atlas/blob/main/example/fetch-based.md)
