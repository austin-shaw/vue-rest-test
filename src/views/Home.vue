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
          <v-card-title>
            Response
          </v-card-title>

          <v-card-actions>
            <v-btn
              outline
              fab
              small
              absolute
              right
              color="primary"
              @click="copy()"
            >
              <v-icon>far fa-copy</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-text>
            <!-- <p>Response</p> -->

            <div contenteditable v-if="response && response.length">{{response}}}</div>
          </v-card-text>
        </v-card>
      </v-flex>

    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      bottom
      color="primary"
    >
      Response Copied to Clipboard
    </v-snackbar>

    </v-layout>
  </v-container>
</template>

<script>
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
      response: '',
      method: 'GET',
      headers: this.$store.state.headerItems,
      methodItems: [
        'GET',
        'POST',
        'PUT',
        'DELETE',
        'OPTIONS',
        'HEAD'
      ],
      snackbar: false,
      timeout: 2500
    }
  },
  methods: {
    clear: function () {
      this.response = ''
    },
    send: function () {
      this.clear()

      axios({
        method: this.method,
        url: this.url + this.formattedParameters,
        headers: this.formattedHeaders
      }).then(response => {
        // the response doesn't reatin it's formatting unles it has been parsed and re-stringified
        this.response = JSON.stringify(JSON.parse(JSON.stringify(response)), null, 2)
      })
        .catch(e => {
        // the response doesn't reatin it's formatting unles it has been parsed and re-stringified
          this.response = JSON.stringify(JSON.parse(JSON.stringify(e)), null, 2)
        })
    },
    copy () {
      navigator.clipboard.writeText(this.response)
      this.snackbar = true
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
