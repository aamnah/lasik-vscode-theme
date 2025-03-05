import { base_colors } from "../colors.ts"

const MARKDOWN_COLORS = {
  TEXT: "#CCCCCC",
  HEADING: "#E95678E6",
  PUNCTUATION_TABLE: "",
  PUNCTUATION_BOLD: "#B877DB55",
  PUNCTUATION_ITALIC: "",
  PUNCTUATION_STRIKETHROUGH: "",
  PUNCTUATION_HEADING: "",
  PUNCTUATION_CODE: "#F0938357",
  PUNCTUATION_BLOCKQUOTE: "",
  PUNCTUATION_LINK_HREF: "",
  PUNCTUATION_LINK_IMAGE: "",
  PUNCTUATION_LINK_REF: "#5F838756",
  PUNCTUATION_LIST_ITEM: "",
}

export const MARKDOWN_TOKENS = [
  {
    name: "[MARKDOWN] Text",
    scope: ["text.html.markdown", "meta.paragraph.markdown"],
    settings: {
      foreground: MARKDOWN_COLORS.TEXT,
    },
  },
  {
    name: "[MARKDOWN] Heading",
    scope: ["markup.heading", "markup.heading.markdown"],
    settings: {
      foreground: MARKDOWN_COLORS.HEADING,
    },
  },
  {
    name: "[MARKDOWN] Emphasis: Italic",
    scope: "markup.italic.markdown",
    settings: {
      foreground: "#25B0BCE6",
      fontStyle: "italic",
    },
  },
  {
    name: "[MARKDOWN] Emphasis: Bold",
    scope: "markup.bold.markdown",
    settings: {
      foreground: "#B877DBE6",
      fontStyle: "bold",
    },
  },
  {
    name: "[MARKDOWN] Emphasis: Strikethrough",
    scope: "markup.strikethrough.markdown",
    settings: {
      foreground: "#61646D",
      fontStyle: "strikethrough",
    },
  },
  {
    name: "[MARKDOWN] Blockquote punctuation >`",
    scope: [
      "markup.quote.markdown",
      "punctuation.definition.quote.begin.markdown",
    ],
    settings: {
      foreground: "#6B99559A",
    },
  },
  {
    name: "[MARKDOWN] - + * Punctuation List",
    scope: "punctuation.definition.list.begin.markdown",
    settings: {
      foreground: "#6796E6",
    },
  },
  {
    name: "[MARKDOWN] Code (inline, fenced, maths)",
    scope: [
      "markup.raw.block.markdown",
      "markup.inline.raw.string.markdown",
      "markup.fenced_code.block.markdown",
      "markup.math.inline.markdown",
      "markup.math.block.markdown",
    ],
    settings: {
      foreground: "#F09483E6",
    },
  },
  {
    name: "[MARKDOWN] Horizontal rules --- and Table separators |",
    scope: [
      "meta.separator.markdown",
      "punctuation.definition.table.markdown",
      "punctuation.separator.table.markdown",
    ],
    settings: {
      foreground: "#2D456B",
    },
  },
  {
    name: "[MARKDOWN] Link href",
    scope: [
      "markup.underline.link.markdown",
      "markup.underline.link.image.markdown",
    ],
    settings: {
      foreground: "#F09483E6",
    },
  },
  {
    name: "[MARKDOWN] Link title",
    scope: [
      "meta.link.inline.markdown",
      "string.other.link.title.markdown",
      "string.other.link.description.title.markdown",
    ],
    settings: {
      foreground: "#FAB795E6",
    },
  },
  {
    name: "[MARKDOWN] Links description",
    scope: [
      "punctuation.definition.metadata.markdown",
      "punctuation.definition.link.description.begin.markdown",
      "punctuation.definition.link.description.end.markdown",
      "punctuation.definition.link.title.begin.markdown",
      "punctuation.definition.link.title.end.markdown",
    ],
    settings: {
      foreground: "#FAB795E6",
    },
  },
  {
    name: "[MARKDOWN] Image Link description",
    scope: ["string.other.link.description.markdown"],
    settings: {
      foreground: "#FFE998E6",
    },
  },
  {
    name: "[MARKDOWN] Color for reference link ID",
    scope: "constant.other.reference.link.markdown",
    settings: {
      foreground: "#5F8387",
    },
  },
  {
    name: "[MARKDOWN] Punctuation: reference link ![]()",
    scope: [
      "punctuation.definition.constant.markdown",
      "punctuation.definition.constant.begin.markdown",
      "punctuation.definition.constant.end.markdown",
      "punctuation.separator.key-value.markdown",
      "meta.link.reference.def.markdown",
    ],
    settings: {
      foreground: MARKDOWN_COLORS.PUNCTUATION_LINK_REF,
    },
  },
  {
    name: "[MARKDOWN] Punctuation: link ![]()",
    scope: [
      "punctuation.definition.metadata.markdown",
      "punctuation.definition.link.description.begin.markdown",
      "punctuation.definition.link.description.end.markdown",
      "punctuation.definition.link.title.begin.markdown",
      "punctuation.definition.link.title.end.markdown",
      "punctuation.definition.string.begin.markdown",
      "punctuation.definition.string.end.markdown",
    ],
    settings: {
      foreground: "#FAB7953D",
    },
  },
  {
    name: "[MARKDOWN] Punctuation: code `  ``` ~~~",
    scope: [
      "punctuation.definition.raw.markdown",
      "punctuation.definition.markdown",
    ],
    settings: {
      foreground: MARKDOWN_COLORS.PUNCTUATION_CODE,
    },
  },
  {
    name: "[MARKDOWN] Punctuation: heading #",
    scope: ["punctuation.definition.heading.markdown"],
    settings: {
      foreground: "#E956784A",
    },
  },
  {
    name: "[MARKDOWN] Punctuation: Italic _ *",
    scope: ["punctuation.definition.italic.markdown"],
    settings: {
      foreground: "#25AFBC4E",
    },
  },
  {
    name: "[MARKDOWN] Punctuation: Bold __ **",
    scope: ["punctuation.definition.bold.markdown"],
    settings: {
      foreground: MARKDOWN_COLORS.PUNCTUATION_BOLD,
    },
  },
  {
    name: "[MARKDOWN] Punctuation: strikethrough ~~",
    scope: ["punctuation.definition.strikethrough.markdown"],
    settings: {
      foreground: "#61646D5B",
    },
  },
]
