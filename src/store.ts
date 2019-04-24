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
        headerName: 'Page-Index',
        headerValue: '0'
      },
      {
        headerName: 'Page-Size',
        headerValue: '15'
      },
      {
        headerName: 'Fields',
        headerValue: "['AccountName', 'AccountID', 'Address']"
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
