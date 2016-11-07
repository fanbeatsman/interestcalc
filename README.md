# interestcalc
fanma.me:3000 . I like to deploy stuff :)

## Installation

```sh
$ git clone https://github.com/fanbeatsman/interestcalc.git
$ npm install
```

## Building, testing and deploying
```sh
$ npm run build
$ npm test
$ npm start
```
This deploys a very simple node server listening on port 3000 of both public and home ip. Go to 127.0.0.1:3000 or 0.0.0.0:3000 or [yourpublicip]:3000.


## Design choices

* **jade:** Originally, since I noticed I had to support different currencies, it would be the natural follow up to support different languages. I was going to use jade's placeholder functionalities to only use placeholder strings instead of static ones. This ensures that plain text is exchangable easily from language to language. However, I did not have time to implement different languages in the end.
* **Jest** Facebook's testing framework. Never used it, but I was intrigued by the notion of snapshot testing, so I gave it a try and tried to learn it. Unfortunately, the test-renderer for react has some bugs at the moment (see github issue below). Usually I would use Jasmine, but I did get setup way faster with jest.

## Possible avenues to explore
* Switch to prod build of react
* Internationalize the app (especially considering one of the deliverables was have different currencies) by using placeholders with jade or react instead of static strings.
* Add E2E tests that check at the level of DOM manipulation. Right now, I didn't do it because of a known bug with jester that makes it difficult. https://github.com/facebook/react/issues/7386
* Add automated building with gulp, grunt etc.

## Misc.
*Should have stuck with the deadline or at least communicated my timeline, I greatly underestimated my workload at school.
*Should have asked questions, a lot of clarifications could have been useful. eg(did not know what was meant by changing currency, also confusions about interest, is it compounded, is it by year etc.). Especially for the currency, I feel like I did not complete it the way it was intended. My currency is purely cosmetic and does not do anything, I feel like it would have made more sense if it actually converts the currencies.
*All in all a very fun challenge and refreshing compared to the usual technical interview.
