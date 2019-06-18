export const state = () => ({
  list: [{
    description: 'капаро',
    date: 'Mon Jun 17 2019',
    cost: '10000'
  },
  {
    description: 'нотариална заверка на док за прехвърляне на пенсионни партиди',
    date: 'Mon Jun 17 2019',
    cost: '6'
  },
  {
    description: 'оценка на имота',
    date: 'Mon Jun 17 2019',
    cost: '200'
  },
  {
    description: 'bla bla bla',
    date: 'Mon Jun 17 2019',
    cost: 'some money'
  }]
})

export const mutations = {
  add (state, itemObject) {
    state.list.push({
      itemObject
    })
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}

export const getters = {
  getAllItems (state) {
    return state.list
  }
}
