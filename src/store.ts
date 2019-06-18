import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerItems: [
      {
        headerName: 'Accept',
        headerValue: 'application/json'
      }
    ],
    parameterItems: [
    ]
  },
  getters: {
    formatHeaders: state => {
      let headersEval:{ [index:string] : string } = {}

      state.headerItems.forEach(function (value) {
        headersEval[value.headerName] = value.headerValue
      })

      return headersEval
    },
    formatParameters: state => {
      var parametersEval = ''

      state.parameterItems.forEach(function (value, index) {
        let parametersValue : { [index:string] : string } = value

        if (index === 0) {
          parametersEval += '?'
        }

        parametersEval += parametersValue.parameterName + '=' + parametersValue.parameterValue

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
