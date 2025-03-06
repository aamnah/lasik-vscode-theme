import { PALETTE } from "../colors.ts"
import { alpha, opaqueHex } from "../utils.ts"

const JSON_COLORS = {
  PUNCTUATION_KEYS: opaqueHex(alpha(PALETTE.CORAL, 0.35)),
  PUNCTUATION_VALUES: opaqueHex(alpha(PALETTE.PEACH, 0.35)),
}

export const JSON_TOKENS = [
  {
    name: "[JSON] Punctuation: Quoted Strings - Keys",
    scope: [
      "punctuation.support.type.property-name.begin.json",
      "punctuation.support.type.property-name.end.json",
    ],
    settings: {
      foreground: JSON_COLORS.PUNCTUATION_KEYS,
    },
  },
  {
    name: "[JSON] Punctuation: Quoted Strings - Values",
    scope: [
      "punctuation.definition.string.begin.json",
      "punctuation.definition.string.end.json",
    ],
    settings: {
      foreground: JSON_COLORS.PUNCTUATION_VALUES,
    },
  },
]
