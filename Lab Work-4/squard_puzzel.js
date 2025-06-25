document.addEventListener('DOMContentLoaded', (event) => {
    let boardSize = 4;
    const board = document.getElementById('board');
    const sizeChoiceBtn = document.getElementById('sizeChoice');
    const elClose = document.getElementById('close');

    sizeChoiceBtn.onclick = () => {
        const selectedSize = document.querySelector('input[name="size"]:checked').value;
        boardSize = parseInt(selectedSize);
        initializeBoard();
    };

    elClose.addEventListener('click', dismissNote, false);

    function initializeBoard() {
        board.innerHTML = '';
        board.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;
        const tiles = createShuffledTiles(boardSize * boardSize);
        tiles.forEach(tile => {
            board.appendChild(tile);
        });
    }

    function createShuffledTiles(size) {
        const tiles = [];
        for (let i = 1; i < size; i++) {
            const tile = document.createElement('span');
            tile.className = 'tile';
            tile.textContent = i;
            tile.onclick = () => moveTile(tile);
            tiles.push(tile);
        }
        const emptyTile = document.createElement('span');
        emptyTile.className = 'tile empty';
        tiles.push(emptyTile);

        // Shuffle the tiles
        for (let i = tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
        }

        return tiles;
    }

    function moveTile(tile) {
        const emptyTile = document.querySelector('.empty');
        const emptyIndex = Array.from(board.children).indexOf(emptyTile);
        const tileIndex = Array.from(board.children).indexOf(tile);

        const validMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - boardSize, emptyIndex + boardSize];

        if (validMoves.includes(tileIndex)) {
            exchangeElements(tile, emptyTile);
            checkWin();
        }
    }

    function exchangeElements(el1, el2) {
        const temp = document.createElement('div');
        el1.parentNode.insertBefore(temp, el1);
        el2.parentNode.insertBefore(el1, el2);
        temp.parentNode.insertBefore(el2, temp);
        temp.parentNode.removeChild(temp);
    }

    function checkWin() {
        const tiles = Array.from(board.children);
        const isWin = tiles.every((tile, index) => tile.textContent == index + 1 || (index === tiles.length - 1 && tile.className.includes('empty')));
        if (isWin) {
            alert('Congratulations! You solved the puzzle!');
        }
    }

    function dismissNote() {
        alert('Note dismissed!');
    }

    initializeBoard();
});
