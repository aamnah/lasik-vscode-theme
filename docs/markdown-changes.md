# Markdown
Stuff that isn't available in defaults

- Indented code blocks don't get highlighted
- Math code blocks beginning and end `$$` are the same color as the rest of the text
- Horizontal rules are the same color as text
- Table headers do not have any colors
- Links, Image links, and Reference links are all the same color
- Strikethrough text is the same color as normal text

## Misc.
Here is some inline text and horizontal rules.. *Italic*, **bold**, `monospace` and ~~strikethrough~~. 
___

---

***

And here are some links

- [Anchor text](http://dev.nodeca.com)
- ![Minion - alt text for image link](https://octodex.github.com/images/minion.png)
- [Anchor text for reference link][id]
- ![Alt text for image with reference link][id]

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

## Code

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

## Maths
Inline math equations go in like so: $\omega = d\phi / dt$. Display
math should get its own line and be put in in double-dollarsigns:

$$I = \int \rho R^{2} dV$$

$$
I = \int \rho R^{2} dV
$$



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



