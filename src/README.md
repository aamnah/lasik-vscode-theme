- All color values (editor background, sidebar colors etc.) are in `colors/`. Colors determine Visual Studio Code colors, everything that is not code for a programming language.
- All token values (textmate tokens, language syntax, comment color etc.) are in `tokens/`. Tokens determine syntax highlighting for various programming languages

### Generate the theme files with Deno

```bash
# Run the program
deno run main.ts

# Run the program and watch for file changes
deno task dev
```
