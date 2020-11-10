---
title: REST API
description: "Help for accessing the Qualified API programmatically"
order: 2
apiRef: true
---

# REST API

If your subscription includes it, you can enable API-level control over your candidates, assessments, and more through the Qualified API. Once it's enabled, your account will have a unique access key associated with it.

:::important Premium Feature
API Access is only available on our custom plans.
:::


## Authorization

Authorization is done by passing in an API key to the `Authorization` header. If your account is on a plan that allows API access then you
will be able to find your key by going to [Team Settings > Integrations](https://www.qualified.io/hire/account/integrations) within the Qualified app.

### Generating an API Key

On the API Access page you'll be able to generate a new API key if you don't have one
already or in case you believe your current API key could have been compromised. Once you
generate a new key, the old key is no longer valid. Keep it a secret!

![API key shown within team integrations settings page](/images/hire/api-key.png)
:::tip API Key Safety
Make sure to keep your API key safe. Do not expose it through client-side applications.
:::

### Authorization Header

All resource endpoints should be requested using the `authorization` header. In the example
requests shown below for each resource, you can see where this value would be set. You should replace
`:api_key` with your actual API key.


## Parameter Casing

Both camel and underscore casing is supported when sending data to the sever. 

**For Example:**

```bash
# Example request with underscore casing 
curl --request POST \
     --url https://www.qualified.io/api/v1/assessments/5da42a8ea54d75e0663421c2/challenge_items/ \
     --header 'authorization: 1MnbNTTL1O' \
     --header 'Content-Type: application/json' \
     --data '{"data":{"challenge_id":"5fa42a8ea54d75e066342d39"}}'
```

and 

```bash
# Example request with camel casing 
curl --request POST \
     --url https://www.qualified.io/api/v1/assessments/5da42a8ea54d75e0663421c2/challenge_items/ \
     --header 'authorization: 1MnbNTTL1O' \
     --header 'Content-Type: application/json' \
     --data '{"data":{"challengeId":"5fa42a8ea54d75e066342d39"}}'
```

are equivalent to each other.

:::note Request Examples
The request examples given in the RESOURCES section will use underscore casing for consistency. Keep in mind that you can use either casing format.
::: 

## Query Params
### "includes" Param

There is a special parameter called "includes", available on most model requests. This parameter will fetch additional relations related to each model
and include them within the model's JSON response. For example if you are returning an assessment result and want to include the related `solutions`,
you can include them within a single API call.

The following example shows how to include challenge data on a solution.

```bash
curl --require POST \
     --url https://www.qualified.io/api/v1/solutions/5ca42f3ea54d75e0653421d2?includes=challenge \
     --header 'authorization: 1MnbNTTL1O' \
     --header 'Content-Type: application/json' \
```

:::note Multiple Params
If you wish to include multiple relations, you will need to use multiple instances of the `includes` param, except you will also need to name it `includes[]`. 

For example:
```bash
curl --require POST \
     --url https://www.qualified.io/api/v1/solutions/5ca42f3ea54d75e0653421d2?includes[]=challenge&includes[]=assessment_result \
     --header 'authorization: 1MnbNTTL1O' \
     --header 'Content-Type: application/json' \
```
:::

### "where" Param

A `where` param with an encoded JSON value can be passed in to certain `List` endpoints. This param allows you to filter list data by specific fields. Not all fields on the object are typically available for use with filters, in some cases only a few fields have been whitelisted.

The following example shows how to filter challenges to only show those that are published.

```bash
curl --require POST \
     --url https://www.qualified.io/api/v1/challenges/5ea42a8ea54d75e0653421d2?where=%7B%22state%22%3A%20%22published%22%7D \
     --header 'authorization: 1MnbNTTL1O' \
     --header 'Content-Type: application/json' \
```

Notice that the `where` query parameter has an encoded `{"state": "published"}` value.

#### Where Operators
The JSON that is sent to the where param can be more than just search for equality. The following operators are supported:

- `"=="`, `"!="`, `">="`, `"<="`, `">"`, and `"<"`
- `"contains"`: Partial text matches
- `"in"`: If one or more values are within an array or match a field
- `"nin"`: If zero values are within an array or field

:::tip Example
Select records which state are either opened or started
```javascript 
{ "state": { "in": ["opened", "started"] } }
```
:::

:::warning Performance Considerations
Please keep your queries simple and short, ideally limited to no more than two filters at once. Not all fields are indexed and you may not achieve good performance with certain combinations.
::: 

#### Filterable Fields
Only some fields can be used as filters on certain "List" endpoints, while some List endpoints don't allow filters at all. Check each endpoint's parameter list to see what fields are filterable.
  

