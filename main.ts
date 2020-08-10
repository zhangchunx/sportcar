function 右转 () {
    magicbit.MotorRunDual(magicbit.Motors.M1, -150, magicbit.Motors.M4, -150)
    basic.pause(100)
}
function 左转 () {
    magicbit.MotorRunDual(magicbit.Motors.M1, 150, magicbit.Motors.M4, 150)
    basic.pause(100)
}
input.onButtonPressed(Button.A, function () {
    是否运动 = !(是否运动)
    if (是否运动 == false) {
        停止()
    }
})
function 后退 () {
    magicbit.MotorRunDual(magicbit.Motors.M1, -150, magicbit.Motors.M4, 150)
    basic.pause(100)
}
function 前进 () {
    magicbit.MotorRunDual(magicbit.Motors.M1, 150, magicbit.Motors.M4, -150)
    basic.pause(100)
}
function 上升 () {
    magicbit.Servo(magicbit.Servos.S1, -10)
    basic.pause(100)
    magicbit.Servo(magicbit.Servos.S1, -90)
    basic.pause(100)
    magicbit.Servo(magicbit.Servos.S1, -120)
    basic.pause(100)
}
function 停止 () {
    magicbit.MotorRunDual(magicbit.Motors.M1, 0, magicbit.Motors.M4, 0)
}
function 随机选择一个方向 () {
    随机方向序号 = randint(0, 2)
    if (随机方向序号 == 0) {
        左转()
    } else if (随机方向序号 == 1) {
        右转()
    } else {
        后退()
    }
}
function 下降 () {
    magicbit.Servo(magicbit.Servos.S1, 10)
    basic.pause(100)
    magicbit.Servo(magicbit.Servos.S1, 90)
    basic.pause(100)
    magicbit.Servo(magicbit.Servos.S1, 120)
    basic.pause(100)
}
let 距离 = 0
let 是否运动 = false
let 随机方向序号 = 0
随机方向序号 = 0
basic.forever(function () {
    距离 = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P12,
    PingUnit.Centimeters
    )
    if (是否运动 == true) {
        magicbit.rgb().showColor(neopixel.hsl(100, 100, 3))
        if (距离 >= 10) {
            前进()
        } else {
            停止()
            上升()
            下降()
            随机选择一个方向()
        }
    } else {
        magicbit.rgb().showColor(neopixel.hsl(200, 20, 3))
    }
})
