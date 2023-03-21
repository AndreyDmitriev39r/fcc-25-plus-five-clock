## Build a 25 + 5 clock

Objective - to build an app similar to this:

[Example](https://25--5-clock.freecodecamp.rocks/)

## Requirements

### Technologies: possible options

**vanilla**


* HTML

* JavaScript

* CSS

**CSS preprocessors**

* Bootstrap

* SASS

**JS frameworks**

* React

* Redux

* jQuery

### User stories

* #1: I can see an element with `id="break-label"` that contains a string (e.g. "Break Length").

* #2: I can see an element with `id="session-label"` that contains a string (e.g. "Session Length").

* #3: I can see two clickable elements with corresponding IDs: `id="break-decrement"` and `id="session-decrement"`.

* #4: I can see two clickable elements with corresponding IDs: `id="break-increment"` and `id="session-increment"`.

* #5: I can see an element with a corresponding `id="break-length"`, which by default (on load) displays a value of 5.

* #6: I can see an element with a corresponding `id="session-length"`, which by default displays a value of 25.

* #7: I can see an element with a corresponding `id="timer-label"`, that contains a string indicating a session is initialized (e.g. "Session").

* #8: I can see an element with corresponding `id="time-left"`. NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. `25:00`).

* #9: I can see a clickable element with a corresponding `id="start_stop"`.

* #10: I can see a clickable element with a corresponding `id="reset"`.

* #11: When I click the element with the id of `reset`, any running timer should be stopped, the value within `id="break-length"` should return to `5`, the value within `id="session-length"` should return to 25, and the element with `id="time-left"` should reset to its default state.

* #12: When I click the element with the id of `break-decrement`, the value within `id="break-length"` decrements by a value of 1, and I can see the updated value.

* #13:  When I click the element with the id of `break-increment`, the value within `id="break-length"` increments by a value of 1, and I can see the updated value.

* #14: When I click the element with the id of `session-decrement`, the value within `id="session-length"` decrements by a value of 1, and I can see the updated value.

* #15: When I click the element with the id of `session-increment`, the value within `id="session-length"` increments by a value of 1, and I can see the updated value.

* #16: I should not be able to set a session or break length to <= 0.

* #17: I should not be able to set a session or break length to > 60.

* #18: When I first click the element with `id="start_stop"`, the timer should begin running from the value currently displayed in `id="session-length"`, even if the value has been incremented or decremented from the original value of 25.

* #19: If the timer is running, the element with the id of `time-left` should display the remaining time in `mm:ss` format (decrementing by a value of 1 and updating the display every 1000ms).

* #20: If the timer is running and I click the element with `id="start_stop"`, the countdown should pause.

* #21: If the timer is paused and I click the element with `id="start_stop"`, the countdown should resume running from the point at which it was paused.

* #22: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of `timer-label` should display a string indicating a break has begun.

* #23: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the `id="break-length"` element.

* #24: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of `timer-label` should display a string indicating a session has begun.

* #25: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the `id="session-length"` element.

* #26: When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 `audio` tag and have a corresponding `id="beep"`.

* #27: The `audio` element with `id="beep"` must be 1 second or longer.

* #28: The `audio` element with id of `beep` must stop playing and be rewound to the beginning when the element with the id of reset is clicked.

### Testing

*codepen template*

https://codepen.io/pen?template=MJjpwO

*CDN link to run tests in other environment*

https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js