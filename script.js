let grid = [['', '', ''], ['', '', ''], ['', '', '']]

const allConditionsToWin = [
    // Horizontal
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    // Vertical
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    // Diagonal
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
];

function checkWinner(grid) {


    for (let condition of allConditionsToWin) {
        const [a, b, c] = condition;
        const [aRow, aCol] = a;
        const [bRow, bCol] = b;
        const [cRow, cCol] = c;
        const player = grid[aRow][aCol];
        if (
            player !== '' &&
            player === grid[bRow][bCol] &&
            player === grid[cRow][cCol]
        ) {
            return player;
        }
    }

    if (!grid.flat().includes('')) {
        return 'tie';
    }

    return null;
}

function clearGrid() {
    const inputs = document.querySelectorAll('.grid-item');
    inputs.forEach(input => {
        input.value = '';
    });
    document.getElementById('message').innerText = '';
}

function checkWin(inputElement) {
    if (inputElement.value.toUpperCase() !== 'X' && inputElement.value.toUpperCase() !== 'O') {
        inputElement.value = '';
    }
    const idParts = inputElement.id.split('-');
    const row = parseInt(idParts[1]);
    const col = parseInt(idParts[2]);
    const inputValue = inputElement.value.toUpperCase();
    grid[row][col] = inputValue;
    const winner = checkWinner(grid);
    if (winner) {
        if (winner === 'tie') {
            document.getElementById('message').innerText = "It's a tie!";
        } else {
            document.getElementById('message').innerText = `Player ${winner} won`;
        }
    }
}

