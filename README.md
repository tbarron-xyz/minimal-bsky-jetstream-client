# minimal-bsky-jetstream-client
A zero-dependency partial drop-in replacement for @skyware/jetstream in <2kB.

# Usage
```
import { Jetstream } from 'https://cdn.jsdelivr.net/gh/tbarron-xyz/minimal-bsky-jetstream-client@latest/jetstream.min.js'


const jetstream = new Jetstream();

jetstream.onTweet(event => {
    // shorthand for .onCreate("app.bsky.feed.post"), as this is the most common use case.
});

jetstream.onCreate("app.bsky.graph.follow", event => {
  console.log(event.detail.commit.record.text);
});

jetstream.onDelete("app.bsky.feed.post", event => {
  // ...
});

jetstream.start();
```

# Origin
This code is happily copied with small changes from https://jakelazaroff.com/words/drinking-from-the-bluesky-firehose/ where it is encouraged to "Use it, modify it and make something cool."