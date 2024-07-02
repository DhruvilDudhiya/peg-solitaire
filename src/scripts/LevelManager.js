class LevelManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.levels = [
            {
                name: "diamond",
                board: [
                    [null, null, 0, null, null],
                    [null, 1, 1, 1, 1],
                    [null, 1, 1, 1, null],
                    [1, 1, 1, 1, null],
                    [null, null, 1, null, null]
                ],
                pegPositions: [
                    { x: 0, y: -140, row: 0, col: 2 },
                    { x: -90, y: -70, row: 1, col: 1 },
                    { x: -30, y: -70, row: 1, col: 2 },
                    { x: 30, y: -70, row: 1, col: 3 },
                    { x: 90, y: -70, row: 1, col: 4 },
                    // { x: -120, y: 0, row: 2, col: 0 },
                    { x: -60, y: 0, row: 2, col: 1 },
                    { x: 0, y: 0, row: 2, col: 2 },
                    { x: 60, y: 0, row: 2, col: 3 },
                    // { x: 120, y: 0, row: 2, col: 4 },
                    { x: -90, y: 70, row: 3, col: 0 },
                    { x: -30, y: 70, row: 3, col: 1 },
                    { x: 30, y: 70, row: 3, col: 2 },
                    { x: 90, y: 70, row: 3, col: 3 },
                    { x: 0, y: 140, row: 4, col: 2 }
                ]
            },
            {
                name: "square",
                board: [
                    [null, null, 1,1,1, null, null],
                    [null, null, 1,1,1, null, null],
                    [1, 1, 1, 1,1,1,1],
                    [1, 1, 1, 0,1,1,1],
                    [1, 1, 1, 1,1,1,1],
                    [null, null, 1,1,1, null, null],
                    [null, null, 1,1,1, null, null],
                ],
                pegPositions: [
                    { x: -80, y: -230, row: 0, col: 2 },
                    { x: 0, y: -230, row: 0, col: 3 },
                    { x: 80, y: -230, row: 0, col: 4 },
                    { x: -80, y: -160, row: 1, col: 2 },
                    { x: 0, y: -160, row: 1, col: 3 },
                    { x: 80, y: -160, row: 1, col: 4 },
                    { x: -230, y: -90, row: 2, col: 0 },
                    { x: -160, y: -90, row: 2, col: 1 },
                    { x: -80, y: -90, row: 2, col: 2 },
                    { x: 0, y: -90, row: 2, col: 3 },
                    { x: 80, y: -90, row: 2, col: 4 },
                    { x: 160, y: -90, row: 2, col: 5 },
                    { x: 230, y: -90, row: 2, col: 6 },
                    { x: -230, y: 0, row: 3, col: 0 },
                    { x: -160, y: 0, row: 3, col: 1 },
                    { x: -80, y: 0, row: 3, col: 2 },
                    { x: 0, y: 0, row: 3, col: 3 },
                    { x: 80, y: 0, row: 3, col: 4 },
                    { x: 160, y: 0, row: 3, col: 5 },
                    { x: 230, y: 0, row: 3, col: 6 },
                    { x: -230, y: 90, row: 4, col: 0 },
                    { x: -160, y: 90, row: 4, col: 1 },
                    { x: -80, y: 90, row: 4, col: 2 },
                    { x: 0, y: 90, row: 4, col: 3 },
                    { x: 80, y: 90, row: 4, col: 4 },
                    { x: 160, y: 90, row: 4, col: 5 },
                    { x: 230, y: 90, row: 4, col: 6 },
                    { x: -230, y: 160, row: 5, col: 0 },
                    { x: -160, y: 160, row: 5, col: 1 },
                    { x: -80, y: 160, row: 5, col: 2 },
                    { x: 0, y: 160, row: 5, col: 3 },
                    { x: 80, y: 160, row: 5, col: 4 },
                    { x: 160, y: 160, row: 5, col: 5 },
                    { x: 230, y: 160, row: 5, col: 6 },
                    { x: -230, y: 230, row: 6, col: 0 },
                    { x: -160, y: 230, row: 6, col: 1 },
                    { x: -80, y: 230, row: 6, col: 2 },
                    { x: 0, y: 230, row: 6, col: 3 },
                    { x: 80, y: 230, row: 6, col: 4 },
                    { x: 160, y: 230, row: 6, col: 5 },
                    { x: 230, y: 230, row: 6, col: 6 },
                    
                ]
            },
        ];
        this.currentLevelIndex = 1;
    }

    getCurrentLevel(){
        return this.levels[this.currentLevelIndex];
    }

}