joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendNumber(7)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendNumber(8)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendNumber(6)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendNumber(5)
})
radio.setGroup(22)
joystickbit.initJoystickBit()
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 700) {
        radio.sendNumber(3)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 300) {
        radio.sendNumber(4)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 700) {
        radio.sendNumber(1)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 300) {
        radio.sendNumber(2)
    }
})
