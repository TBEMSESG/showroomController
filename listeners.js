//copy secrets here and remove before commit


//devices and settings
const devicesId = ['8c-79-f5-90-d8-2b','38-68-a4-95-e3-3a','8c-79-f5-90-d8-39','8c-79-f5-90-d8-27','38-68-a4-95-e3-3d'];

const channelQSR = 1;
const channelFashion = 2;
const channelCorporate = 3;

const dataQSR = {
    deviceIds: devicesId,
    menu: 'save_sch_channel',
    productType: 'string',
    value: channelQSR
}
const dataFashion = {
    deviceIds: devicesId,
    menu: 'save_sch_channel',
    productType: 'string',
    value: channelFashion
}
const dataCorporate = {
    deviceIds: devicesId,
    menu: 'save_sch_channel',
    productType: 'string',
    value: channelCorporate
}

// Listeners 
const buttonQSR = document.querySelector(".item1")
const buttonFashion = document.querySelector(".item2")
const buttonCorporate = document.querySelector(".item3")
const buttonOnOff = document.querySelector(".item4")

buttonQSR.addEventListener('click',() => console.log("QSR"))






// Example POST method implementation:
async function getAuth(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  getAuth(apiURL, cred)
    .then((data) => {
        console.log(data.token); // JSON data parsed by `data.json()` call
    });


// // Example POST method implementation:
// async function postData(url = "", data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: "POST", // *GET, POST, PUT, DELETE, etc.
//       mode: "cors", // no-cors, *cors, same-origin
//       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: "same-origin", // include, *same-origin, omit
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: "follow", // manual, *follow, error
//       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData("https://example.com/answer", { answer: 42 })
//   .then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });