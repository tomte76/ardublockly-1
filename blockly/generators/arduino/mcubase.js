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
  var dropdown_max_dist = this.getFieldValue('max_dist');
  var port = this.getFieldValue('port');
  Blockly.Arduino.includes_['library_NewPing'] = '#include "NewPing.h"';
  Blockly.Arduino.userFunctions_['var_ultrasonic'+port] = 'NewPing sonar'+port+'('+dropdown_pin_RX+','+dropdown_pin_TX+','+dropdown_max_dist+');';
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

/* Display Blocks
Blockly.Arduino.mcubase_display_beginDisplay = function() {
    Blockly.Arduino.includes_['library_spi'] = '#include <SPI.h>';
    Blockly.Arduino.includes_['library_wire'] = '#include <Wire.h>';
    Blockly.Arduino.includes_['library_AdafruitGFX'] = '#include <Adafruit_GFX.h>';
    Blockly.Arduino.includes_['library_AdafruitSSD1306'] = '#include <Adafruit_SSD1306.h>';
    Blockly.Arduino.includes_['library_senseBoxIO'] = '#include <senseBoxIO.h>';
    Blockly.Arduino.userFunctions_['define_display'] = '#define OLED_RESET 4\nAdafruit_SSD1306 display(OLED_RESET);';
    Blockly.Arduino.setups_['mcubase_display_begin'] = 'senseBoxIO.powerI2C(true);\ndelay(2000);\ndisplay.begin(SSD1306_SWITCHCAPVCC, 0x3D);\ndisplay.display();\ndelay(100);\ndisplay.clearDisplay();';
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
      }; */


/*    Blockly.Arduino.mcubase_display_plotDisplay = function() {
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
        Blockly.Arduino.includes_['library_senseBoxIO'] = '#include <senseBoxIO.h>';
        Blockly.Arduino.userFunctions_['define_plot_class'] = 'Plot DataPlot(&display);\n';
        Blockly.Arduino.variables_['define_plot_class'] = 'const double TIMEFRAME = '+TimeFrame+';\n';
        Blockly.Arduino.setups_['sensebox_plot_setup'] = 'DataPlot.setXLabel('+XLabel+');\nDataPlot.setYLabel('+YLabel+');\nDataPlot.setXRange('+ XRange1+ ',' +XRange2+');\nDataPlot.setYRange('+ YRange1+ ','+YRange2+');\nDataPlot.setXTick('+XTick+');\nDataPlot.setYTick('+YTick+');\nDataPlot.setXPrecision(0);\nDataPlot.setYPrecision(0);\n';
        var code = 'DataPlot.clear();'
        code += 'double starttime = millis();\ndouble t = 0;\nwhile (t <= TIMEFRAME) {\nt = (millis() - starttime) / 1000.0;\nfloat value = '+plotDisplay+';\n';
        code += 'DataPlot.addDataPoint(t,value);\n}\n';
        return code;
      }; */

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
