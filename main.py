char = ""
receivedchar = ""

def on_button_pressed_a():
    global char
    basic.clear_screen()
    char = "" + char + "."
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.send_string(char)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    global receivedchar
    if receivedString == "A":
        receivedchar = ".-"
    if receivedString == "B":
        receivedchar = "-..."
    if receivedString == "C":
        receivedchar = "-.-."
    if receivedString == "D":
        receivedchar = "-.."
    if receivedString == "E":
        receivedchar = "."
    if receivedString == "F":
        receivedchar = "..-."
    if receivedString == "G":
        receivedchar = "--."
    if receivedString == "H":
        receivedchar = "...."
    if receivedString == "I":
        receivedchar = ".."
    if receivedString == "J":
        receivedchar = ".---"
    if receivedString == "K":
        receivedchar = "-.-"
    if receivedString == "L":
        receivedchar = ".-.."
    if receivedString == "M":
        receivedchar = "--"
    if receivedString == "N":
        receivedchar = "-."
    if receivedString == "O":
        receivedchar = "---"
    if receivedString == "P":
        receivedchar = ".--."
    if receivedString == "Q":
        receivedchar = "--.-"
    if receivedString == "R":
        receivedchar = ".-."
    if receivedString == "S":
        receivedchar = "..."
    if receivedString == "T":
        receivedchar = "-"
    if receivedString == "U":
        receivedchar = "..-"
    if receivedString == "V":
        receivedchar = "...-"
    if receivedString == "W":
        receivedchar = "..--"
    if receivedString == "X":
        receivedchar = "-..-"
    if receivedString == "Y":
        receivedchar = "-.--"
    if receivedString == "Z":
        receivedchar = "--.."
    if receivedString == "1":
        receivedchar = ".----"
    if receivedString == "2":
        receivedchar = "..---"
    if receivedString == "3":
        receivedchar = "...--"
    if receivedString == "4":
        receivedchar = "....-"
    if receivedString == "5":
        receivedchar = "....."
    if receivedString == "6":
        receivedchar = "-...."
    if receivedString == "7":
        receivedchar = "--..."
    if receivedString == "8":
        receivedchar = "---.."
    if receivedString == "9":
        receivedchar = "----."
    if receivedString == "0":
        receivedchar = "-----"
    if receivedchar == char:
        basic.show_icon(IconNames.YES)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    global char
    basic.clear_screen()
    char = "" + char + "-"
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global char
    basic.clear_screen()
    char = ""
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    pass
basic.forever(on_forever)
