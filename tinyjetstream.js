export class TinyJetstream {  // usage: const j = new Jetstream(); j.onTweet = (tweet) => { console.log(tweet.commit.record.text) }
  ws = null;

  start() {
    this.stop();
    this.ws = new WebSocket("wss://jetstream1.us-east.bsky.network/subscribe?wantedCollections=app.bsky.feed.post");
    this.ws.onmessage = ev => {
      const data = JSON.parse(ev.data);
      if (data.kind !== "commit") return;
      if (data.commit.operation === "create") {
        this.onTweet(data);
      }
    };
  }

  stop() { if (this.ws) this.ws.close(); }

  onTweet = (e) => {} // text is located at e.commit.record.text
}