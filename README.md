# minimal-bsky-jetstream-client
A zero-dependency partial drop-in replacement for @skyware/jetstream in <2kB. 

`jetstream.min.js` is <1.5kB raw, <1.2kB minified; `tinyjetstream.js` is <0.5kB raw.

# Usage
`Jetstream` conforms to a small subset of the `@skyware/jetstream` API.
```
import { Jetstream } from 'https://cdn.jsdelivr.net/npm/mbjc@1.0.1/jetstream.min.js'

const jetstream = new Jetstream();

jetstream.onTweet(event => {
    // shorthand for .onCreate("app.bsky.feed.post"), as this is the most common use case.
});

jetstream.onCreate("app.bsky.graph.follow", event => {
  console.log(event.commit.record.text);
});

jetstream.onDelete("app.bsky.feed.post", event => {
  // ...
});

jetstream.start();

jetstream.stop();
```

`TinyJetstream` is even smaller.

```
import { TinyJetstream as Jetstream } from 'https://cdn.jsdelivr.net/npm/mbjc@1.0.1/tinyjetstream.js'
const jetstream = new Jetstream();
jetstream.onTweet = e => { console.log(e); };
jetstream.start();
jetstream.stop();
```

# Origin
This code is happily copied with small changes from https://jakelazaroff.com/words/drinking-from-the-bluesky-firehose/ where it is encouraged to "Use it, modify it and make something cool."