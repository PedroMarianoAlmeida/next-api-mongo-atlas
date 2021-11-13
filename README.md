# next-api-mongo-atlas
The simplest way to connect your mongo DB cloud with your Next.js project

Conect the Mongo DB Atlas with your Next.js App adding just **ONE FILE** on your project (and one *eviorement variable*, but I will explain everything here 😎)

## How to use this tool in your project

1. Open any Next.js Project (or create a new one) 
2. Install [mongodb](https://www.npmjs.com/package/mongodb) ( ```npm i mongodb``` or ```yarn mongodb```)
3. Get your mongo string required to connection (if you don't know how, check [this tutorial](https://www.youtube.com/watch?v=S4fi6Qux-4g) - only the first 15 min - and [this repo](https://github.com/mongodb-developer/mongodb-next-todo))
4. Add a enviorement variable called ```MONGO_URI``` and put the mongoDb string, like in the image bellow

![enviorement-variable](https://user-images.githubusercontent.com/59484474/141597402-55962717-25bf-4ceb-ab24-b406d02e0b70.PNG)

5. Go to [this file](https://github.com/PedroMarianoAlmeida/next-api-mongo-atlas/blob/main/mongodb.js), copy it and paste inside ```/pages/api``` directory, like the image bellow

![mongodb-file](https://user-images.githubusercontent.com/59484474/141597764-701117ad-2d80-4522-955d-0a7b8856ed3f.PNG)
Note: In this file is required the mongodb installed and the enviorement variable called MONGO_URI to everything works

...and IT'S DONE 🥳🥳🥳
