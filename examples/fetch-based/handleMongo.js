const handleMongo = async (mongoObject, url = '') => {
  try {
    const res = await fetch(`${url}/api/mongodb/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mongoObject),
    });

    if (res.ok) {
      const data = await res.json();
      //console.log(data);
      return [data, null];
    } else {
      //console.log(res.statusText);
      return [null, res.statusText];
    }
  } catch (error) {
    //console.log(error);
    return [null, error];
  }
};

export default handleMongo;
