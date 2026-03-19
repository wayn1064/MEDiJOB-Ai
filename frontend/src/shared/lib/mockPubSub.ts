export type AppEvent =
  | 'CART_ITEM_ADDED'
  | 'CART_ITEM_REMOVED'
  | 'AUTH_STATE_CHANGED'
  | 'NOTIFICATION_RECEIVED';

type EventHandler = (payload?: unknown) => void;

class MockPubSub {
  private listeners: Record<string, EventHandler[]> = {};

  // Subscribe to an event
  subscribe(event: AppEvent, handler: EventHandler) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(handler);

    // Return unsubscribe function
    return () => {
      this.listeners[event] = this.listeners[event].filter((h) => h !== handler);
    };
  }

  // Publish an event
  publish(event: AppEvent, payload?: unknown) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((handler) => {
        // Run asynchronously to mock real pub/sub behavior
        setTimeout(() => handler(payload), 0);
      });
    }
  }
}

export const mockPubSub = new MockPubSub();
