const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

const defaultDataBase = {
  levels: [
    {
      id: 1,
      isLevelActive: true,
      stages: [
        {
          id: 1,
          rightWay: [2, 5, 8],
          geometry: {
            columns: 3,
            rows: 3,
          },
          cells: [
            { id: 1, neighbor: [2, 4] },
            { id: 2, neighbor: [1, 3, 5], firstStep: true, },
            { id: 3, neighbor: [2, 6] },
            { id: 4, neighbor: [5, 7, 1] },
            { id: 5, neighbor: [2, 4, 6, 8] },
            { id: 6, neighbor: [3, 5, 9] },
            { id: 7, neighbor: [4, 8] },
            { id: 8, neighbor: [5, 7, 9] },
            { id: 9, neighbor: [6, 8] }
          ]
        },

        {
          id: 2,
          rightWay: [13, 14, 15],
          geometry: {
            columns: 3,
            rows: 3,
          },
          cells: [
            { id: 10, neighbor: [11, 13] },
            { id: 11, neighbor: [10, 12, 14] },
            { id: 12, neighbor: [11, 15] },
            { id: 13, neighbor: [10, 14, 16], firstStep: true, },
            { id: 14, neighbor: [11, 13, 15, 17] },
            { id: 15, neighbor: [12, 14, 18] },
            { id: 16, neighbor: [13, 17] },
            { id: 17, neighbor: [14, 16, 18] },
            { id: 18, neighbor: [17, 15] }
          ]
        },

        {
          id: 3,
          rightWay: [21, 24, 27],
          geometry: {
            columns: 3,
            rows: 3,
          },
          cells: [
            { id: 19, neighbor: [20, 22] },
            { id: 20, neighbor: [19, 21, 23] },
            { id: 21, neighbor: [20, 24], firstStep: true, },
            { id: 22, neighbor: [19, 23, 25] },
            { id: 23, neighbor: [20, 22, 24, 26] },
            { id: 24, neighbor: [21, 23, 27] },
            { id: 25, neighbor: [22, 26] },
            { id: 26, neighbor: [23, 25, 27] },
            { id: 27, neighbor: [24, 26] }
          ]
        },
        
        {
          id: 4,
          rightWay: [28, 31, 34],
          geometry: {
            columns: 3,
            rows: 3,
          },
          cells: [
            { id: 28, neighbor: [29, 31], firstStep: true, },
            { id: 29, neighbor: [28, 30, 32] },
            { id: 30, neighbor: [29, 33] },
            { id: 31, neighbor: [28, 32, 34] },
            { id: 32, neighbor: [29, 31, 33, 35] },
            { id: 33, neighbor: [30, 32, 36] },
            { id: 34, neighbor: [31, 35] },
            { id: 35, neighbor: [32, 34, 36] },
            { id: 36, neighbor: [33, 35] }
          ]
        },

        {
          id: 5,
          rightWay: [43, 44, 45],
          geometry: {
            columns: 3,
            rows: 3,
          },
          cells: [
            { id: 37, neighbor: [38, 40] },
            { id: 38, neighbor: [37, 39, 41] },
            { id: 39, neighbor: [38, 42] },
            { id: 40, neighbor: [37, 41, 43] },
            { id: 41, neighbor: [38, 40, 42, 44] },
            { id: 42, neighbor: [39, 41, 45] },
            { id: 43, neighbor: [40, 44], firstStep: true },
            { id: 44, neighbor: [41, 43, 45] },
            { id: 45, neighbor: [42, 44] }
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
          geometry: {
            columns: 3,
            rows: 3,
          },
          cells: [
            { id: 1, neighbor: [2, 4], firstStep: true },
            { id: 2, neighbor: [1, 3, 5] },
            { id: 3, neighbor: [2, 6] },
            { id: 4, neighbor: [5, 7, 1] },
            { id: 5, neighbor: [2, 4, 6, 8] },
            { id: 6, neighbor: [3, 5, 9] },
            { id: 7, neighbor: [4, 8] },
            { id: 8, neighbor: [5, 7, 9] },
            { id: 9, neighbor: [6, 8] }
          ]
        },

        {
          id: 2,
          rightWay: [10, 13, 16, 17, 18],
          geometry: {
            columns: 3,
            rows: 3,
          },
          cells: [
            { id: 10, neighbor: [11, 13], firstStep: true },
            { id: 11, neighbor: [10, 12, 14] },
            { id: 12, neighbor: [11, 15] },
            { id: 13, neighbor: [10, 14, 16] },
            { id: 14, neighbor: [11, 13, 15, 17] },
            { id: 15, neighbor: [12, 14, 18] },
            { id: 16, neighbor: [13, 17] },
            { id: 17, neighbor: [14, 16, 18] },
            { id: 18, neighbor: [17, 15] }
          ]
        },

        {
          id: 3,
          rightWay: [19, 20, 23, 24, 27],
          geometry: {
            columns: 3,
            rows: 3,
          },
          cells: [
            { id: 19, neighbor: [20, 22], firstStep: true },
            { id: 20, neighbor: [19, 21, 23] },
            { id: 21, neighbor: [20, 24] },
            { id: 22, neighbor: [19, 23, 25] },
            { id: 23, neighbor: [20, 22, 24, 26] },
            { id: 24, neighbor: [21, 23, 27] },
            { id: 25, neighbor: [22, 26] },
            { id: 26, neighbor: [23, 25, 27] },
            { id: 27, neighbor: [24, 26] }
          ]
        },
        
        {
          id: 4,
          rightWay: [34, 35, 36, 33, 30],
          geometry: {
            columns: 3,
            rows: 3,
          },
          cells: [
            { id: 28, neighbor: [29, 31] },
            { id: 29, neighbor: [28, 30, 32] },
            { id: 30, neighbor: [29, 33] },
            { id: 31, neighbor: [28, 32, 34] },
            { id: 32, neighbor: [29, 31, 33, 35] },
            { id: 33, neighbor: [30, 32, 36] },
            { id: 34, neighbor: [31, 35], firstStep: true, },
            { id: 35, neighbor: [32, 34, 36] },
            { id: 36, neighbor: [33, 35] }
          ]
        },

        {
          id: 5,
          rightWay: [45, 42, 41, 38],
          geometry: {
            columns: 3,
            rows: 3,
          },
          cells: [
            { id: 37, neighbor: [38, 40] },
            { id: 38, neighbor: [37, 39, 41] },
            { id: 39, neighbor: [38, 42] },
            { id: 40, neighbor: [37, 41, 43] },
            { id: 41, neighbor: [38, 40, 42, 44] },
            { id: 42, neighbor: [39, 41, 45] },
            { id: 43, neighbor: [40, 44] },
            { id: 44, neighbor: [41, 43, 45] },
            { id: 45, neighbor: [42, 44], firstStep: true, }
          ]
        }
      ]
    },

    {
      id: 3,
      isLevelActive: false,
      stages: [
        {
          id: 1,
          rightWay: [16, 12, 11, 10, 14, 13, 9, 5, 6, 2],
          geometry: {
            columns: 4,
            rows: 4,
          },
          cells: [
            { id: 1, neighbor: [2, 5]},
            { id: 2, neighbor: [1, 3, 6] },
            { id: 3, neighbor: [2, 6, 7] },
            { id: 4, neighbor: [3, 8] },
            { id: 5, neighbor: [1, 6, 9] },
            { id: 6, neighbor: [2, 5, 7, 10] },
            { id: 7, neighbor: [3, 6, 8, 11] },
            { id: 8, neighbor: [4, 7, 12] },
            { id: 9, neighbor: [5, 10, 13] },
            { id: 10, neighbor: [6, 9, 11, 14] },
            { id: 11, neighbor: [7, 10, 12, 15] },
            { id: 12, neighbor: [8, 11, 6] },
            { id: 13, neighbor: [9, 14] },
            { id: 14, neighbor: [10, 13, 15] },
            { id: 15, neighbor: [11, 13, 16] },
            { id: 16, neighbor: [12, 15], firstStep: true  }
          ]
        },
      ]
    },
  ]
}

let dataBase = JSON.parse(JSON.stringify(defaultDataBase));

app.use(cors());

app.get("/levels/:levelID", async (req, res) => {
  const levelID = Number(req.params.levelID);
  const chosenLevel = dataBase.levels.find(level => level.id === levelID);

  if (chosenLevel) {
    await dataBase.levels.forEach(level => level.isLevelActive = false);
    chosenLevel.isLevelActive = true;
    const stages = chosenLevel && chosenLevel.stages.filter(stage => !stage.done)
    res.send(stages || []);
  } else if (!chosenLevel) {
    res.send([]);
  }
});

app.get("/check-the-end", (req, res) => {
  const activeLevel = dataBase.levels.find(level => level.isLevelActive);
  const levelIndex = dataBase.levels.indexOf(activeLevel);
  const isSequel = dataBase.levels[levelIndex+1];
  if (isSequel) {
    res.send(false);
    isSequel.isLevelActive = true;
  }
  if (!isSequel) {
    res.send(true);
  }
})

app.put("/stages/:stageID", (req, res) => {
  const stageID = Number(req.params.stageID);

  const level = dataBase.levels.find(level => level.isLevelActive);
  const doneStage = level.stages.find(stage => stage.id === stageID);

  if (doneStage) {
    doneStage.done = true;
    res.send(`stage with id: ${stageID} is done`);
  } else {
    console.log(req.params);
    res.status(404).send("Stage not found");
  }
});

app.put("/defaultDataBase", (req, res) => {
  dataBase = JSON.parse(JSON.stringify(defaultDataBase));
  res.send(`DataBase has been updated to default`);
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
