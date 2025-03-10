import MARKDOWN from "./markdown.ts"
import BASH from "./bash.ts"
import JSON from "./json.ts"
import { ColorPaletteType } from "../editorColors.ts"

const TEXT_MARKUP = [
  {
    scope: "emphasis",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    scope: "strong",
    settings: {
      fontStyle: "bold",
    },
  },
  {
    scope: "markup.underline",
    settings: {
      fontStyle: "underline",
    },
  },
  {
    scope: "markup.italic",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    scope: "markup.strikethrough",
    settings: {
      fontStyle: "strikethrough",
    },
  },
]

const BASE = [
  {
    scope: [
      "meta.embedded",
      "source.groovy.embedded",
      "string meta.image.inline.markdown",
      "variable.legacy.builtin.python",
    ],
    settings: {
      foreground: "#D4D4D4",
    },
  },
  {
    scope: "header",
    settings: {
      foreground: "#000080",
    },
  },
  {
    scope: ["comment"],
    settings: {
      foreground: "#a1add8b3",
      fontStyle: "italic",
    },
  },
  {
    scope: "constant.language",
    settings: {
      foreground: "#569CD6",
    },
  },
  {
    scope: [
      "constant.numeric",
      "variable.other.enummember",
      "keyword.operator.plus.exponent",
      "keyword.operator.minus.exponent",
    ],
    settings: {
      foreground: "#B5CEA8",
    },
  },
  {
    scope: "constant.regexp",
    settings: {
      foreground: "#646695",
    },
  },
  {
    scope: "entity.name.tag",
    settings: {
      foreground: "#569CD6",
    },
  },
  {
    scope: "entity.name.tag.css",
    settings: {
      foreground: "#D7BA7D",
    },
  },
  {
    scope: "entity.other.attribute-name",
    settings: {
      foreground: "#9CDCFE",
    },
  },
  {
    scope: [
      "entity.other.attribute-name.class.css",
      "entity.other.attribute-name.class.mixin.css",
      "entity.other.attribute-name.id.css",
      "entity.other.attribute-name.parent-selector.css",
      "entity.other.attribute-name.pseudo-class.css",
      "entity.other.attribute-name.pseudo-element.css",
      "source.css.less entity.other.attribute-name.id",
      "entity.other.attribute-name.scss",
    ],
    settings: {
      foreground: "#D7BA7D",
    },
  },
  {
    scope: "invalid",
    settings: {
      foreground: "#F44747",
    },
  },

  {
    scope: "markup.bold",
    settings: {
      foreground: "#569CD6",
      fontStyle: "bold",
    },
  },
  {
    scope: "markup.heading",
    settings: {
      foreground: "#569CD6",
      fontStyle: "bold",
    },
  },

  {
    scope: "markup.inserted",
    settings: {
      foreground: "#B5CEA8",
    },
  },
  {
    scope: "markup.deleted",
    settings: {
      foreground: "#CE9178",
    },
  },
  {
    scope: "markup.changed",
    settings: {
      foreground: "#569CD6",
    },
  },
  {
    scope: "markup.inline.raw",
    settings: {
      foreground: "#CE9178",
    },
  },
  {
    scope: "punctuation.definition.tag",
    settings: {
      foreground: "#808080",
    },
  },
  {
    scope: ["meta.preprocessor", "entity.name.function.preprocessor"],
    settings: {
      foreground: "#569CD6",
    },
  },
  {
    scope: "meta.preprocessor.string",
    settings: {
      foreground: "#CE9178",
    },
  },
  {
    scope: "meta.preprocessor.numeric",
    settings: {
      foreground: "#B5CEA8",
    },
  },
  {
    scope: "meta.structure.dictionary.key.python",
    settings: {
      foreground: "#9CDCFE",
    },
  },
  {
    scope: "meta.diff.header",
    settings: {
      foreground: "#569CD6",
    },
  },
  {
    scope: "storage",
    settings: {
      foreground: "#569CD6",
    },
  },
  {
    scope: "storage.type",
    settings: {
      foreground: "#569CD6",
    },
  },
  {
    scope: ["storage.modifier", "keyword.operator.noexcept"],
    settings: {
      foreground: "#569CD6",
    },
  },
  {
    scope: ["string", "meta.embedded.assembly"],
    settings: {
      foreground: "#CE9178",
    },
  },
  {
    scope: "string.tag",
    settings: {
      foreground: "#CE9178",
    },
  },
  {
    scope: "string.value",
    settings: {
      foreground: "#CE9178",
    },
  },
  {
    scope: "string.regexp",
    settings: {
      foreground: "#D16969",
    },
  },
  {
    scope: [
      "punctuation.definition.template-expression.begin",
      "punctuation.definition.template-expression.end",
      "punctuation.section.embedded",
    ],
    settings: {
      foreground: "#569CD6",
    },
  },
  {
    scope: ["meta.template.expression"],
    settings: {
      foreground: "#D4D4D4",
    },
  },
  {
    scope: [
      "support.type.vendored.property-name",
      "support.type.property-name",
      "variable.css",
      "variable.scss",
      "variable.other.less",
      "source.coffee.embedded",
    ],
    settings: {
      foreground: "#9CDCFE",
    },
  },
  {
    scope: "keyword",
    settings: {
      foreground: "#569CD6",
    },
  },
  {
    scope: "keyword.control",
    settings: {
      foreground: "#569CD6",
    },
  },
  {
    scope: "keyword.operator",
    settings: {
      foreground: "#D4D4D4",
    },
  },
  {
    scope: [
      "keyword.operator.new",
      "keyword.operator.expression",
      "keyword.operator.cast",
      "keyword.operator.sizeof",
      "keyword.operator.alignof",
      "keyword.operator.typeid",
      "keyword.operator.alignas",
      "keyword.operator.instanceof",
      "keyword.operator.logical.python",
      "keyword.operator.wordlike",
    ],
    settings: {
      foreground: "#569CD6",
    },
  },
  {
    scope: "keyword.other.unit",
    settings: {
      foreground: "#B5CEA8",
    },
  },
  {
    scope: [
      "punctuation.section.embedded.begin.php",
      "punctuation.section.embedded.end.php",
    ],
    settings: {
      foreground: "#569CD6",
    },
  },
  {
    scope: "support.function.git-rebase",
    settings: {
      foreground: "#9CDCFE",
    },
  },
  {
    scope: "constant.sha.git-rebase",
    settings: {
      foreground: "#B5CEA8",
    },
  },
  {
    scope: [
      "storage.modifier.import.java",
      "variable.language.wildcard.java",
      "storage.modifier.package.java",
    ],
    settings: {
      foreground: "#D4D4D4",
    },
  },
  {
    scope: "variable.language",
    settings: {
      foreground: "#569CD6",
    },
  },
  {
    scope: [
      "entity.name.function",
      "support.function",
      "support.constant.handlebars",
      "source.powershell variable.other.member",
      "entity.name.operator.custom-literal",
    ],
    settings: {
      foreground: "#DCDCAA",
    },
  },
  {
    scope: [
      "support.class",
      "support.type",
      "entity.name.type",
      "entity.name.namespace",
      "entity.other.attribute",
      "entity.name.scope-resolution",
      "entity.name.class",
      "storage.type.numeric.go",
      "storage.type.byte.go",
      "storage.type.boolean.go",
      "storage.type.string.go",
      "storage.type.uintptr.go",
      "storage.type.error.go",
      "storage.type.rune.go",
      "storage.type.cs",
      "storage.type.generic.cs",
      "storage.type.modifier.cs",
      "storage.type.variable.cs",
      "storage.type.annotation.java",
      "storage.type.generic.java",
      "storage.type.java",
      "storage.type.object.array.java",
      "storage.type.primitive.array.java",
      "storage.type.primitive.java",
      "storage.type.token.java",
      "storage.type.groovy",
      "storage.type.annotation.groovy",
      "storage.type.parameters.groovy",
      "storage.type.generic.groovy",
      "storage.type.object.array.groovy",
      "storage.type.primitive.array.groovy",
      "storage.type.primitive.groovy",
    ],
    settings: {
      foreground: "#4EC9B0",
    },
  },
  {
    scope: [
      "meta.type.cast.expr",
      "meta.type.new.expr",
      "support.constant.math",
      "support.constant.dom",
      "support.constant.json",
      "entity.other.inherited-class",
    ],
    settings: {
      foreground: "#4EC9B0",
    },
  },
  {
    scope: [
      "keyword.control",
      "source.cpp keyword.operator.new",
      "keyword.operator.delete",
      "keyword.other.using",
      "keyword.other.directive.using",
      "keyword.other.operator",
      "entity.name.operator",
    ],
    settings: {
      foreground: "#C586C0",
    },
  },
  {
    scope: [
      "variable",
      "meta.definition.variable.name",
      "support.variable",
      "entity.name.variable",
      "constant.other.placeholder",
    ],
    settings: {
      foreground: "#9CDCFE",
    },
  },
  {
    scope: ["variable.other.constant", "variable.other.enummember"],
    settings: {
      foreground: "#4FC1FF",
    },
  },
  {
    scope: "variable.parameter",
    settings: {
      foreground: "#FC7E9BE6",
    },
  },
  {
    scope: ["meta.object-literal.key"],
    settings: {
      foreground: "#9CDCFE",
    },
  },
  {
    scope: [
      "support.constant.property-value",
      "support.constant.font-name",
      "support.constant.media-type",
      "support.constant.media",
      "constant.other.color.rgb-value",
      "constant.other.rgb-value",
      "support.constant.color",
    ],
    settings: {
      foreground: "#CE9178",
    },
  },
  {
    scope: [
      "punctuation.definition.group.regexp",
      "punctuation.definition.group.assertion.regexp",
      "punctuation.definition.character-class.regexp",
      "punctuation.character.set.begin.regexp",
      "punctuation.character.set.end.regexp",
      "keyword.operator.negation.regexp",
      "support.other.parenthesis.regexp",
    ],
    settings: {
      foreground: "#CE9178",
    },
  },
  {
    scope: [
      "constant.character.character-class.regexp",
      "constant.other.character-class.set.regexp",
      "constant.other.character-class.regexp",
      "constant.character.set.regexp",
    ],
    settings: {
      foreground: "#D16969",
    },
  },
  {
    scope: ["keyword.operator.or.regexp", "keyword.control.anchor.regexp"],
    settings: {
      foreground: "#DCDCAA",
    },
  },
  {
    scope: "keyword.operator.quantifier.regexp",
    settings: {
      foreground: "#D7BA7D",
    },
  },
  {
    scope: ["constant.character", "constant.other.option"],
    settings: {
      foreground: "#569CD6",
    },
  },
  {
    scope: "constant.character.escape",
    settings: {
      foreground: "#D7BA7D",
    },
  },
  {
    scope: "entity.name.label",
    settings: {
      foreground: "#C8C8C8",
    },
  },
  {
    scope: "constant",
    settings: {
      foreground: "#FFB1A3E6",
    },
  },
  {
    scope: "constant.character.escape",
    settings: {
      foreground: "#25B0BCE6",
    },
  },
  {
    scope: "entity.name",
    settings: {
      foreground: "#FAC29AE6",
    },
  },
  {
    scope: "entity.name.function",
    settings: {
      foreground: "#02BBCCE6",
    },
  },
  {
    scope: "entity.name.tag",
    settings: {
      foreground: "#E95678E6",
      fontStyle: "",
    },
  },
  {
    scope: ["entity.name.type", "storage.type.cs"],
    settings: {
      foreground: "#FAC29AE6",
    },
  },
  {
    scope: "entity.other.attribute-name",
    settings: {
      foreground: "#F09483E6",
      fontStyle: "italic",
    },
  },
  {
    scope: "entity.other.inherited-class",
    settings: {
      foreground: "#FAB795E6",
    },
  },
  {
    scope: "entity.other.attribute-name.id",
    settings: {
      foreground: "#25B0BCE6",
    },
  },
  {
    scope: [
      "entity.other.attribute-name.pseudo-element",
      "entity.other.attribute-name.pseudo-class",
    ],
    settings: {
      foreground: "#FAB795E6",
    },
  },
  {
    scope: ["entity.name.variable", "variable"],
    settings: {
      foreground: "#E95678E6",
    },
  },
  {
    scope: "keyword",
    settings: {
      foreground: "#D993FFE6",
      fontStyle: "italic",
    },
  },
  {
    scope: "keyword.operator",
    settings: {
      foreground: "#BBBBBB",
    },
  },
  {
    scope: [
      "keyword.operator.new",
      "keyword.operator.expression",
      "keyword.operator.logical",
      "keyword.operator.delete",
    ],
    settings: {
      foreground: "#B877DBE6",
    },
  },
  {
    scope: "keyword.other.unit",
    settings: {
      foreground: "#F09483E6",
    },
  },
  {
    scope: "markup.quote",
    settings: {
      foreground: "#FAB795B3",
      fontStyle: "italic",
    },
  },
  {
    scope: ["markup.heading", "entity.name.section"],
    settings: {
      foreground: "#E95678E6",
    },
  },
  {
    scope: "markup.bold",
    settings: {
      foreground: "#B877DBE6",
      fontStyle: "bold",
    },
  },
  {
    scope: "markup.italic",
    settings: {
      foreground: "#25B0BCE6",
      fontStyle: "italic",
    },
  },
  {
    scope: ["markup.inline.raw", "markup.fenced_code.block"],
    settings: {
      foreground: "#F09483E6",
    },
  },
  {
    scope: "markup.underline.link",
    settings: {
      foreground: "#FAB795E6",
    },
  },
  {
    scope: "storage",
    settings: {
      foreground: "#B877DBE6",
      fontStyle: "italic",
    },
  },
  {
    scope: ["string.quoted", "string.template"],
    settings: {
      foreground: "#FAB795E6",
    },
  },
  {
    scope: "string.regexp",
    settings: {
      foreground: "#F09483E6",
    },
  },
  {
    scope: "string.other.link",
    settings: {
      foreground: "#F09483E6",
    },
  },
  {
    scope: "support",
    settings: {
      foreground: "#FAC29AE6",
    },
  },
  {
    scope: "support.function",
    settings: {
      foreground: "#25B0BCE6",
    },
  },
  {
    scope: "support.variable",
    settings: {
      foreground: "#E95678E6",
    },
  },
  {
    scope: ["support.type.property-name", "meta.object-literal.key"],
    settings: {
      foreground: "#E95678E6",
    },
  },
  {
    scope: "support.type.property-name.css",
    settings: {
      foreground: "#BBBBBB",
    },
  },
  {
    scope: ["variable.language"],
    settings: {
      foreground: "#FAC29AE6",
      fontStyle: "italic",
    },
  },
  {
    scope: "variable.parameter",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    scope: "string.template meta.embedded",
    settings: {
      foreground: "#BBBBBB",
    },
  },
  {
    scope: "punctuation.definition.tag",
    settings: {
      foreground: "#E95678B3",
      fontStyle: "",
    },
  },
  {
    scope: "punctuation.separator",
    settings: {
      foreground: "#BBBBBB",
    },
  },
  {
    scope: "punctuation.definition.template-expression",
    settings: {
      foreground: "#B877DBE6",
    },
  },
  {
    scope: "punctuation.section.embedded",
    settings: {
      foreground: "#B877DBE6",
    },
  },
  {
    scope: "punctuation.definition.list",
    settings: {
      foreground: "#F09483E6",
    },
  },
  {
    scope: "token.info-token",
    settings: {
      foreground: "#6796E6",
    },
  },
  {
    scope: "token.warn-token",
    settings: {
      foreground: "#CD9731",
    },
  },
  {
    scope: "token.error-token",
    settings: {
      foreground: "#F44747",
    },
  },
  {
    scope: "token.debug-token",
    settings: {
      foreground: "#B267E6",
    },
  },
]

function generateTokenColors(type: ColorPaletteType) {
  // TODO: The colors based on the selected theme need to be updated inside the individual language token files as well
  return [
    ...TEXT_MARKUP,
    ...BASE,
    ...BASH[type],
    ...MARKDOWN[type],
    ...JSON[type],
  ]
}

// Export token colors for the three different Lasik variants
export default {
  LIGHT: generateTokenColors("LIGHT"),
  DARK: generateTokenColors("DARK"),
  HC: generateTokenColors("HC"),
}
