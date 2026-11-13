---
title: Intro
---

The LMS (learning management system) our school uses is very clunky, so I've wanted to make an alternative client for ages now.

And actually, I had in the past. The predecessor to this project is `schoology-ics` ([GitHub](https://github.com/orangishcat/schoology-ics)), which takes Schoology's calendar export link (a `webcal://` URL) and uses the Schoology API to fill in missing assignment information as well as provide handy utility features (e.g. ability to mark an assignment as done, even if unsubmitted).

This turns an ugly calendar such as this:

![[./Attachments/Pasted image 20261111205319.png|512]]

(Yes, this is what the actual website UI looks like, maybe slightly better without Schoology Plus)

to this:

![[./Attachments/Pasted image 20261111205445.png|512]]

The calendar UI isn't mine, it's Apple Calendar's UI. Schoology-ICS essentially transformed one ICAL file into another, making the end result much more viewable and useful.

The main features being:

- Assignments are stacked per day rather than placed at their due dates
  - So this creates a nice stacked view rather than a bunch of assignments grouped at 8am, and a bunch more at 11:59 PM which is how my teachers usually assign their due dates.
- Submission and Mark as done tracking. Very handy; no more submitting "done" to assignments which don't need any submissions but the teacher doesn't know how to disable them.

Schoology-ICS was clunky though. API operations were done via clicking links, for example:
![[./Attachments/Pasted image 20261111211555.png]]
And Apple Calendar didn't support HTML rendering anywhere, which is why there are so many emojis everywhere.

I wanted to bring the features of Schoology-ICS over to a native desktop app, creating maybe something publishable or at least something that I would be happy with using.
