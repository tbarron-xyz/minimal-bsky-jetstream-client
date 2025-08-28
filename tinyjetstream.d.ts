// Type definitions for TinyJetstream client

export interface CommitData {
  kind: "commit";
  commit: {
    collection: string;
    operation: "create" | "update" | "delete";
    [key: string]: any;
  };
  [key: string]: any;
}

export interface TinyJetstreamEventHandler {
  (data: CommitData): void;
}

export declare class TinyJetstream {
  ws: WebSocket | null;

  onTweet: TinyJetstreamEventHandler;

  start(): void;
  stop(): void;
}
