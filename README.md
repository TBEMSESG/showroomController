## How to set up: 
- Index.html
    Add or remove Items

## Style.css
    Change images (to be placed in /img folder)

## listeners.js
The following Variables need to be defined: 

const cred = {};            //add your MagicINFO credentials here in format {username:"cc", password:"xx"}
const apiURL = "https://<YourSERVER>/MagicInfo/auth";        //add your MI Api url here   
const apiURLChannelChange = "https://<YourSERVER>/MagicInfo/restapi/v2.0/rms/devices/quick-control"


//devices and settings
const devicesId = []; // Add device Id's in form ['deviceId1', 'deviceId2', ....]

const channelQSR = 3;
const channelFashion = 2;
const channelCorporate = 1;