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

goog.provide('Blockly.FieldKey');

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
Blockly.FieldKey = function(menuGenerator, opt_validator) {
  Blockly.FieldKey.superClass_.constructor.call(this, menuGenerator, opt_validator);
};
goog.inherits(Blockly.FieldKey, Blockly.FieldDropdown);

/**
 * Construct a FieldKey from a JSON arg object.
 * @param {!Object} options A JSON object with options (colour).
 * @returns {!Blockly.FieldKey} The new field instance.
 * @package
 * @nocollapse
 */
Blockly.FieldKey.fromJson = function(options) {
  return new Blockly.FieldKey(options['options']);
};

/**
 * Create a palette under the colour field.
 * @private
 */
Blockly.FieldKey.prototype.showEditor_ = function() {
    DemoApp.showDialog("teleControlSelect", this.sourceBlock_);
};

Blockly.Field.register('field_telecontrol_select', Blockly.FieldKey);
