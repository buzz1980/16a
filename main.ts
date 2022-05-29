let levend = false
let speler = 0
let meteoorx = 0
input.onButtonPressed(Button.A, function () {
    if (levend) {
        led.unplot(speler, 4)
        speler += -1
        if (speler < 0) {
            speler = 0
        }
        led.plot(speler, 4)
    }
})
input.onButtonPressed(Button.AB, function () {
    levend = true
    basic.clearScreen()
    speler = 2
    led.plot(speler, 4)
    while (levend) {
        meteoorx = randint(0, 4)
        for (let meteoory = 0; meteoory <= 4; meteoory++) {
            led.plot(meteoorx, meteoory)
            basic.pause(150)
            led.unplot(meteoorx, meteoory)
        }
        if (speler == meteoorx) {
            levend = false
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (levend) {
        led.unplot(speler, 4)
        speler += 1
        if (speler > 4) {
            speler = 4
        }
        led.plot(speler, 4)
    }
})
