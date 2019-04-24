<template>
  <v-container fluid fill-height>
    <v-layout justify-center>
      <v-flex xs12 sm12 md12 lg10>
        <v-card class="elevation-2">
          <v-card-text>
            <v-form ref="form" lazy-validation>
              <v-layout>
                <v-flex xs2>

                  <v-combobox
                    v-model="method"
                    :items="methodItems"
                    label="Method"
                    required
                  ></v-combobox>

                </v-flex>
                <v-flex ml-4 xs10>
                  
                  <v-text-field
                    v-model="url"
                    required
                    name="url"
                    label="URL"
                    type="text"
                  ></v-text-field>

                </v-flex>
              </v-layout>
            </v-form>
            <v-divider></v-divider>

            <v-tabs
              light
              grow
            >
              <v-tabs-slider color="primary"></v-tabs-slider>

              <v-tab href="#tab-1">Headers</v-tab>
              <v-tab href="#tab-2">Parameters</v-tab>
              <v-tab href="#tab-3">Body</v-tab>

              <v-tabs-items>
                <v-tab-item key='1' value='tab-1'>
                  <header-grid testparam="1"></header-grid>
                </v-tab-item>

                <v-tab-item key='2' value='tab-2'>
                  <parameter-grid testparam="2"></parameter-grid>
                </v-tab-item>

                <v-tab-item key='3' value='tab-3'>
                  <header-grid testparam="3"></header-grid>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>
            
            <v-textarea ma-5
              v-if="results && results.length"
              name="resultsObject"
              mr-5
              box
              label="Results"
              auto-grow
              max-height="20"
              :value="results"
            ></v-textarea>

            <v-textarea ma-5
              v-if="headers && headers.length"
              name="headersObject"
              mr-5
              box
              label="Headers"
              auto-grow
              max-height="20"
              :value="headers"
            ></v-textarea>

            <v-textarea
              v-if="errors && errors.length"
              name="errors"
              mr-5
              box
              label="Errors"
              auto-grow
              max-height="20"
              :value="errors"
            ></v-textarea>

          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn 
              v-if="(results && results.length) || (errors && errors.length)"
              v-on:click="clear" 
              color="secondary"
            >
              Clear
            </v-btn>

            <v-btn 
              v-on:click="send" 
              color="primary"
            >
              Send
            </v-btn>

          </v-card-actions>
        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import axios from 'axios';
import HeaderGrid from '@/components/HeaderGrid.vue'
import ParameterGrid from '@/components/ParameterGrid.vue'

export default {
  components: {
    HeaderGrid,
    ParameterGrid
  },
  data () {
    return {
      url: '',
      results: [],
      headers: [],
      errors: [],
      method: 'GET',
      methodItems: [
        'GET',
        'POST',
        'PUT',
        'DELETE',
        'OPTIONS',
        'HEAD'
      ]
    }
  },
  methods: {
    clear: function (){
      this.results = [],
      this.headers = [],
      this.errors = []
    },
    send: function () {
      axios.get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        // JSON responses are automatically parsed.
        console.log(response.headers)
        this.results = response.data
        this.headers = response.headers
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}

</script>
