/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview  Ardublockly specific English strings.
 *
 * After modifying this file, either run "build.py" from the blockly directory,
 * or run (from this directory):
 * ../i18n/js_to_json.py
 * to regenerate json/{en,qqq,synonyms}.json.
 *
 * To convert all of the json files to .js files, run:
 * ../i18n/create_messages.py json/*.json
 */
'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');


/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

/**
 * Each message is preceded with a triple-slash comment that becomes the
 * message descriptor.  The build process extracts these descriptors, adds
 * them to msg/json/qqq_ardublockly.json, and they show up in the translation
 * console.
 * Note the strings have to be surrounded by single quotation marks: ''
 */

/**
 * Ardublockly Types
 */
/// Arduino Types - Character C type char
Blockly.Msg.ARD_TYPE_CHAR = 'Character';
/// Arduino Types - Text C type String
Blockly.Msg.ARD_TYPE_TEXT = 'Text';
/// Arduino Types - Boolean type
Blockly.Msg.ARD_TYPE_BOOL = 'Boolean';
/// Arduino Types - Short number C type char
Blockly.Msg.ARD_TYPE_SHORT = 'Short Number';
/// Arduino Types - Number C type integer
Blockly.Msg.ARD_TYPE_NUMBER = 'Number';
/// Arduino Types - Large number C type long integer
Blockly.Msg.ARD_TYPE_LONG = 'Large Number';
/// Arduino Types - Decimal number C type floating point
Blockly.Msg.ARD_TYPE_DECIMAL = 'Decimal';
/// Arduino Types - Array
Blockly.Msg.ARD_TYPE_ARRAY = 'Array';
/// Arduino Types - Null C type void
Blockly.Msg.ARD_TYPE_NULL = 'Null';
/// Arduino Types - Undefined type
Blockly.Msg.ARD_TYPE_UNDEF = 'Undefined';
/// Arduino Types - Place holder value, indicates block with type not connected
Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = 'ChildBlockMissing';

/// Arduino Blocks
Blockly.Msg.ARD_HIGH = 'HIGH';
Blockly.Msg.ARD_LOW = 'LOW';
Blockly.Msg.ARD_ANALOGREAD = 'read analog pin#';
Blockly.Msg.ARD_ANALOGREAD_TIP = 'Return value between 0 and 1024';
Blockly.Msg.ARD_ANALOGWRITE = 'set analog pin#';
Blockly.Msg.ARD_ANALOGWRITE_TIP = 'Write analog value between 0 and 255 to a specific PWM Port';
Blockly.Msg.ARD_HIGHLOW_TIP = 'Set a pin state logic High or Low.';
Blockly.Msg.ARD_DIGITALREAD = 'read digital pin#';
Blockly.Msg.ARD_DIGITALREAD_TIP = 'Read digital value on a pin: HIGH or LOW';
Blockly.Msg.ARD_DIGITALWRITE = 'set digitial pin#';
Blockly.Msg.ARD_WRITE_TO = 'to';
Blockly.Msg.ARD_DIGITALWRITE_TIP = 'Write digital value HIGH or LOW to a specific Port';
Blockly.Msg.ARD_BUILTIN_LED = 'set built-in LED';
Blockly.Msg.ARD_BUILTIN_LED_TIP = 'Light on or off for the built-in LED of the Arduino';
Blockly.Msg.ARD_DEFINE = 'Define';
Blockly.Msg.ARD_TONE_PIN = 'Tone PIN#';
Blockly.Msg.ARD_TONE_FREQ = 'frequency';
Blockly.Msg.ARD_TONE_PIN_TIP = 'Generate audio tones on a pin';
Blockly.Msg.ARD_NOTONE_PIN = 'No tone PIN#';
Blockly.Msg.ARD_NOTONE_PIN_TIP = 'Stop generating a tone on a pin';
Blockly.Msg.ARD_MAP = 'Map';
Blockly.Msg.ARD_MAP_VAL = 'value to [0-';
Blockly.Msg.ARD_MAP_TIP = 'Re-maps a number from [0-1024] to another.';
Blockly.Msg.ARD_FUN_RUN_SETUP = 'Arduino run first:';
Blockly.Msg.ARD_FUN_RUN_LOOP = 'Arduino loop forever:';
Blockly.Msg.ARD_FUN_RUN_TIP = 'Defines the Arduino setup() and loop() functions.';
Blockly.Msg.ARD_PIN_WARN1 = 'Pin %1 is needed for %2 as pin %3. Already used as %4.';
Blockly.Msg.ARD_SERIAL_SETUP = 'Setup';
Blockly.Msg.ARD_SERIAL_SPEED = ':  speed to';
Blockly.Msg.ARD_SERIAL_BPS = 'bps';
Blockly.Msg.ARD_SERIAL_SETUP_TIP = 'Selects the speed for a specific Serial peripheral';
Blockly.Msg.ARD_SERIAL_PRINT = 'print';
Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE = 'add new line';
Blockly.Msg.ARD_SERIAL_PRINT_TIP = 'Prints data to the console/serial port as human-readable ASCII text.';
Blockly.Msg.ARD_SERIAL_PRINT_WARN = 'A setup block for %1 must be added to the workspace to use this block!';
Blockly.Msg.ARD_SERVO_WRITE = 'set SERVO from Pin';
Blockly.Msg.ARD_SERVO_WRITE_TO = 'to';
Blockly.Msg.ARD_SERVO_WRITE_DEG_180 = 'Degrees (0~180)';
Blockly.Msg.ARD_SERVO_WRITE_TIP = 'Set a Servo to an specified angle';
Blockly.Msg.ARD_SERVO_READ = 'read SERVO from PIN#';
Blockly.Msg.ARD_SERVO_READ_TIP = 'Read a Servo angle';
Blockly.Msg.ARD_SPI_SETUP = 'Setup';
Blockly.Msg.ARD_SPI_SETUP_CONF = 'configuration:';
Blockly.Msg.ARD_SPI_SETUP_SHIFT = 'data shift';
Blockly.Msg.ARD_SPI_SETUP_MSBFIRST = 'MSBFIRST';
Blockly.Msg.ARD_SPI_SETUP_LSBFIRST = 'LSBFIRST';
Blockly.Msg.ARD_SPI_SETUP_DIVIDE = 'clock divide';
Blockly.Msg.ARD_SPI_SETUP_MODE = 'SPI mode (idle - edge)';
Blockly.Msg.ARD_SPI_SETUP_MODE0 = '0 (Low - Falling)';
Blockly.Msg.ARD_SPI_SETUP_MODE1 = '1 (Low - Rising)';
Blockly.Msg.ARD_SPI_SETUP_MODE2 = '2 (High - Falling)';
Blockly.Msg.ARD_SPI_SETUP_MODE3 = '3 (High - Rising)';
Blockly.Msg.ARD_SPI_SETUP_TIP = 'Configures the SPI peripheral.';
Blockly.Msg.ARD_SPI_TRANS_NONE = 'none';
Blockly.Msg.ARD_SPI_TRANS_VAL = 'transfer';
Blockly.Msg.ARD_SPI_TRANS_SLAVE = 'to slave pin';
Blockly.Msg.ARD_SPI_TRANS_TIP = 'Send a SPI message to an specified slave device.';
Blockly.Msg.ARD_SPI_TRANS_WARN1 = 'A setup block for %1 must be added to the workspace to use this block!';
Blockly.Msg.ARD_SPI_TRANS_WARN2 = 'Old pin value %1 is no longer available.';
Blockly.Msg.ARD_SPI_TRANSRETURN_TIP = 'Send a SPI message to an specified slave device and get data back.';
Blockly.Msg.ARD_STEPPER_SETUP = 'Setup stepper motor';
Blockly.Msg.ARD_STEPPER_MOTOR = 'stepper motor:';
Blockly.Msg.ARD_STEPPER_DEFAULT_NAME = 'MyStepper';
Blockly.Msg.ARD_STEPPER_NUMBER_OF_PINS = 'Number of pins';
Blockly.Msg.ARD_STEPPER_TWO_PINS = '2';
Blockly.Msg.ARD_STEPPER_FOUR_PINS = '4';
Blockly.Msg.ARD_STEPPER_PIN1 = 'pin1#';
Blockly.Msg.ARD_STEPPER_PIN2 = 'pin2#';
Blockly.Msg.ARD_STEPPER_PIN3 = 'pin3#';
Blockly.Msg.ARD_STEPPER_PIN4 = 'pin4#';
Blockly.Msg.ARD_STEPPER_REVOLVS = 'how many steps per revolution';
Blockly.Msg.ARD_STEPPER_SPEED = 'set speed (rpm) to';
Blockly.Msg.ARD_STEPPER_SETUP_TIP = 'Configures a stepper motor pinout and other settings.';
Blockly.Msg.ARD_STEPPER_STEP = 'move stepper';
Blockly.Msg.ARD_STEPPER_STEPS = 'steps';
Blockly.Msg.ARD_STEPPER_STEP_TIP = 'Turns the stepper motor a specific number of steps.';
Blockly.Msg.ARD_STEPPER_COMPONENT = 'stepper';
Blockly.Msg.ARD_COMPONENT_WARN1 = 'A %1 configuration block with the same %2 name must be added to use this block!';
Blockly.Msg.ARD_TIME_DELAY = 'wait';
Blockly.Msg.ARD_TIME_MS = 'milliseconds';
Blockly.Msg.ARD_TIME_DELAY_TIP = 'Wait specific time in milliseconds';
Blockly.Msg.ARD_TIME_DELAY_MICROS = 'microseconds';
Blockly.Msg.ARD_TIME_DELAY_MICRO_TIP = 'Wait specific time in microseconds';
Blockly.Msg.ARD_TIME_MILLIS = 'current elapsed Time (milliseconds)';
Blockly.Msg.ARD_TIME_MILLIS_TIP = 'Returns the number of milliseconds since the Arduino board began running the current program. Has to be stored in a positive long integer';
Blockly.Msg.ARD_TIME_MICROS = 'current elapsed Time (microseconds)';
Blockly.Msg.ARD_TIME_MICROS_TIP = 'Returns the number of microseconds since the Arduino board began running the current program. Has to be stored in a positive long integer';
Blockly.Msg.ARD_TIME_INF = 'wait forever (end program)';
Blockly.Msg.ARD_TIME_INF_TIP = 'Wait indefinitely, stopping the program.';
Blockly.Msg.ARD_VAR_AS = 'as';
Blockly.Msg.ARD_VAR_AS_TIP = 'Sets a value to a specific type';
/// IO blocks - pulseIn - Block for function pulseIn(), it measure a pulse duration in a given pin.
Blockly.Msg.ARD_PULSE_READ = 'measure %1 pulse on pin #%2';
/// IO blocks - pulseIn - Block similar to ARD_PULSE_READ, but it adds a time-out in microseconds.
Blockly.Msg.ARD_PULSE_READ_TIMEOUT = 'measure %1 pulse on pin #%2 (timeout after %3 μs)';
/// IO blocks - pulseIn - Tooltip for pulseIn() block.
Blockly.Msg.ARD_PULSE_TIP = 'Measures the duration of a pulse on the selected pin.';
/// IO blocks - pulseIn - Tooltip for pulseIn() block when it uses the optional argument for time-out.
Blockly.Msg.ARD_PULSETIMEOUT_TIP = 'Measures the duration of a pulse on the selected pin, if it is within the time-out in microseconds.';
Blockly.Msg.ARD_SETTONE = 'Set tone on pin #';
Blockly.Msg.ARD_TONEFREQ = 'at frequency';
Blockly.Msg.ARD_TONE_TIP = 'Sets tone on pin to specified frequency within range 31 - 65535';
Blockly.Msg.ARD_TONE_WARNING = 'Frequency must be in range 31 - 65535';
Blockly.Msg.ARD_NOTONE = 'Turn off tone on pin #';
Blockly.Msg.ARD_NOTONE_TIP = 'Turns the tone off on the selected pin';

/**
 * Ardublockly instances
 */
/// Instances - Menu item to indicate that it will create a new instance
Blockly.Msg.NEW_INSTANCE = 'New instance...';
/// Instances - Menu item to rename an instance name
Blockly.Msg.RENAME_INSTANCE = 'Rename instance...';
/// Instances - Menu item to create a new instance name and apply it to that block
Blockly.Msg.NEW_INSTANCE_TITLE = 'New instance name:';
/// Instances - Confirmation message that a number of instances will be renamed to a new name
Blockly.Msg.RENAME_INSTANCE_TITLE = 'Rename all "%1" instances to:';

/*senseBox Blockly Translations*/

Blockly.Msg.senseBox_basic_blue = 'Blau';
Blockly.Msg.senseBox_basic_green = 'Grün';
Blockly.Msg.senseBox_piezo = 'Piezo Piepser';
Blockly.Msg.senseBox_basic_red = 'Rot';
Blockly.Msg.senseBox_basic_state = 'Status';
Blockly.Msg.senseBox_off = 'Aus';
Blockly.Msg.senseBox_on = 'Ein';
Blockly.Msg.senseBox_sensor = 'Sensoren'
Blockly.Msg.senseBox_output_filename = 'Daten';
Blockly.Msg.senseBox_output_format = 'Format:';
Blockly.Msg.senseBox_sd_create_file = 'Erstelle Datei auf SD-Karte';
Blockly.Msg.senseBox_sd_write_file = ' Schreibe Daten auf SD-Karte';
Blockly.Msg.senseBox_sd_open_file = 'Öffne eine Datei auf der SD-Karte';
Blockly.Msg.sensebox_sd_filename = 'Daten';
Blockly.Msg.senseBox_SD_COMPONENT = 'SD-Block';
Blockly.Msg.senseBox_output_linebreak = 'Zeilenumbruch';
Blockly.Msg.senseBox_output_networkid = 'NetzwerkID';
Blockly.Msg.senseBox_output_password = 'Passwort';
Blockly.Msg.senseBox_output_safetosd = 'Auf SD Karte speichern';
Blockly.Msg.senseBox_output_safetosd_tip = 'Speichert Messwerte auf SD Karte'
Blockly.Msg.senseBox_output_serialprint = 'Auf Kommandozeile ausgeben';
Blockly.Msg.senseBox_serial_tip = 'Gibt Messwerte oder Daten auf dem Seriellen Monitor der Arduino IDE aus. Praktisch um ohne Display zu arbeiten';
Blockly.Msg.senseBox_output_timestamp = 'Zeitstempel';
Blockly.Msg.senseBox_button = 'Drucktaster';
Blockly.Msg.senseBox_button_tip = 'Drucktaster';
Blockly.Msg.senseBox_led = 'LED an digital';
Blockly.Msg.senseBox_led_tip = 'Einfache LED. Beim Anschluss sollte immer ein Vorwiderstand verwendet werden';
Blockly.Msg.senseBox_piezo = 'Piezo an digital';
Blockly.Msg.senseBox_piezo_tip = 'Piezo an digital PIN. Beim Anschluss sollte immer ein Vorwiderstand verwendet werden';
Blockly.Msg.senseBox_foto = 'Fotowiderstand';
Blockly.Msg.senseBox_foto_tip = 'Fotowiderstand';
Blockly.Msg.senseBox_hum = 'Luftfeuchtigkeit in %';
Blockly.Msg.senseBox_hum_tip = 'Luftfeuchtigkeit';
Blockly.Msg.senseBox_ir = 'Infrarot Abstandssensor';
Blockly.Msg.senseBox_ir_tip = 'Infrarot Abstandssensor';
Blockly.Msg.senseBox_lux = 'Helligkeitssensor';
Blockly.Msg.senseBox_lux_tip = 'Helligkeitssensor';
Blockly.Msg.senseBox_poti = 'Potenziometer';
Blockly.Msg.senseBox_poti_tip = 'Potenziometer';
Blockly.Msg.senseBox_pressure_sensor = 'Luftdruck/Temperatur Sensor (BMP280)';
Blockly.Msg.senseBox_pressure = 'Luftdruck in Pa';
Blockly.Msg.senseBox_pressure_dimension = 'Luftdruck in Pa';
Blockly.Msg.senseBox_pressure_tip = 'Luftdrucksensor';
Blockly.Msg.senseBox_sound = 'Geräuschsensor';
Blockly.Msg.senseBox_sound_tip = 'Geräuschsensor';
Blockly.Msg.senseBox_rgb_led = 'RGB-LED'
Blockly.Msg.senseBox_rgb_led_tip = 'RGB-LED benötigt einen digitalen Pin und eine Stromkreis ';
Blockly.Msg.senseBox_temp = 'Temperatur in °C';
Blockly.Msg.senseBox_temp_hum = 'Temperatur/Luftfeuchtigkeitssensor (HDC1080)';
Blockly.Msg.senseBox_temp_hum_tip = 'Sensor misst Temperatur und Luftfeuchtigkeit';
Blockly.Msg.senseBox_ultrasonic = 'Ultraschall Abstandssensor an Port';
Blockly.Msg.senseBox_ultrasonic_port_A = 'A';
Blockly.Msg.senseBox_ultrasonic_port_B = 'B';
Blockly.Msg.senseBox_ultrasonic_port_C = 'C';
Blockly.Msg.senseBox_ultrasonic_tip = 'Ultraschall Abstandssensor';
Blockly.Msg.senseBox_value = 'Messwert:';
Blockly.Msg.senseBox_uv_light = 'Licht Sichtbar + UV Sensor';
Blockly.Msg.senseBox_uv_light_tip = 'Sensor misst UV-Licht oder Die Helligkeit';
Blockly.Msg.senseBox_uv = 'UV-Intensität in µW/cm²';
Blockly.Msg.senseBox_light = 'Beleuchtungsstärke in Lux';
Blockly.Msg.senseBox_bmx055_compass= 'Lage Sensor';
Blockly.Msg.senseBox_bmx055_accelerometer = 'Beschleunigungs Sensor';
Blockly.Msg.senseBox_bmx055_gyroscope = 'Lage Sensor';
Blockly.Msg.senseBox_bmx055_accelerometer_tip = 'Lage Sensor';
Blockly.Msg.senseBox_bmx055_compass_tip = 'Lage Sensor';
Blockly.Msg.senseBox_bmx055_gyroscope_tip = 'Lage Sensor';
Blockly.Msg.senseBox_bmx055_x = 'X-Richtung';
Blockly.Msg.senseBox_bmx055_y = 'Y-Richtung';
Blockly.Msg.senseBox_wifi_tip = 'stellt eine WLAN verbindung her'
Blockly.Msg.senseBox_osem_connection_tip = 'stellt eine WLAN verbindung her';
Blockly.Msg.senseBox_send_to_osem_tip = 'sende Messwert an';
Blockly.Msg.senseBox_send_to_osem = 'sende Messwert an die openSenseMap';
Blockly.Msg.senseBox_osem_connection = 'Verbinde mit openSenseMap';
Blockly.Msg.senseBox_sds011 = 'Feinstaubsensor';
Blockly.Msg.senseBox_sds011_dimension  = 'in µg/m³ an';
Blockly.Msg.senseBox_sds011_pm25 = 'PM2.5';
Blockly.Msg.senseBox_sds011_pm10 = 'PM10';
Blockly.Msg.senseBox_sds011_tip = 'Misst die Feinstaubbelastung';
Blockly.Msg.senseBox_sds011_serial1 = 'Serial1';
Blockly.Msg.senseBox_sds011_serial2 = 'Serial2';
/*Display*/
Blockly.Msg.senseBox_display_beginDisplay = 'Display initialisieren';
Blockly.Msg.senseBox_display_clearDisplay_tip ='Starten die Ausgabe auf dem Display';
Blockly.Msg.senseBox_display_clearDisplay = 'Display löschen';
Blockly.Msg.senseBox_display_clearDisplay_tip ='Löscht den Inhalt des Displays';
Blockly.Msg.senseBox_display_printDisplay = '';
Blockly.Msg.senseBox_display_printDisplay_tip = 'zeigt Wert auf dem Display an.';
Blockly.Msg.senseBox_display_printDisplay_x ='x';
Blockly.Msg.senseBox_display_printDisplay_y ='y';
Blockly.Msg.senseBox_display_printDisplay_value = 'Wert';
Blockly.Msg.senseBox_display_setSize = 'Schriftgröße';
Blockly.Msg.senseBox_display_setSize_tip = 'Ändere die Schriftgröße auf einen Wert zwischen 1 und 10.';
Blockly.Msg.senseBox_display_color = 'Schriftfarbe';
Blockly.Msg.senseBox_display_white = 'Weiß';
Blockly.Msg.senseBox_display_black = 'Schwarz';
Blockly.Msg.sensebox_display_show = 'Zeige auf dem Display';
Blockly.Msg.sensebox_display_show_tip = 'Zeigt den Nachfolgenden Inhalt auf dem Bildschirm';
Blockly.Msg.senseBox_display_plotDisplay = 'Diagram zeichnen';
Blockly.Msg.senseBox_display_plotXLabel = 'X-Achsen Beschriftung';
Blockly.Msg.senseBox_display_plotYLabel = 'Y-Achsen Beschriftung';
Blockly.Msg.senseBox_display_plotXRange1 = 'X-Wertebereich Anfang';
Blockly.Msg.senseBox_display_plotXRange2 = 'X-Wertebereich Ende';
Blockly.Msg.senseBox_display_plotYRange1 = 'Y-Wertebereich Anfang';
Blockly.Msg.senseBox_display_plotYRange2 = 'Y-Wertebereich Ende';
Blockly.Msg.senseBox_display_plotXTick = 'X-Linienabstand';
Blockly.Msg.senseBox_display_plotYTick = 'Y-Linienabstand';
Blockly.Msg.senseBox_display_plotTimeFrame = 'Zeitabschnitt';
Blockly.Msg.senseBox_gps_getValues =  'GPS Modul';
Blockly.Msg.senseBox_gps_getValues_tip =  'ruft das GPS Signal ab';
Blockly.Msg.senseBox_gps_lat = 'Breitengrad';
Blockly.Msg.senseBox_gps_lng =  'Längengrad';
Blockly.Msg.senseBox_gps_alt = 'Höhe über NN in m';
Blockly.Msg.senseBox_gps_speed = 'Geschwindigkeit in km/h';
Blockly.Msg.senseBox_send_mobile_to_osem = 'Sende Messwert und Standort';
Blockly.Msg.senseBox_send_mobile_to_osem_tip = 'Sende Messwert und Standort an die openSenseMap';
Blockly.Msg.senseBox_interval_timer = 'Messintervall';
Blockly.Msg.senseBox_interval = 'ms'
Blockly.Msg.senseBox_interval_timer_tip = 'Intervall';

// mcuBase Translations
Blockly.Msg.mcubase_basic_blue = 'Blau';
Blockly.Msg.mcubase_basic_green = 'Grün';
Blockly.Msg.mcubase_piezo = 'Piezo Piepser';
Blockly.Msg.mcubase_basic_red = 'Rot';
Blockly.Msg.mcubase_basic_state = 'Status';
Blockly.Msg.mcubase_off = 'Aus';
Blockly.Msg.mcubase_on = 'Ein';
Blockly.Msg.mcubase_sensor = 'Sensoren'
Blockly.Msg.mcubase_output_filename = 'Daten';
Blockly.Msg.mcubase_output_format = 'Format:';
Blockly.Msg.mcubase_sd_create_file = 'Erstelle Datei auf SD-Karte';
Blockly.Msg.mcubase_sd_write_file = ' Schreibe Daten auf SD-Karte';
Blockly.Msg.mcubase_sd_open_file = 'Öffne eine Datei auf der SD-Karte';
Blockly.Msg.mcubase_sd_filename = 'Daten';
Blockly.Msg.mcubase_SD_COMPONENT = 'SD-Block';
Blockly.Msg.mcubase_output_linebreak = 'Zeilenumbruch';
Blockly.Msg.mcubase_output_networkid = 'NetzwerkID';
Blockly.Msg.mcubase_output_password = 'Passwort';
Blockly.Msg.mcubase_output_safetosd = 'Auf SD Karte speichern';
Blockly.Msg.mcubase_output_safetosd_tip = 'Speichert Messwerte auf SD Karte'
Blockly.Msg.mcubase_output_serialprint = 'Auf Kommandozeile ausgeben';
Blockly.Msg.mcubase_serial_tip = 'Gibt Messwerte oder Daten auf dem Seriellen Monitor der Arduino IDE aus. Praktisch um ohne Display zu arbeiten';
Blockly.Msg.mcubase_output_timestamp = 'Zeitstempel';
Blockly.Msg.mcubase_button = 'Drucktaster';
Blockly.Msg.mcubase_button_tip = 'Drucktaster';
Blockly.Msg.mcubase_led = 'LED an digital';
Blockly.Msg.mcubase_led_tip = 'Einfache LED. Beim Anschluss sollte immer ein Vorwiderstand verwendet werden';
Blockly.Msg.mcubase_piezo = 'Piezo an digital';
Blockly.Msg.mcubase_piezo_tip = 'Piezo an digital PIN. Beim Anschluss sollte immer ein Vorwiderstand verwendet werden';
Blockly.Msg.mcubase_foto = 'Fotowiderstand';
Blockly.Msg.mcubase_foto_tip = 'Fotowiderstand';
Blockly.Msg.mcubase_hum = 'Luftfeuchtigkeit in %';
Blockly.Msg.mcubase_hum_tip = 'Luftfeuchtigkeit';
Blockly.Msg.mcubase_ir = 'Infrarot Abstandssensor';
Blockly.Msg.mcubase_ir_tip = 'Infrarot Abstandssensor';
Blockly.Msg.mcubase_lux = 'Helligkeitssensor';
Blockly.Msg.mcubase_lux_tip = 'Helligkeitssensor';
Blockly.Msg.mcubase_poti = 'Potenziometer';
Blockly.Msg.mcubase_poti_tip = 'Potenziometer';
Blockly.Msg.mcubase_pressure_sensor = 'Luftdruck/Temperatur Sensor (BMP280)';
Blockly.Msg.mcubase_pressure = 'Luftdruck in Pa';
Blockly.Msg.mcubase_pressure_dimension = 'Luftdruck in Pa';
Blockly.Msg.mcubase_pressure_tip = 'Luftdrucksensor';
Blockly.Msg.mcubase_sound = 'Geräuschsensor';
Blockly.Msg.mcubase_sound_tip = 'Geräuschsensor';
Blockly.Msg.mcubase_rgb_led = 'RGB-LED'
Blockly.Msg.mcubase_rgb_led_tip = 'RGB-LED benötigt einen digitalen Pin und eine Stromkreis ';
Blockly.Msg.mcubase_temp = 'Temperatur in °C';
Blockly.Msg.mcubase_temp_hum = 'Temperatur/Luftfeuchtigkeitssensor (HDC1080)';
Blockly.Msg.mcubase_temp_hum_tip = 'Sensor misst Temperatur und Luftfeuchtigkeit';
Blockly.Msg.mcubase_ultrasonic = 'Ultraschall Abstandssensor an Port';
Blockly.Msg.mcubase_ultrasonic_port_A = 'A';
Blockly.Msg.mcubase_ultrasonic_port_B = 'B';
Blockly.Msg.mcubase_ultrasonic_port_C = 'C';
Blockly.Msg.mcubase_ultrasonic_tip = 'Ultraschall Abstandssensor';
Blockly.Msg.mcubase_value = 'Messwert:';
Blockly.Msg.mcubase_uv_light = 'Licht Sichtbar + UV Sensor';
Blockly.Msg.mcubase_uv_light_tip = 'Sensor misst UV-Licht oder Die Helligkeit';
Blockly.Msg.mcubase_uv = 'UV-Intensität in µW/cm²';
Blockly.Msg.mcubase_light = 'Beleuchtungsstärke in Lux';
Blockly.Msg.mcubase_bmx055_compass= 'Lage Sensor';
Blockly.Msg.mcubase_bmx055_accelerometer = 'Beschleunigungs Sensor';
Blockly.Msg.mcubase_bmx055_gyroscope = 'Lage Sensor';
Blockly.Msg.mcubase_bmx055_accelerometer_tip = 'Lage Sensor';
Blockly.Msg.mcubase_bmx055_compass_tip = 'Lage Sensor';
Blockly.Msg.mcubase_bmx055_gyroscope_tip = 'Lage Sensor';
Blockly.Msg.mcubase_bmx055_x = 'X-Richtung';
Blockly.Msg.mcubase_bmx055_y = 'Y-Richtung';
Blockly.Msg.mcubase_wifi_tip = 'stellt eine WLAN verbindung her'
Blockly.Msg.mcubase_osem_connection_tip = 'stellt eine WLAN verbindung her';
Blockly.Msg.mcubase_send_to_osem_tip = 'sende Messwert an';
Blockly.Msg.mcubase_send_to_osem = 'sende Messwert an die openSenseMap';
Blockly.Msg.mcubase_osem_connection = 'Verbinde mit openSenseMap';
Blockly.Msg.mcubase_sds011 = 'Feinstaubsensor';
Blockly.Msg.mcubase_sds011_dimension  = 'in µg/m³ an';
Blockly.Msg.mcubase_sds011_pm25 = 'PM2.5';
Blockly.Msg.mcubase_sds011_pm10 = 'PM10';
Blockly.Msg.mcubase_sds011_tip = 'Misst die Feinstaubbelastung';
Blockly.Msg.mcubase_sds011_serial1 = 'Serial1';
Blockly.Msg.mcubase_sds011_serial2 = 'Serial2';
/*Display*/
Blockly.Msg.mcubase_display_beginDisplay = 'Display initialisieren';
Blockly.Msg.mcubase_display_clearDisplay_tip ='Starten die Ausgabe auf dem Display';
Blockly.Msg.mcubase_display_clearDisplay = 'Display löschen';
Blockly.Msg.mcubase_display_clearDisplay_tip ='Löscht den Inhalt des Displays';
Blockly.Msg.mcubase_display_printDisplay = '';
Blockly.Msg.mcubase_display_printDisplay_tip = 'zeigt Wert auf dem Display an.';
Blockly.Msg.mcubase_display_printDisplay_x ='x';
Blockly.Msg.mcubase_display_printDisplay_y ='y';
Blockly.Msg.mcubase_display_printDisplay_value = 'Wert';
Blockly.Msg.mcubase_display_setSize = 'Schriftgröße';
Blockly.Msg.mcubase_display_setSize_tip = 'Ändere die Schriftgröße auf einen Wert zwischen 1 und 10.';
Blockly.Msg.mcubase_display_color = 'Schriftfarbe';
Blockly.Msg.mcubase_display_white = 'Weiß';
Blockly.Msg.mcubase_display_black = 'Schwarz';
Blockly.Msg.mcubase_display_show = 'Zeige auf dem Display';
Blockly.Msg.mcubase_display_show_tip = 'Zeigt den Nachfolgenden Inhalt auf dem Bildschirm';
Blockly.Msg.mcubase_display_plotDisplay = 'Diagram zeichnen';
Blockly.Msg.mcubase_display_plotXLabel = 'X-Achsen Beschriftung';
Blockly.Msg.mcubase_display_plotYLabel = 'Y-Achsen Beschriftung';
Blockly.Msg.mcubase_display_plotXRange1 = 'X-Wertebereich Anfang';
Blockly.Msg.mcubase_display_plotXRange2 = 'X-Wertebereich Ende';
Blockly.Msg.mcubase_display_plotYRange1 = 'Y-Wertebereich Anfang';
Blockly.Msg.mcubase_display_plotYRange2 = 'Y-Wertebereich Ende';
Blockly.Msg.mcubase_display_plotXTick = 'X-Linienabstand';
Blockly.Msg.mcubase_display_plotYTick = 'Y-Linienabstand';
Blockly.Msg.mcubase_display_plotTimeFrame = 'Zeitabschnitt';
Blockly.Msg.mcubase_gps_getValues =  'GPS Modul';
Blockly.Msg.mcubase_gps_getValues_tip =  'ruft das GPS Signal ab';
Blockly.Msg.mcubase_gps_lat = 'Breitengrad';
Blockly.Msg.mcubase_gps_lng =  'Längengrad';
Blockly.Msg.mcubase_gps_alt = 'Höhe über NN in m';
Blockly.Msg.mcubase_gps_speed = 'Geschwindigkeit in km/h';
Blockly.Msg.mcubase_send_mobile_to_osem = 'Sende Messwert und Standort';
Blockly.Msg.mcubase_send_mobile_to_osem_tip = 'Sende Messwert und Standort an die openSenseMap';
Blockly.Msg.mcubase_interval_timer = 'Messintervall';
Blockly.Msg.mcubase_interval = 'ms'
Blockly.Msg.mcubase_interval_timer_tip = 'Intervall';

// Cases
Blockly.Msg.cases_do = 'Führe aus';
Blockly.Msg.cases_condition = 'Fall (Variable) = ';
Blockly.Msg.cases_switch = 'Variable';
Blockly.Msg.cases_add = 'Fall';
