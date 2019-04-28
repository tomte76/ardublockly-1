/*
@metadata
author": tomte76 dt@admindu.de
lastupdated": 2019
for more information: www.admindu.de
*/

'use strict';

goog.provide('Blockly.Arduino.mcubase');

goog.require('Blockly.Arduino');

function makeid(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


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

Blockly.Arduino.mcubase_sensor_temp_hum = function(){
  var dht_type = this.getFieldValue('TYPE');
  var sensor_pin = this.getFieldValue('PIN');
  var sensor_mode = this.getFieldValue('MODE');
  Blockly.Arduino.includes_['library_AdafruitDHT'] = '#include "DHT.h"';
  Blockly.Arduino.userFunctions_['define_dht'] = 'DHT dht('+sensor_pin+','+dht_type+');';
  Blockly.Arduino.setups_['mcubase_sensor_temp_hum'] = 'dht.begin();';
  var code = 'dht.'+sensor_mode+'()';
  return [code ,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mcubase_sensor_pressure = function() {
  var dropdown_name = this.getFieldValue('NAME');
  var referencePressure = this.getFieldValue('referencePressure')*100;
  Blockly.Arduino.includes_['library_AdafruitBMP180'] = '#include <Adafruit_BMP085.h>';
  Blockly.Arduino.userFunctions_['define_pressure'] = 'Adafruit_BMP085 bmp;';
  Blockly.Arduino.setups_['mcubase_bmp_sensor'] = 'bmp.begin();';
  if (dropdown_name == 'Pressure' || dropdown_name == 'Temperature'){
    var code ='bmp.read' + dropdown_name + '()';
  } else if (dropdown_name == 'Altitude') {
    var code = 'bmp.readAltitude(' + referencePressure + ')';
  }
  return [code ,Blockly.Arduino.ORDER_ATOMIC];
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
  var dropdown_count = this.getFieldValue('COUNT');
  var pos = Blockly.Arduino.valueToCode(this, 'POS', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var red = Blockly.Arduino.valueToCode(this, 'RED', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var green = Blockly.Arduino.valueToCode(this, 'GREEN', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var blue = Blockly.Arduino.valueToCode(this, 'BLUE', Blockly.Arduino.ORDER_ATOMIC) || '0'
  Blockly.Arduino.definitions_['define_rgb_led'+dropdown_pin] = '#include <Adafruit_NeoPixel.h>\nAdafruit_NeoPixel rgb_led_'+ dropdown_pin +' = Adafruit_NeoPixel('+ dropdown_count +','+ dropdown_pin +',NEO_GRB + NEO_KHZ800);\n';
  Blockly.Arduino.setups_['setup_rgb_led'+dropdown_pin] = 'rgb_led_'+ dropdown_pin+ '.begin();';
  var code = 'rgb_led_'+ dropdown_pin +'.setPixelColor('+ pos +',rgb_led_'+ dropdown_pin +'.Color('+ red +',' + green +',' + blue +'));\n';
  code += 'rgb_led_'+ dropdown_pin +'.show();\n';
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

/*adapted senseBox Display Blocks. Removed SPI, remove sensblock I2C controls
  cheap china displays do not have reset pin, therefore Removed
  using new SSD1306 constructor to define display size
  changed i2c address to 0x3C matching the china displays                     */

Blockly.Arduino.mcubase_display_beginDisplay = function() {
  Blockly.Arduino.includes_['library_wire'] = '#include <Wire.h>';
  Blockly.Arduino.includes_['library_AdafruitGFX'] = '#include <Adafruit_GFX.h>';
  Blockly.Arduino.includes_['library_AdafruitSSD1306'] = '#include <Adafruit_SSD1306.h>';
  Blockly.Arduino.userFunctions_['define_display'] = '#define OLED_RESET -1\nAdafruit_SSD1306 display(128, 64, &Wire, OLED_RESET);';
  Blockly.Arduino.setups_['mcubase_display_begin'] = 'delay(2000);\ndisplay.begin(SSD1306_SWITCHCAPVCC, 0x3C);\ndisplay.display();\ndelay(100);\ndisplay.clearDisplay();';
  var code = '';
  return code;
};

Blockly.Arduino.mcubase_display_clearDisplay = function() {
  var code = 'display.clearDisplay();\n';
  return code;
};

Blockly.Arduino.mcubase_display_printDisplay = function() {
  var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var printDisplay = Blockly.Arduino.valueToCode(this, 'printDisplay', Blockly.Arduino.ORDER_ATOMIC) || '"Keine Eingabe"';
  var size = Blockly.Arduino.valueToCode(this, 'SIZE', Blockly.Arduino.ORDER_ATOMIC) || '1'
  var color = this.getFieldValue('COLOR');
  var code = 'display.setCursor('+x+','+y+');\n';
  code += 'display.setTextSize('+size+');\n';
  code += 'display.setTextColor('+color+');\n';
  code += 'display.println('+printDisplay+');\n';
  return code;
};

Blockly.Arduino.mcubase_display_show = function(block) {
  var show = Blockly.Arduino.statementToCode(block, 'SHOW');
  var code = '';
  code += show;
  code += 'display.display();\n';
  return code;
};

Blockly.Arduino.mcubase_display_plotDisplay = function() {
  var YLabel = Blockly.Arduino.valueToCode(this, 'YLabel', Blockly.Arduino.ORDER_ATOMIC) || 'Y'
  var XLabel = Blockly.Arduino.valueToCode(this, 'XLabel', Blockly.Arduino.ORDER_ATOMIC) || 'X'
  var XRange1 = Blockly.Arduino.valueToCode(this, 'XRange1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var XRange2 = Blockly.Arduino.valueToCode(this, 'XRange2', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var YRange1 = Blockly.Arduino.valueToCode(this, 'YRange1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var YRange2 = Blockly.Arduino.valueToCode(this, 'YRange2', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var XTick = Blockly.Arduino.valueToCode(this, 'XTick', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var YTick = Blockly.Arduino.valueToCode(this, 'YTick', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var TimeFrame = Blockly.Arduino.valueToCode(this, 'TimeFrame', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var plotDisplay = Blockly.Arduino.valueToCode(this, 'plotDisplay', Blockly.Arduino.ORDER_ATOMIC) || '"Keine Eingabe"';
  Blockly.Arduino.includes_['library_plot'] = '#include <Plot.h>';
  //Blockly.Arduino.includes_['library_senseBoxIO'] = '#include <senseBoxIO.h>';
  Blockly.Arduino.userFunctions_['define_plot_class'] = 'Plot DataPlot(&display);\n';
  Blockly.Arduino.variables_['define_plot_class'] = 'const double TIMEFRAME = '+TimeFrame+';\n';
  Blockly.Arduino.setups_['sensebox_plot_setup'] = 'DataPlot.setXLabel('+XLabel+');\nDataPlot.setYLabel('+YLabel+');\nDataPlot.setXRange('+ XRange1+ ',' +XRange2+');\nDataPlot.setYRange('+ YRange1+ ','+YRange2+');\nDataPlot.setXTick('+XTick+');\nDataPlot.setYTick('+YTick+');\nDataPlot.setXPrecision(0);\nDataPlot.setYPrecision(0);\n';
  var code = 'DataPlot.clear();'
  code += 'double starttime = millis();\ndouble t = 0;\nwhile (t <= TIMEFRAME) {\nt = (millis() - starttime) / 1000.0;\nfloat value = '+plotDisplay+';\n';
  code += 'DataPlot.addDataPoint(t,value);\n}\n';
  return code;
};

/*adapted senseBox Display Blocks end*/

Blockly.Arduino.mcubase_interval_timer = function(block) {
  var var_id = makeid(5);
  var interval = Blockly.Arduino.valueToCode(this, 'INTER', Blockly.Arduino.ORDER_ATOMIC) || '0'
  Blockly.Arduino.variables_['define_interval_variables_'+var_id+''] = 'long time_start_'+var_id+' = 0;\nlong time_actual_'+var_id+' = 0;';
  var branch = Blockly.Arduino.statementToCode(block, 'DO');
  var code = 'long interval_'+var_id+' = '+interval+';\n';
  code += 'time_start_'+var_id+' = millis();\n';
  code += 'if (time_start_'+var_id+' > time_actual_'+var_id+' + interval_'+var_id+') {\n  time_actual_'+var_id+' = millis();\n';
  code += branch;
  code += '}\n';
  return code;
};
