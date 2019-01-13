/*
@metadata
    author": tomte76 dt@admindu.de
    lastupdated": 2019
    for more information: www.admindu.de
*/  

'use strict';

goog.provide('Blockly.Blocks.mcubase');

goog.require('Blockly.Blocks');

var wifiDepend = null;

/**
 * Common HSV hue for all blocks in this category.
 * "senseBox green"
 */

Blockly.Blocks.mcubase.HUE = 120;

/*
----------------------------------Sensoren--------------------------------------------------
*/

Blockly.Blocks['mcubase_sensor_ultrasonic_ranger'] = {
  init: function() {

    var dropdownOptions = [[Blockly.Msg.mcubase_ultrasonic_port_A, 'A'],
    [Blockly.Msg.mcubase_ultrasonic_port_B, 'B'],[Blockly.Msg.mcubase_ultrasonic_port_C, 'C']];
    var dropdown = new Blockly.FieldDropdown(dropdownOptions, function(option) {
    var input = (option == 'A') || (option ==  'B') || (option == 'C');
    this.sourceBlock_.updateShape_(input);
    });

    this.setColour(Blockly.Blocks.mcubase.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.mcubase_ultrasonic)
        .appendField(dropdown, "port");
    this.appendDummyInput('TrigEcho')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.mcubase_ultrasonic_trigger)
        .appendField(new Blockly.FieldDropdown(
        Blockly.Arduino.Boards.selected.digitalPins), 'ultrasonic_trigger')
        .appendField(Blockly.Msg.mcubase_ultrasonic_echo)
        .appendField(new Blockly.FieldDropdown(
          Blockly.Arduino.Boards.selected.digitalPins), 'ultrasonic_echo');
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setTooltip(Blockly.Msg.mcubase_ultrasonic_tip);
    this.setHelpUrl('https://google.com');
  },
  /**
   * Parse XML to restore the number of pins available.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   
  domToMutation: function(xmlElement) {
    var input = (xmlElement.getAttribute('port'));
    
  },*
  /**
   * Create XML to represent number of pins selection.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var input = this.getFieldValue('port');
    this.updateShape_(input);
    container.setAttribute("port", input);
    return container;
  },
  /**
   * Modify this block to have the correct number of pins available.
   * @param {boolean}
   * @private
   * @this Blockly.Block
   */
  updateShape_: function() {
    var input = this.getFieldValue('port');
    switch (input){
      case 'A':
      this.setFieldValue('1','ultrasonic_trigger');  
      this.setFieldValue('2','ultrasonic_echo');
      break;
      case 'B':
      this.setFieldValue('3','ultrasonic_trigger');  
      this.setFieldValue('4','ultrasonic_echo');
      break;
      case 'C':
      this.setFieldValue('5','ultrasonic_trigger');  
      this.setFieldValue('6','ultrasonic_echo');
      break;
    }
   },

  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['mcubase_sensor_sound'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mcubase.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.mcubase_sound)
        .appendField("PIN:")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "PIN")
        this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setHelpUrl(Blockly.Msg.mcubase_sound_tip);
    this.setTooltip('Dieser Sensor mist den Geräuschpegel.');
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
};

/*
----------------------------------Basics--------------------------------------------------
*/

Blockly.Blocks['mcubase_poti'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mcubase.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.mcubase_poti)
        .appendField("PIN:")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "PIN")
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setTooltip(Blockly.Msg.mcubase_poti_tip);
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
};

Blockly.Blocks['mcubase_foto'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mcubase.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.mcubase_foto)
        .appendField("PIN:")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "PIN")
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setTooltip(Blockly.Msg.mcubase_foto_tip);
    this.setHelpUrl('https://sensebox.de/books');
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
};

Blockly.Blocks['mcubase_led'] = {
    init: function() {
    this.setColour(Blockly.Blocks.mcubase.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.mcubase_led)
        .appendField("PIN:")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "PIN")
        .appendField(Blockly.Msg.mcubase_basic_state)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.mcubase_on, "HIGH"], [Blockly.Msg.mcubase_off, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.mcubase_led_tip);
    this.setHelpUrl('https://sensebox.de/books');
  }
};

Blockly.Blocks['mcubase_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.mcubase_button)
        .appendField("PIN:")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "PIN");
    this.setOutput(true, Blockly.Types.BOOLEAN.output);
    this.setColour(Blockly.Blocks.mcubase.HUE);
    this.setTooltip(Blockly.Msg.mcubase_button_tip);
    this.setHelpUrl('https://sensebox.de/books');
  },
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  },
};

Blockly.Blocks['mcubase_piezo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.mcubase_piezo)
        .appendField("PIN:")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "PIN")
        .appendField(Blockly.Msg.mcubase_basic_state)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.mcubase_on, "HIGH"], [Blockly.Msg.mcubase_off, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.mcubase.HUE);
    this.setTooltip(Blockly.Msg.mcubase_piezo_tip);
    this.setHelpUrl('https://sensebox.de/books');
  }
};

/*
----------------------------------Ausgabe--------------------------------------------------
*/

Blockly.Blocks['mcubase_serial_print'] = {
  init: function() {
    this.appendValueInput("TEXT")
       .setCheck(null)
       .appendField(Blockly.Msg.mcubase_output_serialprint);
    this.appendDummyInput("CheckboxText")
      .appendField(Blockly.Msg.mcubase_output_linebreak)
       .appendField(new Blockly.FieldCheckbox("TRUE"), "LINEBREAK");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.mcubase.HUE);
    this.setTooltip(Blockly.Msg.mcubase_serial_tip);
    this.setHelpUrl('https://sensebox.de/books');
  }
};

Blockly.Blocks['mcubase_interval_timer'] = {
  init: function() {
    this.setTooltip(Blockly.Msg.mcubase_interval_timer_tip);
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.mcubase.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.mcubase_interval_timer);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_LEFT)
      .appendField(new Blockly.FieldTextInput("1000"), "interval")
      .appendField(Blockly.Msg.mcubase_interval);
    this.appendStatementInput('DO')
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
