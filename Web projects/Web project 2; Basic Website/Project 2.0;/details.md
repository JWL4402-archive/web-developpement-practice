# Original goal:
- Header
- Footer
- 3 pages
    - Home
        - Introduction section
    - Languages
        - Summary of the languages I learned
        - Uses collapsable text menus
        - Side bar with links to specific menu destinations
    - About

# Completed:
- Header
- Footer
- 2 pages (didn't know what to put in about section)
    - Home
        - Introduction section
    - Languages
        - Summary of the languages I learned
        - Collapsable text menus (buggy, not done the way I wanted)
        - Side bar with links to specific menu destinations (doesn't extend with collapsible text, borderline functional)

## Successes
- Multiple page
- I like the navigation bar
- Alright color combination

## Things to improve/things that caused trouble
- Javascript
    - Wasn't working at all. I had to use inline onclick event listeners in order to make the collapsible menus function. I wanted to
      make the side bar the same length as the collapsible menu in the 'languages' section, but it didn't work at all.
    - Could not reference IDs, but could access classes. I tried putting the <script> at the bottom, and using a "DOMContentLoad" event
      listener, and a window.onload = function(){}.
