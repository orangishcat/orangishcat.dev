This was a very abrupt end to a long project. I learned quite a lot from it though, and although I wanted to add much more to Foam, sometimes it just doesn't work out.

I learned _plenty_ from this project though.

- I familiarized myself with Rust even more
- I learned Slint as a powerful, cross-platform native application framework
- I learned all about SQLite, its syntax, and how incredibly useful it is
- I implemented FTS using a SQLite database
- I designed yet another application's UI from scratch (though I did take a lot of inspiration from Zed's UI and other wonderful applications out there)
- I used a pinkish-gray color palette that I got from Penpot. I had never worked with a palette remotely similar to this before, and I'm glad it worked out well
- I dealt with native UI headaches (now I understand why people use frameworks like Electron and Tauri, making native UI sucks)
- I set up auto-update on an application using `cargo-packager-updater`

Some ideas that I wanted to add but never got around to it:

- Fully local productivity tool (e.g. task tracker, etc)
- Feed aggregation (e.g. RSS feed, notification and message feeds from all sorts of applications, like GitHub, Slack, etc.)
- Highly extensible plugin system

There are plenty of great alternatives for these, and I guess not a lot of them are fully local, so there's room to expand if I wanted to. However this project is absolutely not designed to do any of those things (all the Schoology-related stuff is hard-wired into the code). Maybe I might choose to rewrite this as a new, totally different project.
