# What is React.js
`React is open-source Javascript created by Facebook for building complex, interative UIs in web and mobile applications.`

# Interview questions about react
***Q***:

***A***:

### React's Different
React's core purpose is to build UI components; it is often referred to as just the "V"(View) in an "MVC" architecture.

### React lifecycle
Initialization ---> update ---> Destruction
      |               |             |
      v               v             v
componentWillMount
componentDidMount
                componentWillUpdate
                                componentWillUnmount

### JSX
JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with Javascript/React code.

### Flux && MVC
Flux: Action ---> Dispatcher ---> Store ---> View
MVC: Modal(data), View(UI), Controller(logic).

# What is canvas
Added in [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5), the HTML [<canvas>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element can be used to draw graphics via scripting in [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

## The basic shape of canvas
* Rectangle
    - [fillRect(x, y, width, height)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect)
        Draws a filled rectangle.
    - [strokeRect(x, y, width, height)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeRect)
        Draws a rectangle outline.
    - [clearRect(x, y, width, height)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect)
        Clears the specified rectangular area, making it fully transparent.

* Path
    - [beginpath()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath)
        Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.
    - [closePath()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/closePath)
        Adds a straight line to the path, going to the start of the current sub-path.
    - [stroke()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke)
        Draws the shape by stroking its outline.
    - [fill()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill)
        Draws a solid shape by filling the path's content area.
    - [moveTo(x, y)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo)
        Moves the pen to the coordinates specified by x and y.
    - [lineTo(x, y)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo)
        Draws a line from current drawing position to the position specified by x and y.
    - [arc(x, y, radius, startAngle, endAngle, anticlockwise)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc)
        Draws an arc which is centered at (x, y) position with redius r starting at startAngle and ending at endAngle going in the given direction indicated by anticlockwise(defaulting to clockwise).
    - [arcTo(x1, y1, x2, y2, radius)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arcTo)
        Draws an arc with the given control points and radius, connected to the previous point by a straight line.
    - [quadraticCurveTo(cp1x, cp1y, x, y)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
        Draws a quadratic Bezier curve from the current pen position to the end point specified by x and y, using the control point specified by cp1x, cp1y.
    - [bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
        Draws a cubic Bezier curve from the current pen position to the end point specified by x and y, using the control points specified by (cp1x, cp1y) and (cp2x, cp2y).

* Style
    - fillStyle = 'color variable'; // red or #ff0000 or rgba(255, 0, 0, 0).
    - strokeStyle = 'color variable';
    - globalAlpha = transparentValue;

## Other basic content

* Text
    - it's totally something about font.
    - [fillText(text, x, y ...maxWidth)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText)
    - [strokeText(text, x, y ...maxWidth)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeText)

* Image
    - [drawImage(image, x, y)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)
    - drawImage(image, x, y, width, height) - scaling the image.
    - drawImage(drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)) - slicing the image

* Transformations
    - [save()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save)
    - [restore()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/restore)
    - [translate()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/translate) - move the canvas and its origin on the grid.
    - [rotate(angle)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate)
    - [scale(x, y)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale)
    - [transform(a, b, c, d, e, f)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform) - Multiplies the current transformation matrix with the matrix described by its arguments.

* Animations


