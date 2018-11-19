/*
   DIGF 2004 Atelier 1
   Kate Hartman
   Experiment 3 - Study 4
   Arduino to P5.js - sending value for (3) switch3s
   Based on based on the Serial Input to P5.js Lab on the ITP Physical Computing site: 
   https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/
   */

  var serial; // variable to hold an instance of the serialport library
  var portName = 'COM3';  // fill in your serial
  var inData;                             // for incoming serial
  var EString;
  var AString;
  var DString;
  var GString;
  var BString;
  var eString;
  var fret0;
  var fret1;
  var fret2;
  var fret3;
  var fret4;
  var fret5;
  let E_String = false;
  let A_String = false;
  let D_String = false;
  let G_String = false;
  let B_String = false;
  let e_String = false;
  let Fret0 = false;
  let Fret1 = false;
  let Fret2 = false;
  let Fret3 = false;
  let Fret4 = false;
  let Fret5 = false;
  
  function preload() {

    //Guitar Stings

    //1st String
    E0 = loadSound('sounds/E0.wav');
    E1 = loadSound('sounds/E1.wav');
    E2 = loadSound('sounds/E2.wav');
    E3 = loadSound('sounds/E3.wav');
    E4 = loadSound('sounds/E4.wav');
    E5 = loadSound('sounds/E5.wav');

    //2nd String
    A0 = loadSound('sounds/A0.wav');
    A1 = loadSound('sounds/A1.wav');
    A2 = loadSound('sounds/A2.wav');
    A3 = loadSound('sounds/A3.wav');
    A4 = loadSound('sounds/A4.wav');
    A5 = loadSound('sounds/A5.wav');    

    //3rd String
    D0 = loadSound('sounds/D0.wav');
    D1 = loadSound('sounds/D1.wav');
    D2 = loadSound('sounds/D2.wav');
    D3 = loadSound('sounds/D3.wav');
    D4 = loadSound('sounds/D4.wav');
    D5 = loadSound('sounds/D5.wav');

    //4th String
    G0 = loadSound('sounds/G0.wav');
    G1 = loadSound('sounds/G1.wav');
    G2 = loadSound('sounds/G2.wav');
    G3 = loadSound('sounds/G3.wav');
    G4 = loadSound('sounds/G4.wav');
    G5 = loadSound('sounds/G5.wav');
    
    //5th String
    B0 = loadSound('sounds/B0.wav');
    B1 = loadSound('sounds/B1.wav');
    B2 = loadSound('sounds/B2.wav');
    B3 = loadSound('sounds/B3.wav');
    B4 = loadSound('sounds/B4.wav');
    B5 = loadSound('sounds/B5.wav');
    
    //6th String
    e0 = loadSound('sounds/highe0.wav');
    e1 = loadSound('sounds/highe1.wav');
    e2 = loadSound('sounds/highe2.wav');
    e3 = loadSound('sounds/highe3.wav');
    e4 = loadSound('sounds/highe4.wav');
    e5 = loadSound('sounds/highe5.wav');    
  }

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(188);


  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing
 
 serial.list(); // list the serial ports
 serial.open(portName);              // open a serial port
}

function draw() {
  background(0);
  noStroke()

//E String Playing

  if(EString==0){
      
    if(!E_String) {
      
      if (fret0==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        E0.play();
        E_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret1==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        E1.play();
        E_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret2==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        E2.play();
        E_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret3==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        E3.play();
        E_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret4==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        E4.play();
        E_String = true;
        ellipse(width/2, height/2, 150, 150);
      }
    } 

  }else{
    fill(255, 255, 255);
    E_String = false;
  }

  // A String Playing

  if(AString==0){
      
    if(!A_String) {
      
      if (fret0==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        A0.play();
        A_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret1==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        A1.play();
        A_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret2==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        A2.play();
        A_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret3==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        A3.play();
        A_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret4==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        A4.play();
        A_String = true;
        ellipse(width/2, height/2, 150, 150);
      }
    } 

  }else{
    fill(255, 255, 255);
    A_String = false;
  }
 
  //D String Playing

  if(DString==0){
      
    if(!D_String) {
      
      if (fret0==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        D0.play();
        D_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret1==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        D1.play();
        D_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret2==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        D2.play();
        D_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret3==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        D3.play();
        D_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret4==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        D4.play();
        D_String = true;
        ellipse(width/2, height/2, 150, 150);
      }
    } 

  }else{
    fill(255, 255, 255);
    D_String = false;
  }

  //G String Playing

  if(GString==0){
      
    if(!G_String) {
      
      if (fret0==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        G0.play();
        G_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret1==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        G1.play();
        G_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret2==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        G2.play();
        G_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret3==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        G3.play();
        G_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret4==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        G4.play();
        G_String = true;
        ellipse(width/2, height/2, 150, 150);
      }
    } 

  }else{
    fill(255, 255, 255);
    G_String = false;
  }

  //B String Playing

  if(BString==0){
      
    if(!B_String) {
      
      if (fret0==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        B0.play();
        B_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret1==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        B1.play();
        B_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret2==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        B2.play();
        B_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret3==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        B3.play();
        B_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret4==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        B4.play();
        B_String = true;
        ellipse(width/2, height/2, 150, 150);
      }
    } 

  }else{
    fill(255, 255, 255);
    B_String = false;
  }

  //e String playing

  if(eString==0){
      
    if(!e_String) {
      
      if (fret0==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        e0.play();
        e_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret1==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        e1.play();
        e_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret2==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        e2.play();
        e_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret3==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        e3.play();
        e_String = true;
        ellipse(width/2, height/2, 150, 150);
      }

      if (fret4==0){
        fill(random(100, 255), random(100, 255), random(100,255)); 
        e4.play();
        e_String = true;
        ellipse(width/2, height/2, 150, 150);
      }
    } 

  }else{
    fill(255, 255, 255);
    e_String = false;
  }
  
   ellipse(width/2, height/2, 100, 100);
}


 
 function serverConnected() {
  console.log('connected to server.');
}
 
function portOpen() {
  console.log('the serial port opened.')
}

function serialEvent() {
  // read a string from the serial port
  // until you get carriage return and newline:
  var inString = serial.readStringUntil('\r\n');
 
  //check to see that there's actually a string there:
  if (inString.length > 0 ) {
    var sensors = split(inString, ',');            // split the string on the commas
    if (sensors.length > 10) {                      // if there are three elements
      EString = sensors[0];  
      AString = sensors[1]; 
      DString = sensors[2];
      GString = sensors[3];  
      BString = sensors[4]; 
      eString = sensors[5]; 
      fret0 = sensors[6];  
      fret1 = sensors[7]; 
      fret2 = sensors[8]; 
      fret3 = sensors[9];  
      fret4 = sensors[10];    
    }
  }
}
 
function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}
 
function portClose() {
  console.log('The serial port closed.');
}


// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 console.log(i + " " + portList[i]);
 }
}
