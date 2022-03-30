input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
basic.showString("hola")
music.playMelody("C5 G A G D F G C ", 120)
basic.forever(function () {
    radio.setGroup(200)
})
