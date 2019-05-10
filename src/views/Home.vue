<template>
  <v-container fluid>
    <v-layout v-bind="layoutBinding">
      <v-flex xs6 sm6 md6 lg6>
        <v-card v-bind:style="requestCardBinding" class="elevation-2">
          <v-card-text>
            <p>Request</p>
            <v-form ref="form" lazy-validation>
              <v-layout>
                <v-flex xs2>
                  <v-combobox
                    v-model="method"
                    :items="methodItems"
                    label="Method"
                    required
                    id="sm-input"
                    class="sm-input"
                  ></v-combobox>
                </v-flex>
                <v-flex ml-4 xs10>
                  <v-text-field
                    v-model="url"
                    required
                    name="url"
                    label="URL"
                    type="text"
                    id="sm-input"
                    class="sm-input"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-form>
            <v-tabs
              light
              grow
              id="sm-input"
              class="sm-input"
            >
              <v-tabs-slider color="primary"></v-tabs-slider>
              <v-tab id="sm-input" class="sm-input" href="#tab-1">Headers</v-tab>
              <v-tab id="sm-input" class="sm-input" href="#tab-2">Parameters</v-tab>

              <v-tabs-items>
                <v-tab-item key='1' value='tab-1'>
                  <header-grid testparam="1"></header-grid>
                </v-tab-item>
                <v-tab-item key='2' value='tab-2'>
                  <parameter-grid testparam="2"></parameter-grid>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-on:click="clear" outline color="secondary">Clear</v-btn>
            <v-btn v-on:click="send" outline color="primary">Send</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs6 sm6 md6 lg6>
        <v-card class="elevation-2">
          <v-card-text>
            <p>Response</p>
            <div contenteditable v-if="data && data.length">{{data}}}</div>
            <div contenteditable v-if="errors && errors.length">{{errors}}</div>
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script lang="ts">
import axios from 'axios'
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
      data: '',
      errors: [],
      method: 'GET',
      headers: this.$store.state.headerItems,
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
    clear: function () {
      this.data = ''
      this.errors = []
    },
    send: function () {
      this.clear()

      axios({
        method: this.method,
        url: this.url + this.formattedParameters,
        // responseType:'stream'
        headers: this.formattedHeaders
      }).then(response => {
        this.data = JSON.stringify(JSON.parse(JSON.stringify(response)), null, 2)
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  },
  computed: {
    formattedHeaders () {
      return this.$store.getters.formatHeaders
    },
    formattedParameters () {
      return this.$store.getters.formatParameters
    },
    layoutBinding () {
      const binding = {}

      if (this.$vuetify.breakpoint.mdAndDown) {
        binding.column = true
      }

      return binding
    },
    requestCardBinding () {
      if (this.$vuetify.breakpoint.mdAndDown) {
        return {
          'margin-bottom': '10px'
        }
      } else {
        return {
          'margin-right': '10px'
        }
      }
    }
  }
}

</script>

<style>

#sm-input {
  font-size: 10pt;
}
.sm-input label[for] {
  font-size: 10pt;
}

div[contenteditable]{
  max-height: 400px;
  color: black;
  overflow: auto;
  white-space: pre;
  font-weight: normal;
  font-family: "Courier New";
  font-size: 9pt;
}

</style>
