import EDITOR_COLORS from "./editorColors.ts"
// alpha()
// takes a #ffffff color and an opacity value (0-1.0) and returns hexadecimal #ffffffff value (with opacity in hexadecimal format)
export function alpha(color: string, opacity: number) {
  const hexadecimal = Math.round(opacity * 255).toString(16)
  const value = `${color}${hexadecimal}`.toLowerCase()
  return value
}
// console.log(alpha("#E95678", 0.9)) // #e95678e6

// Takes a hexadecimal color value #ffffffff with transparency and converts it to a transparency-adjusted hex value #ffffff
// to convert an #ffffffff value to a transparency-adjusted hex, you need to know the background color on top of which the transparency wil be applied
export function opaque(
  hex: string,
  bgColor = EDITOR_COLORS["DARK"]["editor.background"]
  // TODO: Fix this bgColor, it needs to be theme aware
) {
  if (!/^#([0-9A-Fa-f]{8})$/.test(hex)) return hex // Return unchanged if not in #RRGGBBAA format

  // Extract RGBA components
  let r = parseInt(hex.slice(1, 3), 16)
  let g = parseInt(hex.slice(3, 5), 16)
  let b = parseInt(hex.slice(5, 7), 16)
  let a = parseInt(hex.slice(7, 9), 16) / 255 // Alpha normalized (0 to 1)

  // Extract background RGB
  let br = parseInt(bgColor.slice(1, 3), 16)
  let bg = parseInt(bgColor.slice(3, 5), 16)
  let bb = parseInt(bgColor.slice(5, 7), 16)

  // Blend with background using: blended = foreground * alpha + background * (1 - alpha)
  let newR = Math.round(r * a + br * (1 - a))
  let newG = Math.round(g * a + bg * (1 - a))
  let newB = Math.round(b * a + bb * (1 - a))

  // Convert back to hex
  return `#${newR.toString(16).padStart(2, "0")}${newG
    .toString(16)
    .padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`
}

// Example usage:
// console.log(opaque("#ff000080")) // Semi-transparent red on COLORS["editor.background"] -> #800105
// console.log(opaque("#0000ff40")) // More transparent blue on editor background -> #010247
// console.log(opaque("#00ff00ff")) // Fully opaque green -> "#00ff00"
// console.log(opaque("#ff00ff00")) // Fully transparent -> COLORS["editor.background"]
// console.log(opaque("#E95678e6")) // #d24e6d
