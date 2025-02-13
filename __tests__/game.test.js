import Game from '../src/game';

test('Перемещение гоблина в разные клетки', () => {
  const game = new Game();
  game.createBoard();
  game.moveCharacter();

  const firstPosition = game.currentPosition;
  game.moveCharacter();
  expect(game.currentPosition).not.toBe(firstPosition);
});