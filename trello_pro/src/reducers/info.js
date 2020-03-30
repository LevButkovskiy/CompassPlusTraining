const initialState = {
  user: "unknown user",
  data: {
    tasks: [
      {
        id: 0,
        title: "Создать сайт",
        description: "Создать сайт-аналог trello в рамках обучения React",
      },
      {
        id: 1,
        title: "Закончить переработку приложения",
        description: "Добавить SelectorFactory, как в Pocket Bank",
      },
    ]
  }
}

export default function userInfo (state = initialState) {
  return state
}
