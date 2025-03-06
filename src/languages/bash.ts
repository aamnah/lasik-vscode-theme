import { PALETTE } from "../colors.ts"
import { alpha, opaqueHex } from "../utils.ts"

const BASH_COLORS = {
  COMMAND_NAME: PALETTE.TURQUOISE,
  PUNCTUATION_COMMAND_EVALUATION: PALETTE.YELLOW,
  PUNCTUATION_ARITHMETIC_EVALUATION: PALETTE.SAGE,
  PUNCTUATION_VARIABLES: opaqueHex(alpha(PALETTE.CORAL, 0.45)),
}

export const BASH_TOKENS = [
  {
    name: "[BASH] Punctuation: ${Variable}",
    scope: ["punctuation.definition.variable.shell"],
    settings: {
      foreground: BASH_COLORS.PUNCTUATION_VARIABLES,
    },
  },
  {
    name: "[BASH] Punctuation: $((Arithmetic Evaluation))",
    scope: [
      "punctuation.definition.evaluation.arithmetic.begin.shell",
      "punctuation.definition.evaluation.arithmetic.end.shell",
    ],
    settings: {
      foreground: BASH_COLORS.PUNCTUATION_ARITHMETIC_EVALUATION,
    },
  },
  {
    name: "[BASH] Punctuation: $(Command Evaluation)",
    scope: [
      "punctuation.definition.evaluation.parens.begin.shell",
      "punctuation.definition.evaluation.parens.end.shell",
    ],
    settings: {
      foreground: BASH_COLORS.PUNCTUATION_COMMAND_EVALUATION,
    },
  },
  {
    name: "[BASH] Command names",
    scope: ["entity.name.command.shell"],
    settings: {
      foreground: BASH_COLORS.COMMAND_NAME,
    },
  },
  {
    name: "[BASH] Parameter Expansion",
    scope: ["meta.parameter-expansion"],
    settings: {
      foreground: "#FC7E9BE6",
    },
  },
]
