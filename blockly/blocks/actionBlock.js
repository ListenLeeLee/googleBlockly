
Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "start_block",
        "message0": "%1",
        "args0": [
            {
                "type": "field_image",
                "src": "../../media/res/logo_1.png",
                "width": 222,
                "height": 53,
                "alt": "*"
            }
        ],
        "inputsInline": true,
        "nextStatement": null,
        "colour": "%{BKY_CONTROLS_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },
    // 电机转速
    {
        "type": "d_c_generator_roll_with_speed",
        "message0": "%1 设置电机 %2 ，转速为 %3",
        "args0": [
            {
                "type": "field_image",
                "src": "../../media/res/generator.png",
                "width": 29.5,
                "height": 20,
                "alt": "*"
            },
            {
                "type": "field_dropdown",
                "name": "GENERATOR",
                "options": [
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["6", "6"],
                    ["7", "7"],
                    ["8", "8"],
                ]
            },
            {
                "type": "input_value",
                "name": "SPEED",
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

    //板载LED
    {
        "type": "turn_on_on_board_light",
        "message0": "%1 设置板载LED %2 红色 %3 绿色 %4 蓝色 %5",
        "args0": [
            {
                "type": "field_image",
                "src": "../../media/res/led.png",
                "width": 29.5,
                "height": 20,
                "alt": "*"
            },
            {
                "type": "field_dropdown",
                "name": "SELECT",
                "options": [
                    ["%{BKY_ACTION_LIGHT_SELECT_ALL}", "2"],
                    ["%{BKY_ACTION_LIGHT_SELECT_LEFT}", "0"],
                    ["%{BKY_ACTION_LIGHT_SELECT_RIGHT}", "1"]
                ]
            },
            {
                "type": "input_value",
                "name": "COLOR_RED",
            },
            {
                "type": "input_value",
                "name": "COLOR_GREEN",
            },
            {
                "type": "input_value",
                "name": "COLOR_BLUE",
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

    //　播放音调
    {
        "type": "play_sound_by_beat",
        "message0": "%1 播放音调为 %2 ，节拍为 %3",
        "args0": [
            {
                "type": "field_image",
                "src": "../../media/res/beep.png",
                "width": 29.5,
                "height": 20,
                "alt": "*"
            },
            {
                "type": "field_tune_select",
                "name": "NAME",
                "options": [
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
            },
            {
                "type": "field_dropdown",
                "name": "BEAT",
                "options": [
                    ["%{BKY_ACTION_SOUND_BEAT_ONE_EIGHTH}", "0.125"],
                    ["%{BKY_ACTION_SOUND_BEAT_ONE_FOURTH}", "0.25"],
                    ["%{BKY_ACTION_SOUND_BEAT_A_HALF}", "0.5"],
                    ["%{BKY_ACTION_SOUND_BEAT_ONE}", "1"],
                    ["%{BKY_ACTION_SOUND_BEAT_DOUBLE}", "2"],
                ]
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

    //表情面板显示数字
    {
        "type": "screen_show_number",
        "message0": "%1 表情面板 %2 显示数字 %3",
        "args0": [
            {
                "type": "field_image",
                "src": "../../media/res/emoji.png",
                "width": 29.5,
                "height": 20,
                "alt": "*"
            },
            {
                "type": "field_dropdown",
                "name": "NAME",
                "options": [
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["6", "6"],
                    ["7", "7"],
                    ["8", "8"],
                ]
            },
            {
                "type": "input_value",
                "name": "NUMBER",
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

     //表情面板显示时间
     {
        "type": "screen_show_time",
        "message0": "%1 表情面板 %2 显示时间 %3 时 %4 分",
        "args0": [
            {
                "type": "field_image",
                "src": "../../media/res/emoji.png",
                "width": 29.5,
                "height": 20,
                "alt": "*"
            },
            {
                "type": "field_dropdown",
                "name": "NAME",
                "options": [
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["6", "6"],
                    ["7", "7"],
                    ["8", "8"],
                ]
            },
            {
                "type": "input_value",
                "name": "HOUR",
            },
            {
                "type": "input_value",
                "name": "MINUTE",
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

    //表情面板绘画
    {
        "type": "screen_show_picture",
        "message0": "%1 表情面板 %2 绘画 %3",
        "args0": [
            {
                "type": "field_image",
                "src": "../../media/res/emoji.png",
                "width": 29.5,
                "height": 20,
                "alt": "*"
            },
            {
                "type": "field_dropdown",
                "name": "NAME",
                "options": [
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["6", "6"],
                    ["7", "7"],
                    ["8", "8"],
                ]
            },
            {
                "type": "field_draw",
                "name": "EMOJI",
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": ""
    },

    //超声波传感器距离
    {
        "type": "ultrasonic",
        "message0": "%1 超声波传感器 %2 距离",
        "args0": [
            {
                "type": "field_image",
                "src": "../../media/res/ultrasonic.png",
                "width": 29.5,
                "height": 20,
                "alt": "*"
            },
            {
                "type": "field_dropdown",
                "name": "NAME",
                "options": [
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["6", "6"],
                    ["7", "7"],
                    ["8", "8"],
                ]
            },
        ],
        "inputsInline": true,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": "",
        "output": "Number",
    },

    //音量传感器
    {
        "type": "volume",
        "message0": "%1 音量传感器 %2 ",
        "args0": [
            {
                "type": "field_image",
                "src": "../../media/res/volume.png",
                "width": 29.5,
                "height": 20,
                "alt": "*"
            },
            {
                "type": "field_dropdown",
                "name": "NAME",
                "options": [
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["6", "6"],
                    ["7", "7"],
                    ["8", "8"],
                ]
            },
        ],
        "inputsInline": true,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": "",
        "output": "Number",
    },

    //巡线传感器
    {
        "type": "line_patrol",
        "message0": "%1 巡线传感器 %2 %3 是 %4",
        "args0": [
            {
                "type": "field_image",
                "src": "../../media/res/line_patrol.png",
                "width": 29.5,
                "height": 20,
                "alt": "*"
            },
            {
                "type": "field_dropdown",
                "name": "NAME",
                "options": [
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["6", "6"],
                    ["7", "7"],
                    ["8", "8"],
                ]
            },
            {
                "type": "field_dropdown",
                "name": "DIRECTION",
                "options": [
                    ["%{BKY_ACTION_DIRECTION_LEFT}", "0"],
                    ["%{BKY_ACTION_DIRECTION_RIGHT}", "1"],

                ]
            },
            {
                "type": "field_dropdown",
                "name": "COLOR",
                "options": [
                    ["%{BKY_ACTION_COLOR_BLACK}", "0"],
                    ["%{BKY_ACTION_COLOR_WHITE}", "1"],

                ]
            },
        ],
        "inputsInline": true,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": "",
        "output": "Boolean",
    },

     //红外遥控器按下
     {
        "type": "telecontroller",
        "message0": "%1 红外遥控器按下 %2 ",
        "args0": [
            {
                "type": "field_image",
                "src": "../../media/res/telecontroller.png",
                "width": 29.5,
                "height": 20,
                "alt": "*"
            },
            {
                "type": "field_telecontrol_select",
                "name": "NAME",
                "options": [
                    ["A", "A"],
                    ["B", "B"],
                    ["C", "C"],
                    ["D", "D"],
                    ["上", "上"],
                    ["E", "E"],
                    ["左", "左"],
                    ["设置", "设置"],
                    ["右", "右"],
                    ["0", "0"],
                    ["下", "下"],
                    ["F", "F"],
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["6", "6"],
                    ["7", "7"],
                    ["8", "8"],
                    ["9", "9"],
                ]
            },
        ],
        "inputsInline": true,
        "colour": "%{BKY_ACTION_HUE}",
        "tooltip": "",
        "helpUrl": "",
        "output": "Boolean",
    },
]);