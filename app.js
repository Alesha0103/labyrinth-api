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

        {
          id: 2,
          rightWay: [20, 24, 23, 27, 26, 22, 18, 17],
          geometry: {
            columns: 4,
            rows: 3,
          },
          cells: [
            { id: 17, neighbor: [18, 21]},
            { id: 18, neighbor: [17, 19, 22] },
            { id: 19, neighbor: [18, 20, 23] },
            { id: 20, neighbor: [19, 24], firstStep: true },
            { id: 21, neighbor: [17, 22, 25] },
            { id: 22, neighbor: [18, 21, 23, 26] },
            { id: 23, neighbor: [19, 22, 24, 27] },
            { id: 24, neighbor: [20, 23, 28] },
            { id: 25, neighbor: [21, 26] },
            { id: 26, neighbor: [22, 25, 27] },
            { id: 27, neighbor: [23, 26, 28] },
            { id: 28, neighbor: [24, 27] }
          ]
        },

        {
          id: 3,
          rightWay: [37, 38, 39, 35, 31, 32, 36, 40],
          geometry: {
            columns: 4,
            rows: 3,
          },
          cells: [
            { id: 29, neighbor: [30, 33]},
            { id: 30, neighbor: [29, 31, 34] },
            { id: 31, neighbor: [30, 32, 35] },
            { id: 32, neighbor: [31, 36] },
            { id: 33, neighbor: [29, 34, 37] },
            { id: 34, neighbor: [30, 33, 35, 38] },
            { id: 35, neighbor: [31, 34, 36, 39] },
            { id: 36, neighbor: [32, 35, 40] },
            { id: 37, neighbor: [33, 38], firstStep: true },
            { id: 38, neighbor: [34, 37, 39] },
            { id: 39, neighbor: [35, 38, 40] },
            { id: 40, neighbor: [36, 39] }
          ]
        },

        {
          id: 4,
          rightWay: [41, 44, 45, 48, 51, 52],
          geometry: {
            columns: 3,
            rows: 4,
          },
          cells: [
            { id: 41, neighbor: [42, 44], firstStep: true },
            { id: 42, neighbor: [41, 43, 45] },
            { id: 43, neighbor: [42, 46] },
            { id: 44, neighbor: [41, 45, 47] },
            { id: 45, neighbor: [42, 44, 46, 48] },
            { id: 46, neighbor: [43, 45, 49] },
            { id: 47, neighbor: [44, 48, 50] },
            { id: 48, neighbor: [45, 47, 49, 51] },
            { id: 49, neighbor: [46, 48, 52] },
            { id: 50, neighbor: [47, 51] },
            { id: 51, neighbor: [48, 50, 52] },
            { id: 52, neighbor: [49, 51] },
          ]
        },

        {
          id: 5,
          rightWay: [56, 57, 58, 61, 64, 63, 62],
          geometry: {
            columns: 3,
            rows: 4,
          },
          cells: [
            { id: 53, neighbor: [54, 56] },
            { id: 54, neighbor: [53, 55, 57] },
            { id: 55, neighbor: [54, 58] },
            { id: 56, neighbor: [53, 57, 59], firstStep: true },
            { id: 57, neighbor: [54, 56, 58, 60] },
            { id: 58, neighbor: [55, 57, 61] },
            { id: 59, neighbor: [56, 60, 62] },
            { id: 60, neighbor: [57, 59, 61, 63] },
            { id: 61, neighbor: [58, 60, 64] },
            { id: 62, neighbor: [59, 63] },
            { id: 63, neighbor: [60, 62, 64] },
            { id: 64, neighbor: [61, 63] },
          ]
        },
      ]
    },
    
  ]
}

const translations = {
  usa: {
    LABYRINTH: "Labyrinth",
    GREETINGS: "Greetings, dear traveler!",
    ENTER: "Looks like you are lost in the Labyrinth!",
    RULES: "Here you can see the rules of this game:",
    RULES_RULES:
      "When you start the game you will see the number of cells. Your task is to match these cells to build the correct path. You can only click on a cell that is adjacent to the one you are already standing on, but not on the previous one you selected. If you make a wrong move, the Labyrinth will take you to another stage of that level. However, this stage is not counted. All levels have 5 stages. Your task is to pass all of them to proceed to the next level. Looks easy. Let's see. Good luck!",
    START_GAME: "Start game",
    CONGRATULATIONS:"Congratulations!",
    COMPLETED_LEVEL: "You have completed the level",
    NEXT_LEVEL: "Move to the next level",
    FINISH_GAME_LABEL: "You have escaped the Labyrinth",
    LEVEL: "Level №",
    LIGHT_THEME: "Light",
    DARK_THEME: "Dark",
    FINISH_STAGE: "You've made this stage!",
    WASTED_STAGE: "Wasted! Loading new stage...",
    WARNING: "Cell is already selected",
    WARNING_ERROR: "Follow the rules!",
    WARNING_LAST_STAGE: "You are close! Don't give up!",
    SHOW_HINT: "Show hint",
    WAS_NOT_UPDATED: "Level was not updated",
    ERROR: "Ooh, an ERROR...",
    DEFAULT_ERROR: "It looks like this troll has hacked the Labyrinth.",
    TRAINING_LEVEL: "Training level",
    RULE_1: "You are standing at the green cell right now",
    RULE_2: "You can move to any of these yellow cells, but only one is right",
    RULE_3: "Click on yellow cell to choose it",
    RULE_4: "If you try to go back or choose the cell which is not adjacent then the game will show you an error popup",
    RULE_5: "You can use the hint wich will show you the right way",
    RULE_6: "Try to find the last cell to finis this level",
  },
  ua: {
    LABYRINTH: "Лабіринт",
    GREETINGS: "Вітаємо, дорогий мандрівник!",
    ENTER: "Схоже ти заблукав y Лабіринті!",
    RULES: "Дивись правила цієї гри:",
    RULES_RULES:
      "Коли ти почнеш гру, то побачиш перед собою деяку кількість клітинок. Твоє завдання - зіставити ці клітинки так, щоб побудувати правильний шлях. Ти можеш натиснути лише на клітинку, яка поруч із тією, на якій ти вже стоїш, але не на попередню, яку ти вибирав до цього. Якщо ти зробиш неправильний рух, то цей етап не врахується і Лабіринт переведе тебе на інший, щоб заплутати. Всі рівні мають 5 етапів. Твоє завдання пройти їх усі. Виглядає досить легко. Давай подивимось. Удачі!",
    START_GAME: "Почати гру",
    CONGRATULATIONS:"Вітаємо!",
    COMPLETED_LEVEL: "Ти пройшов рівень",
    NEXT_LEVEL: "Перейти до наступного рівня",
    FINISH_GAME_LABEL: "Ти вийшов з Лабіринту",
    LEVEL: "Рівень №",
    LIGHT_THEME: "Cвітла",
    DARK_THEME: "Tемна",
    FINISH_STAGE: "Ти пройшов цей етап!",
    WASTED_STAGE: "Не правильно! Завантаження нового етапу...",
    WARNING: "Клітинка вже вибрана",
    WARNING_ERROR: "Слідуй правилам!",
    WARNING_LAST_STAGE: "Ти близько! Не здавайся!",
    SHOW_HINT: "Підказка",
    WAS_NOT_UPDATED: "Рівень не оновлено!",
    ERROR: "Сталася помилка!",
    DEFAULT_ERROR: "Схоже троль щось зламав в Лабіринті.",
    TRAINING_LEVEL: "Навчальний рівень",
    RULE_1: "Зараз ти стоїш на зеленій клітинці",
    RULE_2: "Ти можеш зробити хід на будь-яку жовту клітинку, але тільки одна з них вірна",
    RULE_3: "Нажми на жовту клітинку щоб вибрати її",
    RULE_4: "Якщо ти спробуєш зробити хід назад або на клітинку яка не є сусідньою то гра покаже тобі помилку",
    RULE_5: "Ти можеш використати підсказку яка покаже тобі правильний шлях",
    RULE_6: "Спробуй знайти останню клітинку щоб закінчити навчання",
  }
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

app.get("/translations/:lang", (req, res) => {
  const lang = req.params.lang;
  const chosenTranslation = translations[lang];
  res.send(chosenTranslation);
})

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
