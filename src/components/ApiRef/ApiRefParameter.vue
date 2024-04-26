<template>
  <div class="api-ref-parameter">
    <div class="api-ref-parameter__name">
      <span v-if="prefix" class="api-ref-parameter__prefix">{{ prefix }}.</span>
      <span class="api-ref-parameter__field">{{ field }}</span>
      <span
        :class="`api-ref-parameter__label api-ref-parameter__label--${optionalLabel}`"
        v-if="optionalLabel"
        >{{ optionalLabel }}</span
      >
      <span class="api-ref-parameter__label" v-if="typeLabel">{{
        typeLabel
      }}</span>
    </div>
    <div
      class="api-ref-parameter__desc"
      v-if="description"
      v-html="description"
    />
    <div class="api-ref-parameter__enum" v-if="hasEnums">
      <div>{{ enumTitle }}:</div>
      <template v-for="(desc, key) in enums">
        <div
          v-if="desc && key"
          :key="key"
          class="api-ref-parameter__enum-value"
        >
          <strong>"{{ key }}":</strong>{{ desc }}
        </div>
        <span v-else :key="key" class="api-ref-parameter__enum-value">
          {{ key }}
        </span>
      </template>
    </div>
    <div class="api-ref-parameter__enum" v-if="parameter.models">
      <div>Only Relevant On $type:</div>
      <span v-for="val in parameter.models.sort()" :key="val">{{ val }}</span>
    </div>
    <div class="api-ref-parameter__schema" v-if="parameter.schema">
      <api-ref-container title="Child Parameters" default-closed nested>
        <api-ref-parameter
          v-for="(value, key) in parameter.schema"
          :key="key"
          :parameter="schemaParam(key, value)"
          :ignore-required="ignoreRequired"
        />
      </api-ref-container>
    </div>
  </div>
</template>

<script>
import { camelCase } from "../../utils/string-utils";
import ApiRefContainer from "./ApiRefContainer";
export default {
  name: "ApiRefParameter",
  props: {
    parameter: Object,
    ignoreRequired: Boolean,
  },
  data() {
    return {};
  },
  computed: {
    optionalLabel() {
      if (!this.ignoreRequired) {
        return this.parameter.required || this.parameter.name === "id"
          ? "required"
          : "optional";
      }
      return null;
    },
    typeLabel() {
      const parts = [];

      if (this.parameter.unique) {
        parts.push("unique");
      }

      if (this.parameter.type) {
        switch (this.parameter.type) {
          case "Hash":
            parts.push("Object");
            break;
          case "Time":
            parts.push("Date");
            break;
          case "Mongoid::Boolean":
            parts.push("Boolean");
            break;
          default:
            parts.push(this.parameter.type);
        }
      } else if (this.parameter.name.endsWith("_id")) {
        parts.push("String");
      } else {
        switch (this.parameter.name) {
          case "limit":
          case "page":
            parts.push("Integer");
            break;
          case "includes":
          case "order_by":
          case "id":
            parts.push("String");
            break;
        }
      }

      return parts.join(" ");
    },
    hasEnums() {
      return Object.keys(this.enums).length > 0;
    },
    enums() {
      const enumParam = this.parameter.enum || [];
      if (Array.isArray(enumParam)) {
        let enumObj = {};
        enumParam
          .sort()
          .filter((v) => !!v && v !== "nil")
          .forEach((v) => (enumObj[v] = null));
        return enumObj;
      }
      return enumParam;
    },
    enumTitle() {
      switch (this.parameter.name) {
        case "where":
          return "Accepted Fields";
        default:
          return "Accepted Values";
      }
    },
    description() {
      const description = this.parameter.description || this.parameter.desc;
      if (description && description.trim() !== this.parameter.name) {
        return this.parameter.markdown || description;
      }

      switch (this.parameter.name) {
        case "id":
          return "The ID of the resource.";
        case "includes":
          return "One or more values indicating additional associated records that should be included.";
        case "page":
          return "The index of which page of results should be returned.";
        case "limit":
          return "The limit on how many results can be returned. This value determines the page size.";
        case "order_by":
          return 'i.e. "createdAt DESC"';
        case "where":
          return "A URI encoded JSON value indicating the query you wish to filter by.";
        default:
          return null;
      }
    },
    prefix() {
      if (this.parameter.scope) {
        return this.parameter.scope;
      }

      if (this.parameter.name.indexOf(".") > 0) {
        return this.parameter.name.replace(/\.\w*$/, "").replace(".$type", "");
      }
      return null;
    },
    field() {
      return this.parameter.name.split(".").slice(-1)[0];
    },
  },
  methods: {
    schemaParam(name, parameter) {
      if (typeof parameter === "string") {
        parameter = {
          desc: parameter,
          type: "String",
        };
      }
      return {
        ...parameter,
        name: camelCase(name),
      };
    },
  },
  components: { ApiRefContainer },
};
</script>

<style>
.api-ref-parameter {
  --color-ui-ref-parameter: #779db3;
  @apply pl-3 mb-3;
  border-left: 4px solid var(--color-ui-ref-parameter);
  border-radius: 7px;
}

html[lights-out] {
  .api-ref-parameter {
    --color-ui-ref-parameter: var(--color-ui-fade-bg);
  }
}

.api-ref-parameter__name {
  @apply mb-1;
}

.api-ref-parameter__prefix {
  @apply font-mono text-xs tracking-wide;
  color: var(--color-ui-fade);
}
.api-ref-parameter__field {
  @apply font-mono text-xs tracking-wide font-bold;
}
.api-ref-parameter__label {
  @apply text-xs ml-2;
  color: var(--color-ui-fade);
}

.api-ref-parameter__label + .api-ref-parameter__label {
  @apply ml-1;
}

.api-ref-parameter__label--required {
  @apply font-bold;
  color: var(--color-ui-danger);
}

.api-ref-parameter__desc {
  @apply mb-3;
  opacity: 0.9;
  font-size: 0.95rem;
  code {
    font-size: 13px;
  }
}

.api-ref-parameter__enum {
  div:not(.api-ref-parameter__enum-value) {
    @apply text-xs uppercase mb-1 tracking-wide rounded;
    opacity: 0.8;
  }
}
.api-ref-parameter__enum + .api-ref-parameter__enum {
  @apply mt-4;
}

.api-ref-parameter__enum-value {
  @apply rounded mr-1 mt-1 text-sm inline-flex;
  padding: 1px 4px;
  background-color: var(--color-ui-fade-bg);
}

div.api-ref-parameter__enum-value {
  @apply p-2;
  display: block;

  > strong {
    @apply mr-1;
  }
}

.api-ref-parameter__schema {
  @apply mb-6 mt-3;

  .api-ref-container {
    @apply mt-0;
  }
}

.api-ref-parameter__desc + .api-ref-parameter__enum {
  @apply mt-3;
}

.api-ref-parameter:last-child {
  .api-ref-parameter__desc {
    @apply mb-0;
  }
  .api-ref-parameter__enum {
    @apply mb-1;
  }
}
</style>
