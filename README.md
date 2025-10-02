# minimal-bsky-jetstream-client
A zero-dependency partial drop-in replacement for `@skyware/jetstream` in <1kB. 

`jetstream.js` is <1.5kB raw, <0.9kB minified; `tinyjetstream.js` is <0.5kB raw, <0.4kB minified.

# Usage
`Jetstream` conforms to a small subset of the `@skyware/jetstream` API. It supports `onCreate`, `onDelete` and `onUpdate` handlers, and only subscribes to the `wantedCollections` for which you've registered a handler. It also supports an optional endpoint constructor param.

`TinyJetstream` is even smaller. It only supports the default endpoint and only supports the `onTweet` handler.

In node, it can be imported via `import { Jetstream } from 'mbjc'` after running `npm install mbjc`. 

In deno or the browser, it can be imported via CDN with `import { Jetstream } from 'https://cdn.jsdelivr.net/npm/mbjc@1.0.3/jetstream.min.js'
`.
```
import { Jetstream } from 'https://cdn.jsdelivr.net/npm/mbjc@1.0.3/jetstream.min.js'

const jetstream = new Jetstream({ endpoint: "jetstream1.us-east.bsky.network" });

jetstream.onTweet(event => {
  console.log(event.commit.record.text);
});
// shorthand for .onCreate("app.bsky.feed.post"), as this is the most common use case.

jetstream.onCreate("app.bsky.graph.follow", event => {});
jetStream.onUpdate("app.bsky.feed.post", event => {});
jetstream.onDelete("app.bsky.feed.post", event => {});
jetstream.start();
jetstream.stop();
```


```
import { TinyJetstream as Jetstream } from 'https://cdn.jsdelivr.net/npm/mbjc@1.0.2/tinyjetstream.min.js'
const jetstream = new Jetstream();
jetstream.onTweet = e => { console.log(e); };
jetstream.start();
jetstream.stop();
```

# CLI Usage
Run `node index.js [n]` to collect `n` tweets (default 10) and output them as JSON.

```bash
$ node index.js 2
[{"did":"did:plc:example1","text":"Hello world","timeMs":1727891234567},{"did":"did:plc:example2","text":"Another tweet","timeMs":1727891234568}]
```

# Origin
This code is happily copied with small changes from https://jakelazaroff.com/words/drinking-from-the-bluesky-firehose/ where it is encouraged to "Use it, modify it and make something cool."
