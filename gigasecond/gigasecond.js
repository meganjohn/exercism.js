//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const GS_in_ms = 10 ** 12;

export const gigasecond = time => new Date(time.getTime() + GS_in_ms);
