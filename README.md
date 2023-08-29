
# HTML / JS -> MagicINFO API
This is a simple project to use a Browser to control content on other screens.
A screen shows a webpage with some button. Clicking one of the button calls an API Endpoint to change the Channel on other screen(s)

The content is played from the internal storage of the screen, no need to run any webserver.

> **WARNING**
Be aware that in this code, the credentials are visible to everyone who has access to the browser running the page!
Provided as is - Please audit the code before using it.  

<img width="985" alt="image" src="https://github.com/TBEMSESG/showroomController/assets/50730110/ec4b9fd7-bbe4-47f0-9028-a3ed89bb99ac">


## Prerequisite:

    - MagicINFO Server (reachable from the screen)
    - Samsung Devices connected to the MagicINFO Server
    - Schedule with 2(+) channels to switch 

## How to Start
clone this repo to your local workspace

    git clone https://github.com/TBEMSESG/showroomController.git

## How to set up: 
### Index.html
Add or remove Items (buttons)

### Style.css
Change images (to be placed in /img folder)

### listeners.js
The following Variables have to be defined: 

    const cred = {};            //add your MagicINFO credentials here in format {username:"cc", password:"xx"}
    const apiURL = "https://<YourSERVER>/MagicInfo/auth";        //add your MI Api url here   
    const apiURLChannelChange = "https://<YourSERVER>/MagicInfo/restapi/v2.0/rms/devices/quick-control"

    //devices and settings
    
    const devicesId = []; // Add device Id's in form ['deviceId1', 'deviceId2', ....]
    const channelQSR = 3;
    const channelFashion = 2;
    const channelCorporate = 1;

### Packaging
- Once ready, package the content of the schowroomController folder (only the content, incl. /img folder) to a .zip file.
- Upload the zip as web content to MagicINFO
- Publish to the screen
