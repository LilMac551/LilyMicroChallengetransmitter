let char = ""
let receivedchar = ""
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    basic.clearScreen()
    char = "" + char + "."
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    radio.sendString(char)
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    
    if (receivedString == "A") {
        receivedchar = ".-"
    }
    
    if (receivedString == "B") {
        receivedchar = "-..."
    }
    
    if (receivedString == "C") {
        receivedchar = "-.-."
    }
    
    if (receivedString == "D") {
        receivedchar = "-.."
    }
    
    if (receivedString == "E") {
        receivedchar = "."
    }
    
    if (receivedString == "F") {
        receivedchar = "..-."
    }
    
    if (receivedString == "G") {
        receivedchar = "--."
    }
    
    if (receivedString == "H") {
        receivedchar = "...."
    }
    
    if (receivedString == "I") {
        receivedchar = ".."
    }
    
    if (receivedString == "J") {
        receivedchar = ".---"
    }
    
    if (receivedString == "K") {
        receivedchar = "-.-"
    }
    
    if (receivedString == "L") {
        receivedchar = ".-.."
    }
    
    if (receivedString == "M") {
        receivedchar = "--"
    }
    
    if (receivedString == "N") {
        receivedchar = "-."
    }
    
    if (receivedString == "O") {
        receivedchar = "---"
    }
    
    if (receivedString == "P") {
        receivedchar = ".--."
    }
    
    if (receivedString == "Q") {
        receivedchar = "--.-"
    }
    
    if (receivedString == "R") {
        receivedchar = ".-."
    }
    
    if (receivedString == "S") {
        receivedchar = "..."
    }
    
    if (receivedString == "T") {
        receivedchar = "-"
    }
    
    if (receivedString == "U") {
        receivedchar = "..-"
    }
    
    if (receivedString == "V") {
        receivedchar = "...-"
    }
    
    if (receivedString == "W") {
        receivedchar = "..--"
    }
    
    if (receivedString == "X") {
        receivedchar = "-..-"
    }
    
    if (receivedString == "Y") {
        receivedchar = "-.--"
    }
    
    if (receivedString == "Z") {
        receivedchar = "--.."
    }
    
    if (receivedString == "1") {
        receivedchar = ".----"
    }
    
    if (receivedString == "2") {
        receivedchar = "..---"
    }
    
    if (receivedString == "3") {
        receivedchar = "...--"
    }
    
    if (receivedString == "4") {
        receivedchar = "....-"
    }
    
    if (receivedString == "5") {
        receivedchar = "....."
    }
    
    if (receivedString == "6") {
        receivedchar = "-...."
    }
    
    if (receivedString == "7") {
        receivedchar = "--..."
    }
    
    if (receivedString == "8") {
        receivedchar = "---.."
    }
    
    if (receivedString == "9") {
        receivedchar = "----."
    }
    
    if (receivedString == "0") {
        receivedchar = "-----"
    }
    
    if (receivedchar == char) {
        basic.showIcon(IconNames.Yes)
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    basic.clearScreen()
    char = "" + char + "-"
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    basic.clearScreen()
    char = ""
})
basic.forever(function on_forever() {
    
})
