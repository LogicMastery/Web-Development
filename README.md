# Basic Fundamentals of HTML

# What is HTML?

- HyperText Markup Language
- It is not a programming language.
- 100% of websites use HTML

HTML is the structure behind every website on the internet.

It’s the backbone behind every website. We layer code on top of HTML, but without HTML, there is no website.

The first thing you should learn in web development is HTML.

# HTML vs. HTML5

You will often see “HTML5.” Consider HTML and HTML5 to be the same thing these days.

HTML5 is the fifth iteration of HTML, and there will not be an HTML6, so consider HTML and HTML5 to be the same thing.

## 

# HTML Syntax

```html
<element title="Second attr here">
    Some text in here
</element>
```

## 

# Elements:

### `<p> = paragraph`

```html
**<p>a paragraph where you can write lots of text in here</p>**
```

## 

# HTML Proper Structure

```html
<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>
        <p>
            Hello World with proper structure!
        </p>
    </body>
</html>
```

## 

# Page tab

### `<title>` = A title for our page tab

```html
<!DOCTYPE html>
<html>
    <head>
        **<title>Hello my name is Shadow</title>**

    </head>
    <body>
        <p>Hello, welcome to my basic website, with a proper HTML structure.</p>
    </body>
</html>
```

## 

# DOCTYPE

## All HTML documents must start with a `<!DOCTYPE>` declaration.

## The declaration is not an HTML tag.
## It is an "information" to the browser about what document type to expect.

## In HTML 5, the declaration is simple: `<!DOCTYPE html>`

## 

# Attributes

## An HTML attribute is **a piece of markup language used to adjust the behavior or display of an HTML element**. 
## For example, attributes can be used to change the color, size, or functionality of HTML elements.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Attributes</title>
</head>
<body>
    **<p title="It's going to be evening soon!">This is an Attribute</p>**
</body>
</html>
```

## 

# Heading

## HTML headings are **titles or subtitles that you want to display on a webpage**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Heading</title>
</head>
<body>
    **<h1>H1 is the biggest header</h1>
    <h2>H2 is this size</h2>
    <h3>H3 is this size</h3>
    <h4>H4 is this size</h4>
    <h5>H5 is this size</h5>
    <h6>H6 is the smallest header</h6>**

    <p>
        Some regular text in here.
    </p>
</body>
</html>
```

## 

# Line Breaks

## The `<br>`

## Element represents a line break.
## While line breaks are usually represented in visual media by physically
## moving subsequent text to a new line, a style sheet or user agent would
## be equally justified in causing line breaks to be rendered in a 
## different manner, for instance as green dots, or as extra spacing.

## &nbsp; or non-breaking space

## A commonly used HTML entity is the **non-breaking space**:
## &nbsp; A non-breaking space is a space that will not break into a 
## new line. Two words separated by a non-breaking space will stick 
## together (not break into a new line). This is handy when breaking the 
## words might be disruptive.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Line Breaks</title>
</head>
<body>
    <p>
        I am on line 1 <br>
        I am on line 2 <br/>
        I am on line 3 <br/>
        I am on line 4 <br/>
    </p>

    <p>
        <hr>
        The space &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; between here | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
    </p>
</body>
</html>
```

## 

# Strong & Bold

## Bold

## The HTML **`<b>` element defines bold text, without any extra importance**.

## Strong

## `<strong>`: The Strong Importance element. The `<strong>` HTML element **indicates that its contents have strong importance, seriousness, or urgency**. Browsers typically render the contents in bold type.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bold & Strong</title>
</head>
<body>
    <p>
        **<b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>** 
        **<strong>Iure reprehenderit necessitatibus, deleniti quia beatae unde error</strong>**
    </p>
</body>
</html>
```

## 

# Italic & Emphasis

## Italic

## The HTML <i> element defines a part of text in an alternate voice or mood. **The content inside is typically displayed in italic**.
## Tip: The <i> tag is often used to indicate a technical term, a 
## phrase from another language, a thought, a ship name, etc.

## Emphasis

## **The em element represents stress emphasis of its contents**.
## The level of emphasis that a particular piece of content has is given 
## by its number of ancestor em elements. The placement of emphasis changes
## the meaning of the sentence. The element thus forms an integral part of
## the content.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Italic and Emphasis</title>
</head>
<body>
    Regular Text<br>
    **<i>Italic</i>**<br/>
    **<em>Emphasis</em>**

    <p><em><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong></em> Obcaecati recusandae, veniam possimus natus enim animi.</p>
</body>
</html>
```

## 

# Underline

## The `<u>` tag represents some text that 
## is unarticulated and styled differently 
## from normal text, such as misspelled words or proper names in Chinese text. The 
## content inside is typically displayed with an underline. You can change this 
## with CSS (see example below).

## **Tip:** Avoid using the `<u>` 
## element where it could be confused for a hyperlink!

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Underline</title>
</head>
<body>
    <p>
        This is a regular text <br>
        <b>This is a Bold text</b> <br/>
        <strong>This is a Strong text</strong> <br/>
        <i>This is an Italic text</i> <br/>
        <em>This is an Emphasis text</em> <br/>
        **<u>This is an Underline text</u>** <br/>
        <br/>
        <b><strong><i><em><u>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia eius molestiae id corporis eligendi? Eligendi?</u></em></i></strong></b>
    </p>
</body>
</html>
```

## 

# Comments

## Comments are chunks of code you can write that won’t be executed by the program

## In the HTML code comments look like a special HTML element that won’t show up when your page is rendered

## Careful: Code comments will still appear in your source code. They are not 100% hidden.

```html
<!doctype html>
<html>
    <head>
        <title>Comments</title>
    </head>
    <body>
        <!-- START BLOG POST -->
        <h1>Welcome to my first web page</h1>

        <p>Hello, thank you for joining me in this web viewing experience.</p>

        <p>
            <!-- When you learn how to add a link, link to my Twitter profile -->
            Feel free to contact me at twitter.com/@KalobTaulien
        </p>

        <!-- END BLOG POST -->
        <h1>Welcome to my 2nd web page</h1>

        <p>Hello, thank you for joining me in this web viewing experience.</p>

        <p>
            <!-- When you learn how to add a link, link to my Twitter profile -->
            Feel free to contact me at twitter.com/@KalobTaulien
        </p>

        <!-- START BLOG POST -->
        <h1>Welcome to my 3rd web page</h1>

        <p>Hello, thank you for joining me in this web viewing experience.</p>

        <p>
            <!-- When you learn how to add a link, link to my Twitter profile -->
            Feel free to contact me at twitter.com/@KalobTaulien
        </p>

        <!-- END BLOG POST -->
        <h1>Welcome to my 4rth web page</h1>

        <p>Hello, thank you for joining me in this web viewing experience.</p>

        <p>
            <!-- When you learn how to add a link, link to my Twitter profile -->
            Feel free to contact me at twitter.com/@KalobTaulien
        </p>
    </body>
</html>
```

## 

# Links

## <a> tag

## The `<a>` tag **defines a hyperlink, which is used to link from one page to another**.
## The most important attribute of the `<a>` element is the href 
## attribute, which indicates the link's destination. By default, links 
## will appear as follows in all browsers: An unvisited link is underlined 
## and blue.

## Target attributes

## In HTML, the `"target"` attribute is **used to specify where the linked document should open when a user clicks on a link**.
## It can be set to various values such as `"_blank"` to open in a new 
## window or tab, `"_self"` to open in the same window, or `"_parent"` to open 
## in the parent frame.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Links Tutorial</title>
</head>
<body>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, atque, sunt eos incidunt dolorum voluptas, quae pariatur dolores in dolor adipisci repellendus libero obcaecati deserunt. Veritatis sit voluptates optio itaque.</p>

    <!-- It redirects you to a different page in the same tab -->
    **<a href="https://codingforeverybody.com/">Click here to learn more....</a>** <br>
    <!-- It redirects you to a new tab of the page -->
    **<a href="https://codingforeverybody.com/" target="_blank">Click here to learn more....</a>** <br />
</body>
</html>

```

## 

# Internal Links

## Internal links  - are hyperlinks that point from one page on a domain to a different page on the same domain. 
## In other words, internal links connect pages on the same website, meaning that the source and target domain are the same.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Internal links</title>
</head>
<body>
    <a href="#bottom">Click here to skip all the way to the bottom of tha page</a> <br>
    <a href="#middle">Click here to skip all the way to the middle of tha page</a>
    <p id="top">Top</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p id="middle">Middle</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p id="bottom">Bottom</p>

    <a href="#top">Click here to go back to the top of the page</a>
</body>
</html>
```

## 

# Relative Links

## Relative URLs don’t contain full web address. With relative URL we start automatically from the address the browser 
## currently at then we add path components and then extension. Explicitly tells the browser to use the current folder.

### Relative Link 1

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Relative Link 1</title>
</head>
<body>

    <h1>Page #1</h1>
    <h2>Welcome to my homepage</h2>
    <a href="relative-link-2.html">Click here to go to the about page section</a>
    
</body>
</html>
```

### Relative Link 2

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Relative Link 2</title>
</head>
<body>

    <h1>Page #2</h1>
    <h2>Welcome to my about page section</h2>
    <a href="relative-link-1.html">Click here to go back to the homepage section</a>
    
</body>
</html>
```

## 

# Image element

## **The `<img>` tag - is used to embed an image in an HTML page**.
## Images are not technically inserted into a web page; images are linked 
## to web pages. The `<img>` tag creates a holding space for the 
## referenced image.

## `alt=””` - alt will only use if something breaks on your file if it can’t load.

## `src=””` - src can only use to redirect to a local file or through url.

## `title=””` - means just adding a title to your file when you hover your file it shows the title.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Images</title>
</head>
<body>
    <h1>Welcome to my first image</h1>
    <img src="https://placehold.co/600x400/orange/white" alt="Did I break something?" title="my first image" width="300" height="700">
    <img src="../../../../image file/orange.jpeg" alt="Did I break something?" title="My 2nd Image" width="600" height="400">
    <img src="//placehold.co/600x400/orange/whit" alt="Did I break something?" title="my broken image" width="300" height="700">
</body>
</html>
```

## 

# Block And Inline Elements

## **A block-level element always starts on a new line, and the browsers 
automatically add some space (a margin) before and after the element**. A block-level element always takes up the full width available (stretches out to the left and right as far as it can).

## Inline elements **display in a line**.
They do not force the text after them to a new line. An anchor (or 
link) is an example of an inline element. You can put several links in a
row, and they will display in a line.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Block & Inline elements</title>
    <link rel="stylesheet" href="/Lessons/CSS/block-and-inline-elements.css">
</head>
<body>
    <!-- BLOCK ELEMENTS -->
    <p style="border: 1px solid red;">This is a paragraph</p> <h1 style="border: 1px solid red;">This is a heading tag <a href="images.html" style="border: 1px solid red;">this is a link</a></h1>
    <!-- INLINE ELEMENTS -->
    <span style="border: 1px solid red;">span #1</span> <span style="border: 1px solid red;">span #2</span> <span style="border: 1px solid red;">span #3</span>
    <a href="images.html" style="border: 1px solid red;">this is a link</a>
</body>
</html>
```

## 

# Div element

## The <div> tag **defines a division or a section in an HTML document**. The <div> tag is used as a container for ## HTML elements - which is then styled with CSS or manipulated with JavaScript.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Div element</title>
</head>
<body>
    <div style="border: 1px solid red;">
        Div #1
    </div>

    <span style="border: 1px solid red;">
        span #1
    </span>

    <span style="border: 1px solid red;">
        span #2
    </span>

    <div style="border: 1px solid red;">
        Div #2
    </div>
    
    <span style="border: 1px solid red;">
        span #1
    </span>

    <span style="border: 1px solid red;">
        span #2
    </span>

    <span style="border: 1px solid red;">
        span #3
    </span>
</body>
</html>
```

## 

# List Elements

## `<ul>` – unordered list. The `<ul>` element **represents an unordered list of items**; 
## that is, a list in which changing the order of the items would not change the meaning of list.

## `<ol>` – ordered list. The `<ol>` element **represents a list (or sequence) of items**;
## that is, a list in which the items are intentionally ordered, such that
## changing the order would change the meaning of the list.

## The `<li>` HTML element is **used to represent an item in a list**.
## It must be contained in a parent element: an ordered list (`<ol>`), an unordered list (`<ul>`), or a menu (`<menu>`). In 
## menus and unordered lists, list items are usually displayed using bullet
## points.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>List Items</title>
</head>
<body>
    <h1>Unordered list</h1>

    <ul>
        <li>List Number #1</li>
        <li>List Number #2</li>
        <li>List Number #3</li>
    </ul>

    <h1>Ordered List</h1>
    
    <ol>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
    </ol>
</body>
</html>
```

## 

# Tables

## The `<table>` HTML element represents **tabular data**—that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.

## `<tr>:` **The Table Row element**.
 The `<tr>` HTML element defines a row of cells in a table. The 
row's cells can then be established using a mix of `<td>` (data 
cell) and `<th>` (header cell) elements.

## `<th>`: **The Table Header element**.
## The `<th>` HTML element defines a cell as the header of a group of 
## table cells and may be used as a child of the `<tr>` element. The 
## exact nature of this group is defined by the scope and headers 
## attributes.

## The `<thead>` tag is **used to group header content in an HTML table**.
## The `<thead>` element is used in conjunction with the `<tbody>`
## and `<tfoot>` elements to specify each part of a table (header, 
## body, footer).

## The `<tbody>` tag is **used to group the body content in an HTML table**.
## The `<tbody>` element is used in conjunction with the `<thead>`
## and `<tfoot>` elements to specify each part of a table (body, 
## header, footer). Browsers can use these elements to enable scrolling of 
## the table body independently of the header and footer.

## The `<tfoot>` tag is **used to group footer content in an HTML table**.
## The `<tfoot>` element is used in conjunction with the `<thead>`
## and `<tbody>` elements to specify each part of a table (footer, 
## header, body).

## The **`<td>`** HTML element defines a cell of a table that contains data and may be used as a child of the `<tr>` element.

## `colspan`

## Contains a non-negative integer value that indicates how many columns the data cell spans or extends. The default value is `1`. User agents dismiss values higher than 1000 as incorrect, setting to the default value (`1`).

## `headers`

## Contains a list of space-separated strings, each corresponding to the `id` attribute of the `<th>` elements that provide headings for this table cell.

## `rowspan`

## Contains a non-negative integer value that indicates for how many rows the data cell spans or extends. The default value is `1`; if its value is set to `0`, it extends until the end of the table grouping section (`<thead>`, `<tbody>`, `<tfoot>`, even if implicitly defined), that the cell belongs to.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Table</title>
</head>
<body>
    <table border="1" width="100%">
        <thead>
            <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td colspan="2">Row 1</td>
                
                <td>Row 3</td>
                <td>Row 4</td>
            </tr>

            <tr>
                <td rowspan="2">Row 5</td>
                <td>Row 6</td>
                <td colspan="2" rowspan="2">Row 7</td>
                
            </tr>

            <tr>
                
                <td>Row 10</td>
                
                <td>Row 12</td>
            </tr>

            <tr>
                <td>Row 13</td>
                <td>Row 14</td>
                <td>Row 15</td>
                <td>Row 16</td>
            </tr>
        </tbody>

        <tfoot>
            <tr>
                <td>foot 1</td>
                <td>foor 2</td>
                <td>foot 3</td>
                <td>foot 4</td>
            </tr>
        </tfoot>
    </table>
    
</body>
</html>
```

## 

# Advanced HTML

# The Document Object Model or The DOM

## The Document Object Model (DOM) is **a programming API for HTML and XML documents**.
## It defines the logical structure of documents and the way a document is accessed and manipulated.

![Screenshot 2024-03-24 at 5.30.32 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/042dd190-75be-4846-a385-323762c0a981/164ed843-4d9b-4f9b-bbb6-124ac992aec7/Screenshot_2024-03-24_at_5.30.32_PM.png)

![Screenshot 2024-03-24 at 5.33.20 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/042dd190-75be-4846-a385-323762c0a981/657a1eac-84a5-421b-8a73-5370727512b9/Screenshot_2024-03-24_at_5.33.20_PM.png)

## 

# XHTML

## HTML stands for **EXtensible HyperText Markup Language**.
## XHTML is a stricter, more XML-based version of HTML. XHTML is HTML 
## defined as an XML application. XHTML is supported by all major browsers.

```html
<doctype html>
    <html>
        <head>
            <title></title>
        </head>

        <body>
            <br />
            <hr />
            <img />
        </body>
    </html>
```

## 

# Inline CSS

## Inline CSS is **the technique to define the single element with the insert style sheets in an HTML document**.
## We can add CSS in three approaches: Inline, Internal, and External. It 
## has the interactive and unique style to create a single HTML element; we
## can define the inline CSS on the style attribute.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Inline CSS</title>
</head>
<body>
    <div style="border: 1px solid red; background-color: #6595ed;">
        This is a div
    </div>

    <div style="border: 1px solid red; background-color: #469138;">
        This is a second div
    </div>
</body>
</html>
```

## 

# Internal CSS

## An internal CSS is **used to define a style for a single HTML page**. An internal CSS is defined in the <head> section of an HTML page, within a <style> element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Internal CSS</title>

    <style>
        h1 {
            font-size: 90px;
        }
        
        body {
            background-color: #6595ed;
        }

        div {
            background-color: #3ab790;
        }

        .orange {
            background-color: #ea8314;
        }

        #violet {
            background-color: #ea66ec;
        }
    </style>
</head>
<body>

    <h1>
        Inline CSS
    </h1>

    <div class="orange">
        Div #1
    </div>

    <div id="violet">
        Div #2
    </div>

    <div>
        Div #3
    </div>
</body>
</html>
```