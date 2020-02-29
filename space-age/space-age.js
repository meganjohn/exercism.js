//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const secondsInEarthYear = 31557600;

const secondsInAYear = {
  "earth": secondsInEarthYear,
  "mercury": secondsInEarthYear * 0.2408467,
  "venus": secondsInEarthYear * 0.61519726,
  "mars": secondsInEarthYear * 1.8808158,
  "jupiter": secondsInEarthYear * 11.862615,
  "saturn": secondsInEarthYear * 29.447498,
  "uranus": secondsInEarthYear * 84.016846,
  "neptune": secondsInEarthYear * 164.79132
};

export const age = (planet, seconds) => (seconds/secondsInAYear[planet]).toFixed(2) * 1;
