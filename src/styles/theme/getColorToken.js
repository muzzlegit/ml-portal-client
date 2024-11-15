import hexRgb from "hex-rgb";

export default function getColorToken(hex) {
  return {
    100: hex,
    90: hexRgb(hex, { format: "css", alpha: 0.9 }),
    80: hexRgb(hex, { format: "css", alpha: 0.8 }),
    70: hexRgb(hex, { format: "css", alpha: 0.7 }),
    60: hexRgb(hex, { format: "css", alpha: 0.6 }),
    50: hexRgb(hex, { format: "css", alpha: 0.5 }),
    40: hexRgb(hex, { format: "css", alpha: 0.4 }),
    30: hexRgb(hex, { format: "css", alpha: 0.3 }),
    20: hexRgb(hex, { format: "css", alpha: 0.2 }),
    10: hexRgb(hex, { format: "css", alpha: 0.1 }),
  };
}
