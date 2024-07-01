// You can write more code here

/* START OF COMPILED CODE */

class Board extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);
        
		// container_boardBackGround
		const container_boardBackGround = scene.add.container(0, 0);
		this.add(container_boardBackGround);

		// boardBackGround
		const boardBackGround = scene.add.rectangle(0, 0, 600, 600);
		boardBackGround.isFilled = true;
		container_boardBackGround.add(boardBackGround);

		// peg
		const peg = scene.add.image(-93, -172, "peg");
		peg.scaleX = 0.4;
		peg.scaleY = 0.4;
		container_boardBackGround.add(peg);

		// peg_1
		const peg_1 = scene.add.image(94.22081756591797, -172.797119140625, "peg");
		peg_1.scaleX = 0.4;
		peg_1.scaleY = 0.4;
		container_boardBackGround.add(peg_1);

		// peg_2
		const peg_2 = scene.add.image(12, -173, "peg");
		peg_2.scaleX = 0.4;
		peg_2.scaleY = 0.4;
		container_boardBackGround.add(peg_2);

		// container_blankPeg
		const container_blankPeg = scene.add.container(0, 0);
		this.add(container_blankPeg);

		this.container_boardBackGround = container_boardBackGround;
		this.container_blankPeg = container_blankPeg;

		/* START-USER-CTR-CODE */
		this.oScene = scene;
		this.levelManager = new LevelManager();

		this.selectedPeg = null;
		this.oScene.input.on('gameobjectdown', this.onPegClick, this);

		this.pegContainer = this.oScene.add.container(0, 0);
		this.add(this.pegContainer);

		this.loadCurrentLevel();
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Container} */
	container_boardBackGround;
	/** @type {Phaser.GameObjects.Container} */
	container_blankPeg;

	/* START-USER-CODE */
	// Write your code here.
	loadCurrentLevel(){
		const level = this.levelManager.getCurrentLevel();
		this.board = level.board;
		this.blankPegPos = level.pegPositions;
		this.clearBoard();
		this.createPegs();
	}
	clearBoard() {
        this.pegContainer.removeAll(true);
        this.container_blankPeg.removeAll(true);
    }
	createPegs() {
        for (let pos of this.blankPegPos) {
            const { row, col, x, y } = pos;
            if (this.board[row][col] !== null) {
                let peg = this.oScene.add.image(x, y, this.board[row][col] === 1 ? "peg" : "peg-blank");
                peg.setScale(0.5);
                peg.setInteractive();
                peg.boardPosition = { row, col };
                if (this.board[row][col] === 1) {
                    this.pegContainer.add(peg);
                } else {
                    this.container_blankPeg.add(peg);
                }
            }
        }
    }
	onPegClick(pointer, gameObject) {
        if (!gameObject.boardPosition) return;

        if (this.selectedPeg === null) {
            if (this.board[gameObject.boardPosition.row][gameObject.boardPosition.col] === 1) {
                this.selectedPeg = gameObject;
                this.selectedPeg.setTint(0x00ff00); // Highlight selected peg
            }
        } else {
            if (this.canJump(this.selectedPeg.boardPosition, gameObject.boardPosition)) {
                this.jump(this.selectedPeg.boardPosition, gameObject.boardPosition);
                this.selectedPeg.clearTint();
                this.selectedPeg = null;
                // this.checkGameOver();
            } else {
                // If invalid move, deselect the peg
                this.selectedPeg.clearTint();
                this.selectedPeg = null;
            }
        }
    }
	canJump(from, to) {
        const dx = to.col - from.col;
        const dy = to.row - from.row;
        
        if ((Math.abs(dx) === 2 && dy === 0) || (Math.abs(dy) === 2 && dx === 0)) {
            const middleRow = from.row + dy / 2;
            const middleCol = from.col + dx / 2;
            return (
                this.board[from.row][from.col] === 1 &&
                this.board[middleRow][middleCol] === 1 &&
                this.board[to.row][to.col] === 0
            );
        }
        return false;
    }

    jump(from, to) {
        const middleRow = (from.row + to.row) / 2;
        const middleCol = (from.col + to.col) / 2;

        // Update board state
        this.board[from.row][from.col] = 0;
        this.board[middleRow][middleCol] = 0;
        this.board[to.row][to.col] = 1;

        // Update visuals
        this.updatePegVisuals(from, 0);
        this.updatePegVisuals({row: middleRow, col: middleCol}, 0);
        this.updatePegVisuals(to, 1);
    }

    updatePegVisuals(position, state) {
        const pegToUpdate = this.getPegAtPosition(position);
        if (pegToUpdate) {
            if (state === 1) {
                pegToUpdate.setTexture('peg');
                this.container_blankPeg.remove(pegToUpdate);
                this.pegContainer.add(pegToUpdate);
            } else {
                pegToUpdate.setTexture('peg-blank');
                this.pegContainer.remove(pegToUpdate);
                this.container_blankPeg.add(pegToUpdate);
            }
        }
    }

	getPegAtPosition(position) {
		let peg = null;
		this.pegContainer.iterate((child) => {
			if (child.boardPosition && 
				child.boardPosition.row === position.row && 
				child.boardPosition.col === position.col) {
				peg = child;
				return false; // Stop iteration
			}
		});
		
		if (!peg) {
			this.container_blankPeg.iterate((child) => {
				if (child.boardPosition && 
					child.boardPosition.row === position.row && 
					child.boardPosition.col === position.col) {
					peg = child;
					return false; // Stop iteration
				}
			});
		}
		
		return peg;
	}
	checkGameOver() {
        const remainingPegs = this.board.flat().filter(cell => cell === 1).length;
        if (remainingPegs === 1) {
            console.log("Congratulations! You've won!");
            // Implement win condition here (e.g., show a win message, go to next level)
        } else if (!this.hasValidMoves()) {
            console.log("Game Over! No more valid moves.");
            // Implement game over condition here (e.g., show a game over message, restart level)
        }
    }
	hasValidMoves() {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === 1) {
                    if (
                        this.canJump({row, col}, {row: row+2, col}) ||
                        this.canJump({row, col}, {row: row-2, col}) ||
                        this.canJump({row, col}, {row, col: col+2}) ||
                        this.canJump({row, col}, {row, col: col-2})
                    ) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
