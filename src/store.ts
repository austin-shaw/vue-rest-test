import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerItems: [
      {
        headerName: 'Accept',
        headerValue: 'application/json'
      },
      {
        headerName: 'Origin',
        headerValue: 'https:\\localhost:8081'
      },
    ],
    parameterItems: [
      {
        parameterName: '@AcctID',
        parameterValue: '7'
      },
      {
        parameterName: '@AcctLastName',
        parameterValue: 'Baker'
      },
      {
        parameterName: '@AcctFirstName',
        parameterValue: 'John'
      },
    ],
  },
  mutations: {

  },
  actions: {

  }
})
