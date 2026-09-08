This was a fun experience! It's quite a bit different from what I'm used to, as I usually make tools that are strictly function and useful in my own life. This project, though, was quite the opposite. I imagine I won't be playing this tetris game in my terminal much after I complete the project, and I don't expect others to do so either. This was mostly just a learning experience.

Well, how did the project do? Not too well, not a lot of people played, but that's no big deal I don't think, this project was mainly just for me to learn a bit of Rust.

And learn I did! I learned quite a few things over the course of this project.

- Rust! I completed an entire project with it. I battled against the borrow checker, used plenty of closures, used enums, experienced the power of the `match` statement, wrote basic composition, used a box, used the dynamic trait type, and plenty more. If learning Rust was like a day trip, I'd say I managed to do most of the important activities.
  - As for the language itself, I quite like the language design! It has all the modern features that are severely lacking in other languages I've used. For example:
    - Versatile `match` statement, I've only seen something like this in Python 3.10+.
    - Return errors as values. Really nice as it makes control flow and error handling explicit, but also they managed to do it without needing an `if` statement after every single line of code.
    - Composition! It's a very cool concept and probably even a better alternative to inheritance.
    - I don't know what it's called, but I can add methods to other classes using trait implementations. Very cool concept.
- Ratatui! The most popular and probably the best terminal UI library out there. Its API was very intuitive, and I picked it up quickly due to my webdev experience in the past.
  - I implemented basic layouts using the terminal UI, and it was simple yet very fun!
  - Ratatui has a lot of features similar to CSS. For example it can handle centering entire layouts natively (not just text!), very similar to CSS Flexbox, and has a Fill constraint that fills a fraction of the available space within its container, similar to CSS Grid.
  - Unfortunately I still hardcoded a lot of the layouts using fixed lengths and had to update them whenever I wanted to change it. This is because Ratatui doesn't have a constraint that sets the layout's height to the minimum possible height of its children, sorta like CSS `height: fit-content`.
- I didn't make any assets this time. Nonetheless, I still used a bit of FFmpeg and ImageMagick to create animated demos and whatnot.

Anyway, this was a pretty fun experience. Cool, that's it for today! I can finally move on to another project.
