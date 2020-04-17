# Goal
The goal of this project is to make a website with multiple tabs. This is important because multiple tabs are essential to modern websites.





# Issues encountered
- Accordian button
    - Button not switching color properly (to show it was clicked) after being clicked.
        - The problem was with my CSS code. It wasn't written properly and didn't do anything when the active class was applied.
    - Panel content not appearing after clicking on the button.
        - The problem was with my 'panel' element. I believe I mispelled the function '.nextElementSibling', which caused it to return null.
    - Panel content not disappearing after being clicked a second time.
        - The issue was because instead of switching the elements .display to 'none' (to hide it), I tried to switch it to 'hidden' (not a thing).