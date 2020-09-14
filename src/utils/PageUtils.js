export function getRelatedPages(currentPage, pages) {
    const children = [];
    const currentPath = currentPage.path;
    const currentPathMatcher = new RegExp('^' + currentPath + '[^/]+/$');

    const sibling = [];
    const pathParts = currentPath.split('/').filter(p => p);
    const parentPath = `/${pathParts.length > 1 ? pathParts.slice(0, -1).join('/') : pathParts.join('/')}/`;
    const parentPathMatcher = new RegExp('^' + parentPath + '[^/]+/$');

    pages.forEach(page => {
        if(currentPathMatcher.test(page.path)) {
            children.push(page);
        } else if(parentPathMatcher.test(page.path) && page.path !== currentPath) {
            sibling.push(page);
        }
    });

    return {children, sibling};
}
