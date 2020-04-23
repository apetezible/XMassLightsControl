##Abstract
I’ll be controlling an Electric Installation over the Internet by connecting a Relay Module to an Arduino Uno. Using the Standard Firmata it is possible to control an Arduino by applying electronic inputs in it, the Source of those will be my Laptop running a Node.js Server using the Johnny-Five Library. For connecting the environment to the Internet it is necessary to use a Library and open your router’s ports, on this experiment I’ll use the Express Library.

##Introduction
When abled to make a Node.js server for controlling an Arduino through Standard Fimata, and also setting HTTP servers using Express. The idea of controlling an Arduino Uno over the internet came to my mind. But it wasn’t until I needed to control remotely four electric Installations in my home that I decided to make this project.

##Methods
I needed to control four Electric Installations on my home over the internet with my cellphone. I call an Electric Installation a device which will turn on whenever there is electricity and off when there is no. Those Electric Installations are a Radio, a Laser device, a Lightbulb and the Christmas Lights. For controlling the electricity passing in a with a digital input there is a Module called a Relay, for this project I used a 250VAC / 4 Channel Relay Module (because I have to Control 4 Electric Installations AC). For this example, I set the configuration whereas a normal state there is no electricity.

I used the Arduino Genuino Uno board configurated with the Standard Firmata which can be found ready to upload to the Arduino Board via USB in the Arduino IDE. This script is set to use the digital ports 5, 4, 3, 2, so I connected each channel from the Relay Module and the 5V output from the Arduino to the Relay Module VCC. 

It is required to set a Server for receiving instructions from the user and control the Arduino Board. For this, I connected my laptop to the Internet via WiFi and to the Arduino board via USB. On the Laptop I’ve installed Node.js for setting the environment, on it I’ve installed the Johnny-Five, Express and Firmata libraries with all their dependencies.

I’ve prepared a set of HTML invented for interaction in the phone. When you tap in one of the Elements on the webpage, the GET method is used by the device to connect to the Server. When the GET method is used, a new configuration is sent to the Arduino Board. 

If you have a Router capable of port-forwarding I recommend you to set it to open the port 8080 for your laptop IP. You probably have to communicate to your Internet Service Provider to open that Port if you were able to open your port in your Router but there is no access to your PC from the Internet (run your Server with Node.js and use https://www.canyouseeme.org/ with the port 8080 to check if there is a successful access to your Server). Otherwise install hamachi, a VPN, on your Laptop and configure it on your remote device. Run your Node.js server with app.js ().  

On your device, use a browser to open a webpage, introduce your public IP (in the successful port-forwarding) or your Hamachi IP then “:8080”. You are now controlling your Electric Installations Remotely.
