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
Blockly.Command.flyoutCategory = function(workspace) {
    var xmlList = [];
    var button = goog.dom.createDom('button');
    button.setAttribute('text', Blockly.Msg.NEW_VARIABLE);
    button.setAttribute('callbackKey', 'CREATE_VARIABLE');
  
    workspace.registerButtonCallback('CREATE_VARIABLE', function(button) {
      Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace());
    });
  
    xmlList.push(button);
  
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