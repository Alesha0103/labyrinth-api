const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

const defaultDataBase = {
  levels: [
    {
      id: 1,
      isLevelActive: true,
      stages: [
        {
          id: 1,
          rightWay: [2, 5, 8],
          cells: [
            { id: 1, "toVictory": false, neighbor: [2, 4] },
            { id: 2, "toVictory": true, neighbor: [1, 3, 5], firstStep: true, },
            { id: 3, "toVictory": false, neighbor: [2, 6] },
            { id: 4, "toVictory": false, neighbor: [5, 7, 1] },
            { id: 5, "toVictory": true, neighbor: [2, 4, 6, 8] },
            { id: 6, "toVictory": false, neighbor: [3, 5, 9] },
            { id: 7, "toVictory": false, neighbor: [4, 8] },
            { id: 8, "toVictory": true, neighbor: [5, 7, 9] },
            { id: 9, "toVictory": false, neighbor: [6, 8] }
          ]
        },

        {
          id: 2,
          rightWay: [13, 14, 15],
          cells: [
            { id: 10, "toVictory": false, neighbor: [11, 13] },
            { id: 11, "toVictory": false, neighbor: [10, 12, 14] },
            { id: 12, "toVictory": false, neighbor: [11, 15] },
            { id: 13, "toVictory": true, neighbor: [10, 14, 16], firstStep: true, },
            { id: 14, "toVictory": true, neighbor: [11, 13, 15, 17] },
            { id: 15, "toVictory": true, neighbor: [12, 14, 18] },
            { id: 16, "toVictory": false, neighbor: [13, 17] },
            { id: 17, "toVictory": false, neighbor: [14, 16, 18] },
            { id: 18, "toVictory": false, neighbor: [17, 15] }
          ]
        },

        {
          id: 3,
          rightWay: [21, 24, 27],
          cells: [
            { id: 19, "toVictory": false, neighbor: [20, 22] },
            { id: 20, "toVictory": false, neighbor: [19, 21, 23] },
            { id: 21, "toVictory": true, neighbor: [20, 24], firstStep: true, },
            { id: 22, "toVictory": false, neighbor: [19, 23, 25] },
            { id: 23, "toVictory": false, neighbor: [20, 22, 24, 26] },
            { id: 24, "toVictory": true, neighbor: [21, 23, 27] },
            { id: 25, "toVictory": false, neighbor: [22, 26] },
            { id: 26, "toVictory": false, neighbor: [23, 25, 27] },
            { id: 27, "toVictory": true, neighbor: [24, 26] }
          ]
        },
        
        {
          id: 4,
          rightWay: [28, 31, 34],
          cells: [
            { id: 28, "toVictory": true, neighbor: [29, 31], firstStep: true, },
            { id: 29, "toVictory": false, neighbor: [28, 30, 32] },
            { id: 30, "toVictory": false, neighbor: [29, 33] },
            { id: 31, "toVictory": true, neighbor: [28, 32, 34] },
            { id: 32, "toVictory": false, neighbor: [29, 31, 33, 35] },
            { id: 33, "toVictory": false, neighbor: [30, 32, 36] },
            { id: 34, "toVictory": true, neighbor: [31, 35] },
            { id: 35, "toVictory": false, neighbor: [32, 34, 36] },
            { id: 36, "toVictory": false, neighbor: [33, 35] }
          ]
        },

        {
          id: 5,
          rightWay: [43, 44, 45],
          cells: [
            { id: 37, "toVictory": false, neighbor: [38, 40] },
            { id: 38, "toVictory": false, neighbor: [37, 39, 41] },
            { id: 39, "toVictory": false, neighbor: [38, 42] },
            { id: 40, "toVictory": false, neighbor: [37, 41, 43] },
            { id: 41, "toVictory": false, neighbor: [38, 40, 42, 44] },
            { id: 42, "toVictory": false, neighbor: [39, 41, 45] },
            { id: 43, "toVictory": true, neighbor: [40, 44], firstStep: true },
            { id: 44, "toVictory": true, neighbor: [41, 43, 45] },
            { id: 45, "toVictory": true, neighbor: [42, 44] }
          ]
        }
      ]
    },

    {
      id: 2,
      isLevelActive: false,
      stages: [
        {
          id: 1,
          rightWay: [1, 4, 5, 6, 9],
          cells: [
            { id: 1, "toVictory": true, neighbor: [2, 4], firstStep: true },
            { id: 2, "toVictory": false, neighbor: [1, 3, 5] },
            { id: 3, "toVictory": false, neighbor: [2, 6] },
            { id: 4, "toVictory": true, neighbor: [5, 7, 1] },
            { id: 5, "toVictory": true, neighbor: [2, 4, 6, 8] },
            { id: 6, "toVictory": true, neighbor: [3, 5, 9] },
            { id: 7, "toVictory": false, neighbor: [4, 8] },
            { id: 8, "toVictory": false, neighbor: [5, 7, 9] },
            { id: 9, "toVictory": true, neighbor: [6, 8] }
          ]
        },

        {
          id: 2,
          rightWay: [10, 13, 16, 17, 18],
          cells: [
            { id: 10, "toVictory": true, neighbor: [11, 13], firstStep: true },
            { id: 11, "toVictory": false, neighbor: [10, 12, 14] },
            { id: 12, "toVictory": false, neighbor: [11, 15] },
            { id: 13, "toVictory": true, neighbor: [10, 14, 16] },
            { id: 14, "toVictory": false, neighbor: [11, 13, 15, 17] },
            { id: 15, "toVictory": false, neighbor: [12, 14, 18] },
            { id: 16, "toVictory": true, neighbor: [13, 17] },
            { id: 17, "toVictory": true, neighbor: [14, 16, 18] },
            { id: 18, "toVictory": true, neighbor: [17, 15] }
          ]
        },

        {
          id: 3,
          rightWay: [19, 20, 23, 24, 27],
          cells: [
            { id: 19, "toVictory": true, neighbor: [20, 22], firstStep: true },
            { id: 20, "toVictory": true, neighbor: [19, 21, 23] },
            { id: 21, "toVictory": false, neighbor: [20, 24] },
            { id: 22, "toVictory": false, neighbor: [19, 23, 25] },
            { id: 23, "toVictory": true, neighbor: [20, 22, 24, 26] },
            { id: 24, "toVictory": true, neighbor: [21, 23, 27] },
            { id: 25, "toVictory": false, neighbor: [22, 26] },
            { id: 26, "toVictory": false, neighbor: [23, 25, 27] },
            { id: 27, "toVictory": true, neighbor: [24, 26] }
          ]
        },
        
        {
          id: 4,
          rightWay: [34, 35, 36, 33, 30],
          cells: [
            { id: 28, "toVictory": false, neighbor: [29, 31] },
            { id: 29, "toVictory": false, neighbor: [28, 30, 32] },
            { id: 30, "toVictory": true, neighbor: [29, 33] },
            { id: 31, "toVictory": false, neighbor: [28, 32, 34] },
            { id: 32, "toVictory": false, neighbor: [29, 31, 33, 35] },
            { id: 33, "toVictory": true, neighbor: [30, 32, 36] },
            { id: 34, "toVictory": true, neighbor: [31, 35], firstStep: true, },
            { id: 35, "toVictory": true, neighbor: [32, 34, 36] },
            { id: 36, "toVictory": true, neighbor: [33, 35] }
          ]
        },

        {
          id: 5,
          rightWay: [45, 42, 41, 38],
          cells: [
            { id: 37, "toVictory": false, neighbor: [38, 40] },
            { id: 38, "toVictory": true, neighbor: [37, 39, 41] },
            { id: 39, "toVictory": false, neighbor: [38, 42] },
            { id: 40, "toVictory": false, neighbor: [37, 41, 43] },
            { id: 41, "toVictory": true, neighbor: [38, 40, 42, 44] },
            { id: 42, "toVictory": true, neighbor: [39, 41, 45] },
            { id: 43, "toVictory": false, neighbor: [40, 44] },
            { id: 44, "toVictory": false, neighbor: [41, 43, 45] },
            { id: 45, "toVictory": true, neighbor: [42, 44], firstStep: true, }
          ]
        }
      ]
    },
  ]
}

app.use(cors());

app.get('/levels', (req, res) => {
  res.send(defaultDataBase);
});

app.get('/levels/:levelID', async (req, res) => {
  const levelID = Number(req.params.levelID);
  const chosenLevel = defaultDataBase.levels.find(level => level.id === levelID);

  if (chosenLevel) {
    await defaultDataBase.levels.forEach(level => level.isLevelActive = false);
    chosenLevel.isLevelActive = true;
    const stages = chosenLevel && chosenLevel.stages.filter(stage => !stage.done)
    res.send(stages || []);
  } else if (!chosenLevel) {
    res.send([]);
  }
});

app.get('/check-the-end', (req, res) => {
  const activeLevel = defaultDataBase.levels.find(level => level.isLevelActive);
  const levelIndex = defaultDataBase.levels.indexOf(activeLevel);
  const isSequel = defaultDataBase.levels[levelIndex+1];
  if (isSequel) {
    res.send(false);
    isSequel.isLevelActive = true;
  }
  if (!isSequel) {
    res.send(true);
  }
})

app.put('/stages/:stageID', (req, res) => {
  const stageID = Number(req.params.stageID);

  const level = defaultDataBase.levels.find(level => level.isLevelActive);
  const doneStage = level.stages.find(stage => stage.id === stageID);

  if (doneStage) {
    doneStage.done = true;
    res.send(`stage with id: ${stageID} is done`);
  } else {
    console.log(req.params);
    res.status(404).send('Stage not found');
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
