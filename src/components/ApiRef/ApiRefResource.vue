<template>
  <div class="api-ref-resource">
    <h4 :id="`${kabobCase(title)}-${resource._key}`">
      {{ resource.description }}
    </h4>
    <p v-if="resource.explanation">
      {{ resource.explanation }}
    </p>
    <api-ref-container>
      <template #title>
        <api-ref-endpoint
          :route="resource.route"
          :method="resource.http_method"
        />
      </template>
      <template v-if="queryParams.length">
        <h6>URL Parameters:</h6>
        <api-ref-parameter
          v-for="param in queryParams"
          :key="param.name"
          :parameter="param"
        />
      </template>
      <template v-if="bodyParams.length">
        <h6>JSON Body Parameters:</h6>
        <api-ref-parameter
          v-for="param in bodyParams"
          :key="param.name"
          :parameter="param"
        />
      </template>
      <template v-if="request && request.response_status !== 200">
        <h6>Expected Response Status:</h6>
        {{ request.response_status }}
      </template>
    </api-ref-container>
    <api-ref-container title="Example Request" default-closed>
      <prism language="bash" :code="curl" />
    </api-ref-container>
    <api-ref-container
      title="Example Response JSON"
      default-closed
      v-if="request.response_body"
    >
      <prism
        language="javascript"
        :code="(request.response_body || '').replace(/^ */, '')"
      />
    </api-ref-container>
    <api-ref-container
      title="Notable Response Fields"
      v-if="resource.response_fields.length"
      default-closed
    >
      <api-ref-parameter
        v-for="param in responseFields"
        :key="param.name"
        :parameter="param"
        ignore-required
      />
    </api-ref-container>
  </div>
</template>

<script>
import { sortBy } from '../../utils/array-utils';
import { kabobCase } from '../../utils/string-utils';
import { buildCurlCommand } from '../../utils/curl-utils';
import ApiRefContainer from './ApiRefContainer';
import ApiRefEndpoint from './ApiRefEndpoint';
import Prism from '../Prism';
import 'prismjs/components/prism-bash';
import ApiRefParameter from './ApiRefParameter';

export default {
  name: 'ApiRefResource',
  props: {
    title: String,
    resource: Object,
  },
  data() {
    return {};
  },
  computed: {
    request() {
      return this.resource.requests[0];
    },
    curl() {
      return buildCurlCommand(
        this.resource['http_method'],
        this.request['request_path'],
        {
          data: this.request['request_body'],
          headers: {
            'authorization': 'WMxIgMZi0mt55ifcbMsl12wlZDCbDrBZ', // a made up key
            'Content-Type': 'application/json',
          },
        }
      );
    },
    queryParams() {
      return this.resource.parameters.filter(
        p => p.name.indexOf('data.') !== 0
      );
    },
    bodyParams() {
      return sortBy(
        this.resource.parameters.filter(p => p.name.indexOf('data.') === 0),
        'name'
      );
    },
    responseFields() {
      return sortBy(this.resource['response_fields'], 'name');
    },
  },
  methods: {
    kabobCase,
  },
  components: { ApiRefParameter, ApiRefEndpoint, ApiRefContainer, Prism },
};
</script>

<style>
.api-ref-resource {
}
</style>
