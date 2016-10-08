#!/usr/bin/env node
var ev3 = require('./node_modules/ev3source/ev3.js');
var source = require('./node_modules/ev3source/source.js');

ev3.waitForButtonPress();

var motorL = ev3.motorB();
var motorR = ev3.motorD();
var colorSensor = ev3.colorSensor();
var ultrasonicSensor = ev3.ultrasonicSensor();
var touchSensorL = ev3.touchSensor1();
var touchSensorR = ev3.touchSensor4();
// var gyroSensor = ev3.gyroSensor();

if (ev3.connected(motorL)) {
    source.alert("CONNECTED motorL");
} else {
    source.alert("No connection to motorL");
}

if (ev3.connected(motorR)) {
    source.alert("CONNECTED motorR");
} else {
    source.alert("No connection to motorR");
}

if (ev3.connected(colorSensor)) {
    source.alert("CONNECTED colorSensor");
} else {
    source.alert("No connection to colorSensor");
}

if (ev3.connected(ultrasonicSensor)) {
    source.alert("CONNECTED ultrasonicSensor");
} else {
    source.alert("No connection to ultrasonicSensor");
}

if (ev3.connected(touchSensorL)) {
    source.alert("CONNECTED touchSensorL");
} else {
    source.alert("No connection to touchSensorL");
}

if (ev3.connected(touchSensorR)) {
    source.alert("CONNECTED touchSensorR");
} else {
    source.alert("No connection to touchSensorR");
}


function shouldAttack() {
	return ev3.ultrasonicSensorDistance(ultrasonicSensor) < 40;
}

function quarter_turn_left() {
	ev3.runForDistance(motorA, 200, 350);
	ev3.runForDistance(motorB, -200, 350);
}

function quarter_turn_right() {
	ev3.runForDistance(motorA, -200, 350);
	ev3.runForDistance(motorB, 200, 350);
}

function turn_left180() {
	ev3.runForDistance(motorA, 400, 350);
	ev3.runForDistance(motorB, -400, 350);
}

function turn_right180() {
	ev3.runForDistance(motorA, -400, 350);
	ev3.runForDistance(motorB, 400, 350);
}

var behind_enemey = (0, 0);

function detect_behind_enemy() {
	var left = ev3.touchSensorPressed(touchSensor1);
	var right = ev3.touchSensorPressed(touchSensor2);
	
	set_head(behind_enemy, left);
	set_tail(behind_enemy, right);
}

runForever(detect_behind_enemy);

function detect_circle() {
	var x = reflectedLightIntensity(colorSensor);
}
