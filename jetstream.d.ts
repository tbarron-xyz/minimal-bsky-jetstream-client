// Type definitions for Jetstream client

export interface JetstreamOptions {
  endpoint?: string;
}

export interface CommitData {
  kind: "commit";
  commit: {
    collection: string;
    operation: "create" | "update" | "delete";
    [key: string]: any;
  };
  [key: string]: any;
}

export interface JetstreamEventListener {
  (data: CommitData): void;
}

export declare class Jetstream {
  endpoint: string;
  emitters: Map<string, EventTarget>;
  ws: WebSocket | null;

  constructor(options?: JetstreamOptions);

  get url(): string;

  onCreate(collection: string, listener: JetstreamEventListener): void;
  onUpdate(collection: string, listener: JetstreamEventListener): void;
  onDelete(collection: string, listener: JetstreamEventListener): void;

  start(): void;
  stop(): void;

  onTweet(listener: JetstreamEventListener): void;
}
