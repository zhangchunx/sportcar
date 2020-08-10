是否运动 = False
距离 = 0
def 右转():
    magicbit.motor_run_dual(magicbit.Motors.M1, -150, magicbit.Motors.M4, -150)
    basic.pause(100)
def 左转():
    magicbit.motor_run_dual(magicbit.Motors.M1, 150, magicbit.Motors.M4, 150)
    basic.pause(100)

def on_button_pressed_a():
    global 是否运动
    是否运动 = not (是否运动)
    if 是否运动 == False:
        停止()
input.on_button_pressed(Button.A, on_button_pressed_a)

def 后退():
    magicbit.motor_run_dual(magicbit.Motors.M1, -150, magicbit.Motors.M4, 150)
    basic.pause(100)
def 前进():
    magicbit.motor_run_dual(magicbit.Motors.M1, 150, magicbit.Motors.M4, -150)
    basic.pause(100)
def 上升():
    magicbit.servo(magicbit.Servos.S1, -10)
    basic.pause(100)
    magicbit.servo(magicbit.Servos.S1, -90)
    basic.pause(100)
    magicbit.servo(magicbit.Servos.S1, -120)
    basic.pause(100)
def 停止():
    magicbit.motor_run_dual(magicbit.Motors.M1, 0, magicbit.Motors.M4, 0)
def 下降():
    magicbit.servo(magicbit.Servos.S1, 10)
    basic.pause(100)
    magicbit.servo(magicbit.Servos.S1, 90)
    basic.pause(100)
    magicbit.servo(magicbit.Servos.S1, 120)
    basic.pause(100)

def on_forever():
    global 距离
    距离 = sonar.ping(DigitalPin.P13, DigitalPin.P12, PingUnit.CENTIMETERS)
    if 是否运动 == True:
        magicbit.rgb().show_color(neopixel.hsl(100, 100, 3))
        if 距离 >= 10:
            前进()
        else:
            停止()
            上升()
            下降()
            左转()
    else:
        magicbit.rgb().show_color(neopixel.hsl(200, 20, 3))
basic.forever(on_forever)
