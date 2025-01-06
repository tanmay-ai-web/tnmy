import { EventEmitter } from '../src/core/events';

describe('EventEmitter', () => {
  it('dispatches events to registered listeners', async () => {
    const emitter = new EventEmitter();
    let received = '';
    emitter.on('test', (data: string) => { received = data; });
    await emitter.emit('test', 'payload');
    expect(received).toBe('payload');
  });
});
