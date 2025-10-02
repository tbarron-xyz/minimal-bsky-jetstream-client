#!/usr/bin/env node
import { TinyJetstream } from './tinyjetstream.js';

const n = parseInt(process.argv[2]) || 10;
const messages = [];

const jetstream = new TinyJetstream();
jetstream.onTweet = (e) => {
  messages.push({
    did: e.did,
    text: e.commit.record.text,
    timeMs: Date.now()
  });
  if (messages.length >= n) {
    console.log(JSON.stringify(messages));
    jetstream.stop();
    process.exit(0);
  }
};

jetstream.start();