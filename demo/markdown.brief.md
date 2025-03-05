# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

Paragraphs are separated by a blank line. This is a paragraph. _Italic_, **bold**, `monospace` and ~~strikethrough~~. 

> This is a blockquote
> It spans multiple lines

[Link with title](http://nodeca.github.io/pica/demo/ "title text!")

![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

[Anchor text][id]
![Alt text][id]

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

Unordered list

- Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
    - Facilisis in pretium nisl aliquet
* Very easy!

Ordered list

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


Here's a fenced code block:

```js
// comment
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```


## Math Equations

Inline math equations go in like so: $\omega = d\phi / dt$. Display
math should get its own line and be put in in double-dollarsigns:

$$I = \int \rho R^{2} dV$$

$$
c² = a² + b² 
$$

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.


## Horizontal Rules
___

---

***


## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |


Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |



