import privateApiData from '../../content/api/private.json';
import publicApiData from '../../content/api/public.json';
import {groupBy} from './array-utils';
import {kabobCase} from './string-utils';

function addUniqueKeys(api) {
    const found = {};
    return api.map(resource => {
        let key = `${resource.http_method.toLowerCase()}-${kabobCase(resource.route.replace(/[-\W]+/g, '-'))}`;
        if(found[key]) {
            found[key]++;
            key += `-${found[key]}`;
        } else {
            found[key] = 1;
        }
        resource._key = key;
        return resource;
    });
}

const APIS = {
    private: addUniqueKeys(privateApiData),
    public: addUniqueKeys(publicApiData),
};

export function apiTypeForPage(page) {
    return page.markdownPage && page.markdownPage.apiRef === 'private' ? 'private' : 'public';
}

export function apiForPage(page) {
    console.log(apiTypeForPage(page));
    return APIS[apiTypeForPage(page)];
}

export function groupedApiForPage(page) {
    return groupBy(apiForPage(page), 'resource');
}
