'use strict';

/**
 * @name Blockly.Variables
 * @namespace
 **/
goog.provide('Blockly.Command');

goog.require('Blockly.Blocks');
goog.require('Blockly.constants');
goog.require('Blockly.Workspace');
goog.require('goog.string');
Blockly.Command.createVariableButtonHandler = function(
  workspace, opt_callback, opt_type) {
var type = opt_type || '';
// This function needs to be named so it can be called recursively.
var promptAndCheckWithAlert = function(defaultName) {
  Blockly.Command.promptName(Blockly.Msg.NEW_VARIABLE_TITLE, defaultName,
      function(text) {
        if (text) {
          var existing =
              Blockly.Variables.nameUsedWithAnyType_(text, workspace);
          if (existing) {
            var lowerCase = text.toLowerCase();
            if (existing.type == type) {
              var msg = Blockly.Msg.VARIABLE_ALREADY_EXISTS.replace(
                  '%1', lowerCase);
            } else {
              var msg = Blockly.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE;
              msg = msg.replace('%1', lowerCase).replace('%2', existing.type);
            }
            Blockly.alert(msg,
                function() {
                  promptAndCheckWithAlert(text);  // Recurse
                });
          } else {
            // No conflict
            workspace.createVariable(text, type);
            if (opt_callback) {
              opt_callback(text);
            }
          }
        } else {
          // User canceled prompt.
          if (opt_callback) {
            opt_callback(null);
          }
        }
      });
};
promptAndCheckWithAlert('');
};

Blockly.Command.promptName = function(promptText, defaultText, callback) {
  Blockly.prompt(promptText, defaultText, function(newVar) {
    // Merge runs of whitespace.  Strip leading and trailing whitespace.
    // Beyond this, all names are legal.
    if (newVar) {
      newVar = newVar.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
      if (newVar == Blockly.Msg.RENAME_VARIABLE ||
          newVar == Blockly.Msg.NEW_VARIABLE) {
        // Ok, not ALL names are legal...
        newVar = null;
      }
    }
    callback(newVar);
  });
};
Blockly.Command.flyoutCategory = function(workspace) {
    var xmlList = [];
    var button = goog.dom.createDom('button');
    button.setAttribute('text', Blockly.Msg.NEW_VARIABLE);
    button.setAttribute('callbackKey', 'CREATE_VARIABLE');
  
    workspace.registerButtonCallback('CREATE_VARIABLE', function(button) {
      Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace());
    });
  
    xmlList.push(button);

    // var button2 = goog.dom.createDom('button');
    // button2.setAttribute('text', Blockly.Msg.NEW_FUNCTION);
    // button2.setAttribute('callbackKey', 'CREATE_FUNCTION');
  
    // workspace.registerButtonCallback('CREATE_FUNCTION', function(button) {
    //   // Blockly.Command.createVariableButtonHandler(button.getTargetWorkspace());
      
    //   DemoApp.showDialog("FunctionNameDialog", null, function () {
    //     console.log("ppp");
    //   }, this)
    // });
  
    // xmlList.push(button2);
  
    var blockList = Blockly.Variables.flyoutCategoryBlocks(workspace);
    xmlList = xmlList.concat(blockList);

    if (Blockly.Blocks['procedures_defnoreturn']) {
        // <block type="procedures_defnoreturn" gap="16">
        //     <field name="NAME">do something</field>
        // </block>
        var block = goog.dom.createDom('block');
        block.setAttribute('type', 'procedures_defnoreturn');
        block.setAttribute('gap', 16);
        var nameField = goog.dom.createDom('field', null,
            Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE);
        nameField.setAttribute('name', 'NAME');
        block.appendChild(nameField);
        xmlList.push(block);
      }

      function populateProcedures(procedureList, templateName) {
        for (var i = 0; i < procedureList.length; i++) {
          var name = procedureList[i][0];
          var args = procedureList[i][1];
          // <block type="procedures_callnoreturn" gap="16">
          //   <mutation name="do something">
          //     <arg name="x"></arg>
          //   </mutation>
          // </block>
          var block = goog.dom.createDom('block');
          block.setAttribute('type', templateName);
          block.setAttribute('gap', 16);
          var mutation = goog.dom.createDom('mutation');
          mutation.setAttribute('name', name);
          block.appendChild(mutation);
          for (var j = 0; j < args.length; j++) {
            var arg = goog.dom.createDom('arg');
            arg.setAttribute('name', args[j]);
            mutation.appendChild(arg);
          }
          xmlList.push(block);
        }
      }
    
      var tuple = Blockly.Procedures.allProcedures(workspace);
      populateProcedures(tuple[0], 'procedures_callnoreturn');
      populateProcedures(tuple[1], 'procedures_callreturn');
    return xmlList;
};