// Simple web server that says hello and local IP address of the server
var express = require('express');
var app = express();
var os = require('os');

// Finds IPv4 interface IP for specificed interface name
// the second private interface name for the VM is 'eth0', the first used as NAT interface
const interfaces = os.networkInterfaces();
const interface_name = 'eth0'; 
const interface = interfaces[interface_name];
const interface_ip = interface ? interface.find(int => int.family == 'IPv4').address : 'Unknown IP';

// Server port
const port = 80;

// Routes
app.get('/', async (req, res) => {    
    // Custom header for test cases
    res.header('x-served-from', interface_ip);

    // Response with server IP 
    res.send(`Hello AL! I am ${interface_ip}`);

});

// Start the app
app.listen(port);