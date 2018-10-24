/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour input field.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.FieldTune');

goog.require('Blockly.FieldDropdown');
goog.require('Blockly.utils');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');

/**
 * Class for a colour input field.
 * @param {string} colour The initial colour in '#rrggbb' format.
 * @param {Function=} opt_validator A function that is executed when a new
 *     colour is selected.  Its sole argument is the new colour value.  Its
 *     return value becomes the selected colour, unless it is undefined, in
 *     which case the new colour stands, or it is null, in which case the change
 *     is aborted.
 * @extends {Blockly.Field}
 * @constructor
 */
Blockly.FieldTune = function(menuGenerator, opt_validator) {
  Blockly.FieldTune.superClass_.constructor.call(this, menuGenerator, opt_validator);
};
goog.inherits(Blockly.FieldTune, Blockly.FieldDropdown);

/**
 * Construct a FieldTune from a JSON arg object.
 * @param {!Object} options A JSON object with options (colour).
 * @returns {!Blockly.FieldTune} The new field instance.
 * @package
 * @nocollapse
 */
Blockly.FieldTune.fromJson = function(options) {
  return new Blockly.FieldTune(options['options']);
};

var json = {
  type: 'field_tune_select',
  options: [
    ["C1", "C1"],
    ["D1", "D1"],
    ["E1", "E1"],
    ["F1", "F1"],
    ["G1", "G1"],
    ["A1", "A1"],
    ["B1", "B1"],
    ["C2", "C2"],
    ["D2", "D2"],
    ["E2", "E2"],
    ["F2", "F2"],
    ["G2", "G2"],
    ["A2", "A2"],
    ["B2", "B2"],
    ["C3", "C3"],
    ["D3", "D3"],
    ["E3", "E3"],
    ["F3", "F3"],
    ["G3", "G3"],
    ["A3", "A3"],
    ["B3", "B3"],
]
};

var field = Blockly.FieldTune.fromJson(json);
console.log(field);

/**
 * Create a palette under the colour field.
 * @private
 */
Blockly.FieldTune.prototype.showEditor_ = function() {
    DemoApp.showDialog("beepSelect", this.sourceBlock_);
};

Blockly.Field.register('field_tune_select', Blockly.FieldTune);

field = Blockly.FieldTune.fromJson(json);
console.log(field);