async function scanerCreate(data) {
    fetch(`${API_URL}/scaner`, data)
    .then(data => {
        if (!data.ok) {
          throw Error(data.status);
         }
         return data.json();
        }).then(create => {
        console.log(create);
        }).catch(e => {
        console.log(e);
        });
  }



  export {
    scanerCreate
  }