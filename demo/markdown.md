An h1 header
============

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


Paragraphs are separated by a blank line.

This is another paragraph. _Italic_, **bold**, `monospace` and ~~strikethrough~~. 

## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar




## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


An h2 header
------------



## Code

Inline `code`

Here's an indented code block:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

Block code "fences"

```
Sample text here...
```

~~~
define foobar() {
    print "Welcome to flavor country!";
}
~~~


Syntax highlighting for code fences

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

~~~python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
~~~


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


## Blockquotes
> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

> A list within a blockquote:
>
> - asterisk 1
> - asterisk 2
> - asterisk 3

> Formatting within a blockquote:
>
> ### header
>
> Link: [Example](http://example.com)


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


## Links

[Link anchor text](http://dev.nodeca.com)

[Link with title](http://nodeca.github.io/pica/demo/ "title text!")

[Anchor text for reference link][id]

Autoconverted link: https://github.com/nodeca/pica


## Images

![Minion - alt text for image link](https://octodex.github.com/images/minion.png)
![Alt text for image with reference link][id]
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

## Footnotes and Reference Links

Like links, Images also have a footnote style syntax

[Link text][id]
![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## HTML

This is inline <span>html</html>.
And this is an html block.

<table>
  <tr>
    <th>Column 1</th>
    <th>Column 2</th>
  </tr>
  <tr>
    <td>Row 1 Cell 1</td>
    <td>Row 1 Cell 2</td>
  </tr>
  <tr>
    <td>Row 2 Cell 1</td>
    <td>Row 2 Cell 2</td>
  </tr>
</table>