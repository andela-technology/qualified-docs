<template>
 <div class="api-reference">
     <h2 id="resources">RESOURCES</h2>

     <template v-for="title in resources">
        <h3 :id="kabobCase(title)">{{ title }}</h3>
         <p v-if="api[title][0].resource_explanation">
             {{ api[title][0].resource_explanation }}
         </p>
         <api-ref-resource
             v-for="resource in api[title]"
             :key="resource.route"
             :title="title"
             :resource="resource"
         />
     </template>
 </div>
</template>

<script>
import apiData from '../../content/api.json';
import { groupBy } from '../utils/array-utils';
import { kabobCase } from '../utils/string-utils';
import ApiRefResource from './ApiRef/ApiRefResource';

export default {
  name: 'ApiDoc',
  props: {},
  data () {
    return {}
  },
  computed: {
      api () {
        return groupBy(apiData, 'resource')
      },
      resources () {
          return Object.keys(this.api)
      }
  },
  methods: {
      kabobCase
  },
  components: { ApiRefResource }
}
</script>

<style>
    .api-reference {
    }
</style>
