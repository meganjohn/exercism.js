//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
var COLORS = ["black", 
                "brown", 
                "red", 
                "orange", 
                "yellow", 
                "green", 
                "blue", 
                "violet", 
                "grey", 
                "white"];

export const value = ([tens, ones]) => colorValue(tens)*10 + colorValue(ones);

function colorValue(color) {
    return COLORS.indexOf(color);
}