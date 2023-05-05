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
             :key="resource._key"
             :title="title"
             :resource="resource"
         />
     </template>
 </div>
</template>

<script>
import { kabobCase } from '../utils/string-utils';
import ApiRefResource from './ApiRef/ApiRefResource';
import {groupedApiForPage} from '../utils/api-utils';

export default {
  name: 'ApiDoc',
  props: {},
  data () {
    return {}
  },
  computed: {
      api () {
          return groupedApiForPage(this.$page)
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
