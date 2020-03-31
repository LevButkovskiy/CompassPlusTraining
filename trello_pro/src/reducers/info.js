const initialState = {
  user: "unknown user",
  data: {
    tasks: [
      {
        id: 0,
        title: "Сходить за продуктами",
        description: "Нужно сходить за продуктами в магазин",
        subTasks: [
          {
            id: 0,
            title: "Сборка",
            items: ["Составить список продуктов", "Надеть шапку", "Надеть куртку", "Надеть штаны", "Надеть обувь"]
          },
          {
            id: 1,
            title: "Составить список продуктов",
            items: ["Вспомнить что нужно", "Проверить холодильник", "Проверить бытовую химию"]
          },
          {
            id: 2,
            title: "Купить продукты",
            items: ["Купить молоко", "Купить яйца", "Купить гель для душа", "Купить чай", "Купить зубную щетку средней жесткости",
          "Купить мыло"]
          },
        ],
      },
      {
        id: 1,
        title: "Закончить переработку приложения",
        description: "Добавить SelectorFactory, как в Pocket Bank",
        subTasks: [
          {
            id: 0,
            title: "Найти варианты Modal View Controller'a",
            items: ["Рассмотреть Pod'ы", "Написать самому"]
          },
          {
            id: 1,
            title: "Реализовать",
            items: ["Скопировать код", "Написать код самостоятельно", "Установить Pod"]
          }
        ],
      },
    ]
  }
}

export default function userInfo (state = initialState, action) {
  switch (action.type) {
    case "ADD_SUBTASK" :
      return {... state, user: action.payload}
    default:
      return state
  }
}
