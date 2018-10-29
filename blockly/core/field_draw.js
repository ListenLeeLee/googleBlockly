'use strict';

goog.provide('Blockly.FieldDraw');

goog.require('Blockly.Field');
let defaultDrawContent = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
[0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0],
[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

Blockly.FieldDraw = function(menuGenerator, opt_validator) {
    // Call parent's constructor.
    Blockly.FieldDraw.superClass_.constructor.call(this, defaultDrawContent,
        opt_validator);
  };
  goog.inherits(Blockly.FieldDraw, Blockly.Field);


  Blockly.FieldDraw.drawColor = "#1ebaee";

  Blockly.FieldDraw.fromJson = function(options) {
    return new Blockly.FieldDraw(options['options']);
  };

  Blockly.FieldDraw.prototype.init = function() {
      console.log("fieldDraw init");
    if (this.fieldGroup_) {
      // Dropdown has already been initialized once.
      return;
    }

    Blockly.FieldDraw.superClass_.init.call(this);
  };

  Blockly.FieldDraw.prototype.render_ = function() {
    console.log("fieldDraw render_");
    if (!this.visible_) {
      this.size_.width = 0;
      return;
    }

    // Replace the text.
    goog.dom.removeChildren(/** @type {!Element} */ (this.textElement_));
    var textNode = document.createTextNode(this.getDisplayText_());
    this.textElement_.appendChild(textNode);

    if (this.borderRect_) {
        this.borderRect_.setAttribute('rx',
          0);
          this.borderRect_.setAttribute('ry',
          0);
    }
    
    if (!this.pixelRects) {
        this.pixelRects = [];
        for(let i=0; i<8; i++) {
            let rects = [];
            for(let j=0; j<16; j++) {
                let rect = Blockly.utils.createSvgElement('rect',
                {
                    'rx': 0,
                    'ry': 0,
                    'x':  -Blockly.BlockSvg.SEP_SPACE_X / 2 + 2*j,
                    'y': 2*i,
                    'height': 2,
                    'width': 2,
                    }, this.fieldGroup_);
                rects.push(rect);
            }
            this.pixelRects.push(rects);
        }
        this.setEmoji();
    }
    this.textElement_.style.display = "none";

    this.updateWidth();
  };

  Blockly.FieldDraw.prototype.updateWidth = function() {
    var width = 22;//Blockly.Field.getCachedWidth(this.textElement_);
    if (this.borderRect_) {
        this.borderRect_.setAttribute('width',
          width + Blockly.BlockSvg.SEP_SPACE_X);
    }
    this.size_.width = width;
  };
  
  Blockly.FieldDraw.prototype.showEditor_ = function() {
    DemoApp.showDialog("drawingBoard", this.sourceBlock_);
    DemoApp.drawBoard.setData(this.data);
  };

  Blockly.FieldDraw.prototype.setEmoji = function() {
    if (this.data) {
        for(let i=0; i<8; i++) {
            for(let j=0; j<16; j++) {
                if (this.data[i][j] == 1) {
                    this.pixelRects[i][j].style.fill = Blockly.FieldDraw.drawColor;
                } else {
                    this.pixelRects[i][j].style.fill = "white";
                }
            }
        }
    } else {
        this.data = defaultDrawContent;
        for(let i=0; i<8; i++) {
            for(let j=0; j<16; j++) {
                if (this.data[i][j] == 1) {
                    this.pixelRects[i][j].style.fill = Blockly.FieldDraw.drawColor;
                } else {
                    this.pixelRects[i][j].style.fill = "white";
                }
            }
        }
    }
  };

  Blockly.FieldDraw.prototype.setData = function (data) {
      if (data && this.pixelRects) {
        this.data = data;
        this.setEmoji();
      }
  };

  Blockly.FieldDraw.prototype.setValue = function(newValue) {
    if (newValue === null) {
      // No change if null.
      return;
    }
    var oldValue = this.getValue();
  
    if (this.sourceBlock_ && Blockly.Events.isEnabled()) {
      Blockly.Events.fire(new Blockly.Events.BlockChange(
          this.sourceBlock_, 'field', this.name, oldValue, newValue));
    }
    this.setText(newValue);
    this.setData(newValue);
  };

  Blockly.Field.register('field_draw', Blockly.FieldDraw);