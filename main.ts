radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 4) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
basic.showString("hola")
music.playMelody("C5 G A G D F G C ", 120)
basic.forever(function () {
    radio.setGroup(200)
})
