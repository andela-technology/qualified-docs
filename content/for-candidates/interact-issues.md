---
title: "Interactive Sessions: Client Issues"
summary: "Learn more about what might be causing issues with your interactive session"
---

# Interactive Sessions: Client Issues

If you are starting an interactive session with someone else, and you get the message _"Unable to start an interactive session"_, the following tips can help determine the root cause, and hopefully get your session going quickly.

Qualified uses Firebase to create it's real-time interactive sessions. Without access to the Firebase service, your session will not work.

## "Unable to load Firebase"

This occurs when the library for Firebase is unable to be loaded. This is almost always caused by something like an ad-blocker preventing the client-side JavaScript library from loading.

* Ensure that you aren't using an adblocker on the Qualified domain, or at least whitelist the `firebase-*.js` library.
* Ensure you don't have any network-level firewalls preventing access to the Firebase javascript library.

## "Unable to connect to Firebase"

This occurs when the library has loaded, but the application is unable to connect to the Firebase servers.

* Ensure that you aren't blocking access to `*.firebaseio.com`.
* Ensure that you don't have any network-level firewalls preventing access to `firebaseio.com`.
* Ensure that you don't have anything preventing socket connections for real-time data.
* Check to see if there are any [known issues with the Firebase service](https://status.firebase.google.com/), which usually come back up on their own.
* If none of the above are true, try reloading the page anyway, and see if it's a temporary outage.

## "Unknown"

If an unknown error occurs, you can try the above, but focus on:

* Check to see if there are any [known issues with the Firebase service](https://status.firebase.google.com/), which usually come back up on their own.
* If none of the above are true, try reloading the page anyway, and see if it's a temporary outage.

# Contact Support

If you cannot find a solution above, please [contact Qualified support for more help](mailto:team@qualified.io?subject=Interactive%20Session%20Issues).
