# Fetch Based Function

There is an extra tool to help using the endpoint, it is a async function that receives the "mongo object" and make all the work

## Set up

1. Copy [handleMongo.js](https://github.com/PedroMarianoAlmeida/next-api-mongo-atlas/blob/main/example/fetch-based/handleMongo.js) and paste in your project

2. Use anywhere passing an Object as specified in the initial tutorial

```js
const sampleInsertMany = {
  mongo: {
    db: "test",
    collection: "accountB",
    action: "insertMany",
    data: [
      {
        name: "AAA",
        time: "Wed, 21 Oct 2015 18:27:50 GMT",
      },
      {
        name: "BBB",
        time: "Wed, 21 Oct 2015 18:27:50 GMT",
      },
    ],
  },
};

handleMongo(sampleInsertMany);
```

In the image below I am using in the index page of the default `create-next-app`
![handle-mongo](https://user-images.githubusercontent.com/59484474/141602325-0e90ad99-b7a5-4149-a76f-1c8c5b7bdafc.PNG)
