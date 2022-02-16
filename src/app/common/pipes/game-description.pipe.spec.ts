import { GameDescriptionPipe } from './game-description.pipe';

describe('GameDescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new GameDescriptionPipe();
    expect(pipe).toBeTruthy();
  });
});
