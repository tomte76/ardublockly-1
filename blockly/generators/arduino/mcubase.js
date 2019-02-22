/*
@metadata
		author": tomte76 dt@admindu.de
		lastupdated": 2019
		for more information: www.admindu.de
*/

'use strict';

goog.provide('Blockly.Arduino.mcubase');

goog.require('Blockly.Arduino');


/*
----------------------------------Sensoren--------------------------------------------------
*/

Blockly.Arduino.mcubase_sensor_ultrasonic_ranger = function() {
    var dropdown_pin_RX = this.getFieldValue('ultrasonic_trigger');
    var dropdown_pin_TX = this.getFieldValue('ultrasonic_echo');
    var port = this.getFieldValue('port');
    Blockly.Arduino.includes_['library_NewPing'] = '#include "NewPing.h"';
    Blockly.Arduino.userFunctions_['var_ultrasonic'+port] = 'NewPing sonar'+port+'('+dropdown_pin_RX+','+dropdown_pin_TX+',200);';
    var code;
    code = 'sonar'+port+'.ping_cm()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mcubase_sensor_sound = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var code = 'analogRead('+dropdown_pin+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
----------------------------------Basics--------------------------------------------------
*/

Blockly.Arduino.mcubase_led = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_stat = this.getFieldValue('STAT');
    Blockly.Arduino.setups_['setup_green_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
    var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
    return code;
};

Blockly.Arduino.mcubase_button = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    Blockly.Arduino.setups_['setup_button_'+ dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'digitalRead(' + dropdown_pin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mcubase_piezo = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_stat = this.getFieldValue('STAT');
    Blockly.Arduino.setups_['setup_piezo_buzzer_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
    var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
    return code;
};

Blockly.Arduino.mcubase_poti = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = 'analogRead('+dropdown_pin+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mcubase_foto = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = 'analogRead('+dropdown_pin+')';
    return [code ,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mcubase_rgb_led = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var red = Blockly.Arduino.valueToCode(this, 'RED', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var green = Blockly.Arduino.valueToCode(this, 'GREEN', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var blue = Blockly.Arduino.valueToCode(this, 'BLUE', Blockly.Arduino.ORDER_ATOMIC) || '0'
  Blockly.Arduino.definitions_['define_rgb_led'+dropdown_pin] = '#include <Adafruit_NeoPixel.h>\n Adafruit_NeoPixel rgb_led_'+ dropdown_pin +' = Adafruit_NeoPixel(1,'+ dropdown_pin +',NEO_GRB + NEO_KHZ800);\n';
  Blockly.Arduino.setups_['setup_rgb_led'+dropdown_pin] = 'rgb_led_'+ dropdown_pin+ '.begin();';
  var code = 'rgb_led_'+ dropdown_pin +'.setPixelColor(0,rgb_led_'+ dropdown_pin +'.Color('+ green +',' + red +',' + blue +'));\n';
  code += 'rgb_led_'+ dropdown_pin +'.show();';
  return code;
};

/*
----------------------------------Ausgabe--------------------------------------------------
*/

Blockly.Arduino.mcubase_serial_print = function() {
    Blockly.Arduino.setups_['mcubase_serial_print'] = '//Setup Serial Print\n  Serial.begin(9600);\n';
    var linebreak =  this.getFieldValue('LINEBREAK');
    if(linebreak =="TRUE"){
        linebreak = "ln";
    }else{
        linebreak = "";
    }
    var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '"Keine Eingabe"';
    var code ='Serial.print'+ linebreak +'(' + text + ');\n';
    return code;
};

Blockly.Arduino.mcubase_interval_timer = function(block) {
    var interval = this.getFieldValue('interval');
    Blockly.Arduino.variables_['define_interval_variables'] = 'const long interval = '+interval+';\nlong time_start = 0;\nlong time_actual = 0;';
    var branch = Blockly.Arduino.statementToCode(block, 'DO');
    var code = 'time_start = millis();\n';
    code += 'if (time_start > time_actual + interval) {\n  time_actual = millis();\n'
    code += branch;
    code += '}\n'
    return code;
};
