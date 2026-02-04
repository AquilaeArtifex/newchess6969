const game = new newchess6969();

const board = Chessboard('board', {
  draggable: true,
  position: 'start',
  onDrop: (source, target) => {
    const move = game.move({
      from: source,
      to: target,
      promotion: 'q'
    });

    if (move === null) return 'snapback';
  }
});

