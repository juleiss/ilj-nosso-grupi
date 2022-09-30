let tocar = false
let p2 = 0
let p1 = 0
input.onPinPressed(TouchPin.P0, function () {
    tocar = false
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("Bora winx")
    basic.clearScreen()
    basic.pause(randint(1000, 5000))
    basic.showIcon(IconNames.Giraffe)
    basic.pause(500)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    if (tocar == false) {
        tocar = true
        p2 += 1
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . # # #
            . . # # #
            `)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (tocar == false) {
        tocar = true
        p1 += 1
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # . . .
            # # . . .
            `)
    }
})
basic.forever(function () {
	
})
