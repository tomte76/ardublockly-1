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
    this.setHelpUrl('https://www.mcubase.de');
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
    this.setHelpUrl('https://www.mcubase.de');
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
    this.setHelpUrl('https://www.mcubase.de');
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
    this.setHelpUrl('https://www.mcubase.de');
  }
};

Blockly.Blocks['mcubase_rgb_led'] = {
  init: function() {
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.appendDummyInput()
    .appendField(Blockly.Msg.senseBox_rgb_led)
    .appendField("PIN:")
    .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "PIN")
    this.appendValueInput("RED", 'Number')
    .appendField(Blockly.Msg.COLOUR_RGB_RED);//Blockly.Msg.senseBox_basic_red
    this.appendValueInput("GREEN", 'Number')
    .appendField(Blockly.Msg.COLOUR_RGB_GREEN);//Blockly.Msg.senseBox_basic_green
    this.appendValueInput("BLUE", 'Number')
    .appendField(Blockly.Msg.COLOUR_RGB_BLUE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.senseBox_rgb_led_tip);
    this.setHelpUrl('https://www.mcubase.de');
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
    this.setHelpUrl('https://www.mcubase.de');
  }
};

/*senseBox Display Blocks*/

Blockly.Blocks['mcubase_display_beginDisplay'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(Blockly.Msg.mcubase_display_beginDisplay)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.mcubase.HUE);
    this.setTooltip(Blockly.Msg.mcubase_display_beginDisplay_tip);
    this.setHelpUrl('https://www.mcubase.de');
  }
};

Blockly.Blocks['mcubase_display_clearDisplay'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(Blockly.Msg.mcubase_display_clearDisplay)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.mcubase.HUE);
    this.setTooltip(Blockly.Msg.mcubase_display_clearDisplay_tip);
    this.setHelpUrl('https://www.mcubase.de');
  }
};

Blockly.Blocks['mcubase_display_printDisplay'] = {
  init: function(block) {
    this.setColour(Blockly.Blocks.mcubase.HUE);
    this.appendDummyInput()
    .appendField(Blockly.Msg.mcubase_display_printDisplay)
    .appendField(Blockly.Msg.mcubase_display_color)
    .appendField(new Blockly.FieldDropdown([[Blockly.Msg.mcubase_display_white, "WHITE,BLACK"], [Blockly.Msg.mcubase_display_black, "BLACK,WHITE"]]), "COLOR");
    this.appendValueInput("SIZE", 'Number')
    .appendField(Blockly.Msg.mcubase_display_setSize);
    this.appendValueInput("X", 'Number')
    .appendField(Blockly.Msg.mcubase_display_printDisplay_x);
    this.appendValueInput("Y", 'Number')
    .appendField(Blockly.Msg.mcubase_display_printDisplay_y);
    this.appendValueInput('printDisplay')
    .appendField(Blockly.Msg.mcubase_display_printDisplay_value)
    .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.mcubase_display_printDisplay_tip);
    this.setHelpUrl('https://www.mcubase.de');
  },
  /**
  * Called whenever anything on the workspace changes.
  * Add warning if block is not nested inside a the correct loop.
  * @param {!Blockly.Events.Abstract} e Change event.
  * @this Blockly.Block
  */
  onchange: function(e) {
    var legal = false;
    // Is the block nested in a loop?
    var block = this;
    do {
      if (this.LOOP_TYPES.indexOf(block.type) != -1) {
        legal = true;
        break;
      }
      block = block.getSurroundParent();
    } while (block);
    if (legal) {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING);
    }
  },
  LOOP_TYPES: ['mcubase_display_show'],
};


Blockly.Blocks['mcubase_display_plotDisplay'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mcubase.HUE);
    this.appendDummyInput()
    .appendField(Blockly.Msg.mcubase_display_plotDisplay)
    this.appendValueInput("YLabel", 'Text')
    .appendField(Blockly.Msg.mcubase_display_plotYLabel);
    this.appendValueInput("XLabel", 'Text')
    .appendField(Blockly.Msg.mcubase_display_plotXLabel);
    this.appendValueInput("XRange1", 'Number')
    .appendField(Blockly.Msg.mcubase_display_plotXRange1);
    this.appendValueInput("XRange2", 'Number')
    .appendField(Blockly.Msg.mcubase_display_plotXRange2)
    this.appendValueInput("YRange1", 'Number')
    .appendField(Blockly.Msg.mcubase_display_plotYRange1);
    this.appendValueInput("YRange2", 'Number')
    .appendField(Blockly.Msg.mcubase_display_plotYRange2);
    this.setInputsInline(false);
    this.appendValueInput("XTick", 'Number')
    .appendField(Blockly.Msg.mcubase_display_plotXTick);
    this.appendValueInput("YTick", 'Number')
    .appendField(Blockly.Msg.mcubase_display_plotYTick);
    this.appendValueInput("TimeFrame", 'Number')
    .appendField(Blockly.Msg.mcubase_display_plotTimeFrame);
    this.appendValueInput('plotDisplay')
    .appendField(Blockly.Msg.mcubase_display_printDisplay_value)
    .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.mcubase_display_printDisplay_tip);
    this.setHelpUrl('https://www.mcubase.de');
  },
  /**
  * Called whenever anything on the workspace changes.
  * Add warning if block is not nested inside a the correct loop.
  * @param {!Blockly.Events.Abstract} e Change event.
  * @this Blockly.Block
  */
  onchange: function(e) {
    var legal = false;
    // Is the block nested in a loop?
    var block = this;
    do {
      if (this.LOOP_TYPES.indexOf(block.type) != -1) {
        legal = true;
        break;
      }
      block = block.getSurroundParent();
    } while (block);
    if (legal) {
      this.setWarningText(null);
    } else {
      this.setWarningText(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING);
    }
  },
  LOOP_TYPES: ['mcubase_display_show'],
};

Blockly.Blocks['mcubase_display_show'] = {
  init: function() {

    this.setColour(Blockly.Blocks.mcubase.HUE);
    this.appendDummyInput()
    .appendField(Blockly.Msg.mcubase_display_show);
    this.appendStatementInput('SHOW');
    this.setTooltip(Blockly.Msg.mcubase_display_show_tip);
    this.setHelpUrl('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

/*senseBox Display Blocks end*/

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
