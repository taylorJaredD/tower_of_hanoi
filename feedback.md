# Project Feedback + Evaluation

| Score | Expectations |
|   --- | ---          |
|     0 | Incomplete   |
|     1 | Progressing  |
|     2 | Performing   |
|     3 | Excelling    |

## Deployment:

> Did you successfully deploy your project to github pages? Is the app's functionality the same deployed as it is locally?

Your Score: 2

Good job deploying what you have to GitHub Pages! How did you find working with branches in Git?

## Technical Requirements:

> Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

Your Score: 1

It certainly looks like you're off to a good start with your markup and styling in place. That said, you still have most of the technical requirements to work though. The three features you need to implement to make this a passing project are:

* Only one disk can be moved at a time
* Every move involves taking the top disk from one of the stacks and placing it on top of another stack
* No disk can be put on top of a smaller disk

You have until Monday January 8th, 2018 to submit a completed project, but I highly recommend trying to knock it out before next Friday, before the pace of the course really picks up and we get too far from the JavaScript lessons.

## Code Quality:

> Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code?

Your Score: 1

Your markup is clean and well organized. Your CSS contains a lot of "dead code" (i.e. commented out and/or unused), which you should consider deleting. If you need to get it back for any reason, it's all safely stored inside of Git! In your JavaScript, you're using both `$(document).ready()` and `window.onload`, which is redundant so just pick one and use that (probably `$(document).ready()`). Also, check your indentation in your JavaScript.


## Creativity/Interface:

> Is your user interface easy to use and understand? Does it make sense for the problem you're solving? Does your interface demonstrate creative design?

Your Score: 1

Your interface looks like it will suit your needs well enough, now all that you need is the missing functionality!

To make your interface better, consider making everything sized relatively to the window, so that the game board takes up more space. Also consider removing the default `margin` on the `<body>` element so that your user interface spans the entire viewport.
