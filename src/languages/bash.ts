export const BASH_TOKENS = [
  {
    name: "[BASH] Punctuation: ${Variable}",
    scope: ["punctuation.definition.variable.shell"],
    settings: {
      foreground: "#E9567870",
    },
  },
  {
    name: "[BASH] Punctuation: $((Arithmetic Evaluation))",
    scope: [
      "punctuation.definition.evaluation.arithmetic.begin.shell",
      "punctuation.definition.evaluation.arithmetic.end.shell",
    ],
    settings: {
      foreground: "#B5CEA8",
    },
  },
  {
    name: "[BASH] Punctuation: $(Command Evaluation)",
    scope: [
      "punctuation.definition.evaluation.parens.begin.shell",
      "punctuation.definition.evaluation.parens.end.shell",
    ],
    settings: {
      foreground: "#F9C859",
    },
  },
  {
    name: "[BASH] Command names",
    scope: ["entity.name.command.shell"],
    settings: {
      foreground: "#4EC9B0",
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
