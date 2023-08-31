//copy secrets here and remove before commit
// const cred = {}; //add your credentials here in format {username:"cc", password:"xx"}
// const apiURL = "https://YourSERVER/MagicInfo/auth"; //add your MI Api url here   3LbNzTO4Mh2U4FsQ8T
// const apiURLChannelChange = "https://YourSERVER/MagicInfo/restapi/v2.0/rms/devices/quick-control"
// const apiURLPower = "https://YourSERVER/MagicInfo/restapi/v2.0/rms/devices/quick-control"


//devices and settings
const devicesId = ['8c-79-f5-90-d8-2b','38-68-a4-95-e3-3a','8c-79-f5-90-d8-39','8c-79-f5-90-d8-27','38-68-a4-95-e3-3d','70-2a-d5-19-ab-80','70-2a-d5-19-ac-41','d0-03-df-12-f5-ea','38-68-a4-8a-12-dd','38-68-a4-b0-09-75','d0-03-df-27-4e-f8'];
const devicesIdAll = []
const channelQSR = 3;
const channelFashion = 2;
const channelCorporate = 1;

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
const buttonQSR = document.querySelector(".item1");
const buttonFashion = document.querySelector(".item2");
const buttonCorporate = document.querySelector(".item3");
const buttonOnOff = document.querySelector(".item4");
const buttons = document.querySelectorAll(".button");

// Eventlisteners
buttonQSR.addEventListener('click', ()=> { getAuth(apiURL, cred)
    .then((res) => {
        changeChannel(apiURLChannelChange,dataQSR, res.token)
                .then( buttons.forEach((button) => button.classList.remove("active", "error")))
                .then((final)=> { 
                    final.items.successList ? buttonQSR.classList.add("active") : buttonQSR.classList.add("error") ;
                })
                .catch((err) => {buttonQSR.classList.add("error"); console.log("Could not call APi endpoint ->",err)});  
        })
    .catch((err) => console.log("Could not retrive a token ->", err))
    });

buttonFashion.addEventListener('click', ()=> { getAuth(apiURL, cred)
    .then((res) => {
        changeChannel(apiURLChannelChange,dataFashion, res.token)
        .then( buttons.forEach((button) => button.classList.remove("active", "error")))
        .then((final)=> { 
            final.items.successList ? buttonFashion.classList.add("active") : buttonFashion.classList.add("error") ;
        })
        .catch((err) => {buttonFashion.classList.add("error"); console.log("Could not call APi endpoint ->",err)});  
})
.catch((err) => console.log("Could not retrive a token ->", err))
    });

buttonCorporate.addEventListener('click', ()=> { getAuth(apiURL, cred)
    .then((res) => {
        changeChannel(apiURLChannelChange,dataCorporate, res.token)
        .then( buttons.forEach((button) => button.classList.remove("active", "error")))
        .then((final)=> { 
            final.items.successList ? buttonCorporate.classList.add("active") : buttonCorporate.classList.add("error") ;
        })
        .catch((err) => {buttonCorporate.classList.add("error"); console.log("Could not call APi endpoint ->",err)});  
})
.catch((err) => console.log("Could not retrive a token ->", err))
    });

//Call API Call
async function changeChannel(url = "", data = {}, token) {
    // Default options are marked with *
        const response = await fetch(url, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "api_key": token
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
            });
        return response.json(); // parses JSON response into native JavaScript objects
    }


// Get Auth Token:
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

 // getAuth(apiURL, cred)
    // .then((res) => {
    //     console.log(res.token); // JSON data parsed by `data.json()` call
    // });



//   postData("https://example.com/answer", { answer: 42 })
//   .then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });