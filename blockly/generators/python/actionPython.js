// 电机转速
Blockly.Python['start_block'] = function(block) {
    var code;
    code = code + '\n';
    return code;
};
// 电机转速
Blockly.Python['d_c_generator_roll_with_speed'] = function(block) {
    var speed = Blockly.Python.valueToCode(block, 'SPEED',
    Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    var generator = block.getFieldValue('GENERATOR');
    var code;

    code = 'kq.espd(' + generator + ',' + speed + ')';
    code = code + '\n';
    return code;
};

//板载LED
Blockly.Python['turn_on_on_board_light'] = function(block) {
    var select = block.getFieldValue('SELECT');
    var colorR = Blockly.Python.valueToCode(block, 'COLOR_RED',
    Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    var colorG = Blockly.Python.valueToCode(block, 'COLOR_GREEN',
    Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    var colorB = Blockly.Python.valueToCode(block, 'COLOR_BLUE',
    Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    var code;


    code = 'kq.bld(' + select + ',' + colorR + ',' + colorG + ',' + colorB + ')';
    code = code + '\n';
    return code;
};

//　播放音调
Blockly.Python['play_sound_by_beat'] = function(block) {
    var name = block.getFieldValue('NAME');
    var beat = block.getFieldValue('BEAT');
    var code;
    let beep;
    let config = {
        C1: "262",
        D1: "294",
        E1: "330",
        F1: "349",
        G1: "392",
        A1: "440",
        B1: "494",
        C2: "523",
        D2: "587",
        E2: "659",
        F2: "698",
        G2: "784",
        A2: "880",
        B2: "988",
        C3: "1047",
        D3: "1175",
        E3: "1319",
        F3: "1397",
        G3: "1568",
        A3: "1760",
        B3: "1976"
    }
    beep = config[name];
    code = 'kq.bbp(' + beep + ',' + beat + ')';
    code = code + '\n';
    return code;
};

//表情面板显示数字
Blockly.Python['screen_show_number'] = function(block) {
    var number = Blockly.Python.valueToCode(block, 'NUMBER',
        Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    var name = block.getFieldValue('NAME');
    var code;
    code = 'kq.ebi('+ name + ',' + number +')'
    code = code + '\n';
    return code;
};

//表情面板显示时间
Blockly.Python['screen_show_time'] = function(block) {
    var name = block.getFieldValue('NAME');
    var hour = Blockly.Python.valueToCode(block, 'HOUR',
        Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    var minute = Blockly.Python.valueToCode(block, 'MINUTE',
        Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
        
    var code;
    code = 'kq.ebt('+ name + ',' + hour+ ',' + minute +')'
    code = code + '\n';
    return code;
};

//表情面板绘画
Blockly.Python['screen_show_picture'] = function(block) {
    var name = block.getFieldValue('NAME');
    // var number = Blockly.Python.valueToCode(block, 'NUMBER',
    //     Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
    var number = block.getFieldValue("EMOJI");
    let data = number.split(",");
    let newData = [];
    for(let i=0; i<4; i++) {
        let s = [];
        for(let j=i*32; j<i*32+32; j++) {
            s.push(data[j]);
        }
        newData.push(s);
    }

    function getUnit32 (arr) {
        let num = 0;
        for(let i=0; i<arr.length; i++) {
            num += Math.pow(2, i)*arr[i];
        }

        return num;
    }

    let line_1 = getUnit32(newData[0]);
    let line_2 = getUnit32(newData[1]);
    let line_3 = getUnit32(newData[2]);
    let line_4 = getUnit32(newData[3]);
    
    var code;
    code = 'kq.ebp('+ name + ',' + line_1 + ',' + line_2 + ',' + line_3 + ',' + line_4 +')'
    code = code + '\n';
    return code;
};

//超声波传感器距离
Blockly.Python['ultrasonic'] = function(block) {
    var name = block.getFieldValue('NAME');
    var code;
    code = 'kq.eult('+ name + ')'
    code = code;
    return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
};

//音量传感器
Blockly.Python['volume'] = function(block) {
    var name = block.getFieldValue('NAME');
    var code;
    code = 'kq.mic('+ name + ')'
    code = code;
    return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
};

//巡线传感器
Blockly.Python['line_patrol'] = function(block) {
    var name = block.getFieldValue('NAME');
    var direction = block.getFieldValue('DIRECTION');
    var color = block.getFieldValue('COLOR');
    var code;
    code = 'kq.wbl('+ name + ',' + direction + ','+ color + ')'
    code = code;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

//红外遥控器
Blockly.Python['telecontroller'] = function(block) {
    var name = block.getFieldValue('NAME');
    let config = {
        "A": "45",
        "B": "46",
        "C": "47",
        "D": "48",
        "上": "40",
        "E": "43",
        "左": "07",
        "设置": "15",
        "右": "09",
        "0": "16",
        "下": "19",
        "F": "0D",
        "1": "0C",
        "2": "18",
        "3": "5E",
        "4": "08",
        "5": "1C",
        "6": "5A",
        "7": "42",
        "8": "52",
        "9": "4A"
    }
    var code;
    let key = config[name];
    key = "0x" + key;
    code = 'kq.erc('+ key + ')'
    code = code;
    return [code, Blockly.Python.ORDER_ATOMIC];ƒ
};