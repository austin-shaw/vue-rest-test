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
      }
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
      }
    ]
  },
  getters: {
    formatHeaders: state => {
      var headersEval = {}

      state.headerItems.forEach(function (value) {
        headersEval[value.headerName] = value.headerValue
      })

      return headersEval
    },
    formatParameters: state => {
      var parametersEval = ''

      state.parameterItems.forEach(function (value, index) {
        console.log(index)
        if (index === 0) {
          parametersEval += '?'
        }

        parametersEval += value.parameterName + '=' + value.parameterValue

        if (index < state.parameterItems.length - 1) {
          parametersEval += '&'
        }
      })

      return parametersEval
    }
  },
  mutations: {

  },
  actions: {

  }
})
