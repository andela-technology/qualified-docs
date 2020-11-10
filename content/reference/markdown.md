---
title: Markdown
description: "Learn how to use Markdown to style content in Qualified"
tags:
  - markdown
  - formatting
note: "MOSTLY COPIED VERBATIM FROM https://help.github.com/articles/markdown-basics/ and https://help.github.com/articles/github-flavored-markdown/ !!!"
---

# Markdown Reference

Markdown allows you to write using a simple plain text format, which is converted to valid HTML for viewing on Qualified.

## Basic writing


### Paragraphs

Paragraphs in Markdown are just one or more lines of consecutive text followed by one or more blank lines.

```markdown
On July 2, an alien mothership entered Earth's orbit and deployed several dozen saucer-shaped "destroyer" spacecraft, each 15 miles (24 km) wide.

On July 3, the Black Knights, a squadron of Marine Corps F/A-18 Hornets, participated in an assault on a destroyer near the city of Los Angeles.
```

### Headings

You can create a heading by adding one or more `#` symbols and a space before your heading text. The number of `#` you use will determine the size of the heading, from one (largest) to six (smallest).

```markdown
# The largest heading (an <h1> tag)
## The second largest heading (an <h2> tag)
…
###### The 6th largest heading (an <h6> tag)
```

### Blockquotes

You can indicate blockquotes with a `>` followed by a space. Multiple lines 

```markdown
> Everyday life is like programming, I guess.
> If you love something you can put beauty into it.
> - Donald Knuth
```

### Styling text

You can make text *italic* or **bold**.

```markdown
*This text will be italic* so will _this_
**This text will be bold** as will __that__
```

Both bold and italic can use either a `*` or an `_` around the text for styling. This allows you to combine both bold and italic if needed.

```markdown
**Don't forget there's a _free lunch_ being served today!**
```

### Strikethrough

You can ~~strike~~ through a section of text by surrounding it with double `~`.

```markdown
This response ~~is no longer relevant~~.
```

## Lists

### Unordered lists

You can make an unordered list by typing either a `*` or a `-` then a space before each item.

```markdown
* Cat
* Dog
* Fish

- Red
- Green
- Blue
```

### Ordered lists

You can make an ordered list by typing a number followed by a `.` then a space before each item.

```markdown
1. Add dry ingredients
2. Add wet ingredients
3. Mix thoroughly
```

<div class="note-box note-box-info">
**Note:** The actual numbers are not critical, numbered lists will always start at `1` and count up sequentially from there.
</div>

### Nested lists

You can create nested lists by indenting each sublist by two, three, or four spaces.

```markdown
1. Gather Supplies
  * Wood pieces
  * Nails
2. Assemble
    1. Line items up
        * Align letters together
    2. Hammer nails into place
3. Paint
```

## Code formatting

### Inline formats

Use single backticks (`` ` ``) to format text in a special monospace format. Everything within the backticks appear as-is, with no other special formatting.

```markdown
On line 3, `LaunchRocketship()` should be `**launch**Rocketship()`.
```

### Multiple lines

You can use triple backticks (```` ``` ````) to format text as its own distinct block.

````markdown
Check out this neat program I wrote:

```
x = 0
x = 2 + 2
// what is x
```
````

### Syntax Highlighting
You can include the language of a block of code by tagging the block, with an optional starting line number:

````markdown
JavaScript Example:
```javascript
var foo = 1;
```

I noticed a problem here:
```javascript:34
var foo = 1;
return foo;
```
````

#### Multi-language Blocks

If you are developing a multi-language challenge, and want to include language-specific examples, Qualified has a special extension for Markdown.  Simply include multiple, tagged code examples in a row, and the correct one for the currently chosen language will show:

````markdown
```javascript:1
var foo = 1;
```
```ruby:1
foo = 1
```
```java:1
int foo = 1;
```
````

## Language Targeted Section Blocks

Qualified has further extended the concept of Multi-language blocks to allow you to enclose entire sections of markdown within `if` and `if-not` statements, similar to how Multi-language blocks work. These statements can target multiple languages at a time if you wish. Using this feature, you can selectively hide or show content based off of the active language, allowing you to manage your instructions for all languages and still target them directly as needed. 

The following example illustrates if the text inside each block would be shown or not:

````markdown
```if:javascript,ruby
will be shown if either javascript or ruby is active
```
```if-not:ruby
will be shown if any language other than ruby is selected
```
```if-not:java,javascript
will be shown if any languages other than java or javascript is selected
```
````

You can also include nested code blocks by using the alternative code fence syntax (~~~). 

````markdown
```if:java,javascript,c#
This text is only shown when java, javascript or C# is the active language

~~~java
// this code is only shown when java is active
~~~
~~~javascript
// this code is only shown when javascript is active
~~~
~~~c#
// this code is only shown when C# is active
~~~
```
````

<div class="note-box note-box-info">
Tip: You can use either `~~~` or <code>\`\`\`</code> as your top level fence for defining a block. We recommend always using <code>\`\`\`</code> for your top level blocks, so that its easier to identify nested blocks.
</div>
  
## Alert Boxes
  
An additional extension that Qualified has added is the ability to wrap your markdown within alert blocks, which allow you to call out certain sections. The syntax is similar to using code fences, but you add a `%` prefix before the alert type. 

**Examples:**
````markdown
```%default
A default light gray block. You can use markdown in here

## Header to show that you can use markdown inside of the alert
```

```%info
A blue info block
```

```%warn
A yellow warning/caution block
```

```%danger
A red block
```
````


## Documentation Blocks
Our documentation blocks are like alert boxes, but are designed to present documentation. Each block has a special format for handling the contents within it.  

### Definition List Blocks
Our most basic block, it uses a simple format to provide a definition list. `<dt>` elements are rendered whenever you end a line with a colon (`:`). All other items are rendered as a `<dd>` element.

````markdown
```%doc
Parameters:
Param 1
Param 1
Returns:
String
```
````

### Method Documentation
Our most powerful documentation block. You use JSON to define a method, its arguments, what it returns, constraints and any examples. Our markdown processor will render this JSON as a well formatted documentation section. It will also use our custom doc types formatting to render the documentation as it should for the specific language being taken in the challenge. 

````markdown
```%method-doc
{  
  "method": "intersect_arrays",
  "desc": "Combines the values within two arrays which are the same.",
  "args": {
    "arrA": {
      "type": "Array<Integer>"
    },
    "arrB": {
      "type": "Array<Integer>"
    }
  },
  "constraints": [
    "`0 <= arrA.length <= 10`",
    "`arrA` and `arrB` are never null"
  ],
  "returns": {
    "type": "Array<Integer>",
    "desc": "An intersected array that contains only the elements within both arrA and arrB"
  },
  "examples": [
    {
      "args": [[1,2,3], [2,3,4]],
      "returns": [2,3]
    },
    {
      "args": [[1,2,3, 6, 8, 9, 12], [1,2]],
      "returns": [1,2]
    }
  ]
}
```
```` 

This example would render as follows when viewing a Java challenge:

<img src="https://www.evernote.com/l/AAW0Pg1N2h5LarPpk_v8SY79QM_BPCINEAIB/image.png" style="max-width: 700px" />

And the same markdown would render as follows when viewing a Ruby challenge:

<img src="https://www.evernote.com/l/AAWxBvhw47lKkJzXZC-ustDU11RxZipCmZsB/image.png" style="max-width: 700px" />


## Links

You can create an inline link by wrapping link text in brackets (`[ ]`), and then wrapping the link in parentheses (`( )`).

For example, to create a hyperlink to *http://www.qualified.io*, with a link text that says, *Visit Qualified!*, you'd write this in Markdown: `[Visit Qualified!](http://www.qualified.io)`.

If you want to expose a hyperlink directly, you can simply include it in the code, and it will be automatically linked: `Visit http://www.qualified.io`

## Images

Qualified's Markdown editors support drag-and-drop images. Simply drag a file in from your file system, or copy and paste a file into the editor, to have the image uploaded and inserted automatically.

You an also click on the link below the editor to open a file dialog to select your images that way.

Almost any image file format is supported, and will be converted automatically if necessary.

If you want to insert image references manually, the format is similar to links, but with an exclamation mark at the front, like so:

```markdown
![Image Description](https://www.qualified.io/path/to/image.png)
```

The _Image Description_ portion will be used as the tooltip or alternative text if the image is missing or for screen readers.


## Tables

You can create tables by assembling a list of words and dividing them with hyphens `-` (for the first row), and then separating each column with a pipe `|`:

```markdown
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell
```

For aesthetic purposes, you can also add extra pipes on the ends:

```markdown
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

Note that the dashes at the top don't need to match the length of the header text exactly:

```markdown
| Name | Description          |
| ------------- | ----------- |
| Help      | Display the help window.|
| Close     | Closes a window     |
```

You can also include inline Markdown such as links, bold, italics, or strikethrough:

```markdown
| Name | Description          |
| ------------- | ----------- |
| Help      | ~~Display the~~ help window.|
| Close     | _Closes_ a window     |
```
