import { COLORS } from "./colors.ts"
import { TOKENS } from "./tokens.ts"
import { MARKDOWN_TOKENS } from "./languages/markdown.ts"
import { BASH_TOKENS } from "./languages/bash.ts"
import { JSON_TOKENS } from "./languages/json.ts"

export const theme = {
  name: "Lasik",
  $schema: "vscode://schemas/color-theme",
  type: "dark",
  colors: COLORS,
  tokenColors: [...TOKENS, ...MARKDOWN_TOKENS, ...BASH_TOKENS, ...JSON_TOKENS],
}

await Deno.writeTextFile(
  "../themes/Lasik-color-theme.json",
  JSON.stringify(theme)
)
