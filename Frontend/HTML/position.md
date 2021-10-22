## Position

- Defaults to static, which means the element is positioned according to the normal flow of the document.
- Elements can be custom positioned with relative, absolute, fixed, or sticky.
  - relative means relative to its static position.
  - absolute means relative to the first parent with a position other than static (defaults to window).
  - fixed means the element is removed from the normal document flow, and stays in a fixed position relative to the viewport.
  - sticky toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport where it “sticks” in place (i.e. fixed).
