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
            // {
            //     name : "square",
            //     board: [
            //         [null, null, 1, 1, 1, null, null],
            //         [null, null, 0, 1, 0, null, null],
            //         [0, 0, 0, 1, 0, 0, 0],
            //         [0, 1, 1, 1, 1, 1, 0],
            //         [0, 0, 0, 1, 0, 0, 0],
            //         [null, null, 0, 1, 0, null, null],
            //         [null, null, 0, 0, 0, null, null]
            //     ],
            //     pegPositions:[
            //         { x: -55, y: -170, row: 0, col: 2 },
            //         { x: 5, y: -170, row: 0, col: 3 },
            //         { x: 65, y: -170, row: 0, col: 4 },
                   
            //     ]
            // }
        ];
        this.currentLevelIndex = 0;
    }

    getCurrentLevel(){
        return this.levels[this.currentLevelIndex];
    }

}