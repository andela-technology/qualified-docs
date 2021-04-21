let _embedded = null;

export function isEmbedded() {
    if(_embedded === null) {
        _embedded = false;
        if(process.isClient) {
            const windowMatch = /QUALIFIED-DOCS-EMBEDDED/.test(window.name);
            const matcher = (window.location.search || '').match(/\bembedded=(true|false)\b/);
            // the following lines preserve this setting across refreshes when navigating
            if(matcher) {
                _embedded = matcher[1] === 'true';
                if(windowMatch && !_embedded) {
                    window.name = window.name.replace(/\s*QUALIFIED-DOCS-EMBEDDED/g, '');
                } else if(!windowMatch && _embedded) {
                    window.name = window.name + ' QUALIFIED-DOCS-EMBEDDED';
                }
            } else {
                _embedded = windowMatch;
            }
        }
    }
    return _embedded;
}

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

export function extendPageData(currentPage, pages) {
    return pages.map(page => {
        const segments = page.path.split('/')
        const directory = segments.slice(0, -2).join('/') + '/'
        const file = segments[segments.length - 2]
        const current = currentPage.path === page.path
        return {
            directory,
            file,
            depth: segments.length - 2,
            current,
            active: current || currentPage.path.indexOf(directory.length > 1 ? directory : page.path) === 0,
            pages: [],
            ...page,
        }
    }).reverse()
}

export function getNestedPages(currentPage, pages) {
    const mapped = extendPageData(currentPage, pages)
    // now that we have the pages mapped and extended with additional properties,
    // lets link them to their parents
    mapped.forEach(page => {
        if(page.directory !== '/') {
            const parent = mapped.find(p => p.path === page.directory)
            if(parent) {
                parent.pages.push(page)
            }
        }
    })

    return mapped
}

export function getNextPrev(currentPage, pages) {
    let next = currentPage.next
    let prev = currentPage.prev
    let page
    const availablePages = pages => {
        if(currentPage.private) return pages
        return pages.filter(p => !p.private)
    }

    if(!next || !prev) {
        const pagesInfo = getNestedPages(currentPage, pages)
        page = pagesInfo.find(p => p.current)
        let parent = pagesInfo.find(p => p.path === page.directory)

        if(parent) {
            const parentPages = availablePages(parent.pages)
            const ndx = parentPages.findIndex(p => p.current)
            const findSibling = offset => pagesInfo.find(
                p => p.depth === parent.depth &&
                    p.order === (parent.order + offset) &&
                    parent.directory === p.directory,
            )

            if(ndx > 0) {
                prev = parentPages[ndx - 1]
            } else {
                let prevParent = findSibling(-1)
                if(prevParent && prevParent.private) {
                    prevParent = findSibling(-2)
                }
                if(prevParent) {
                    prev = availablePages(prevParent.pages).slice(-1)[0]
                }
            }

            if(ndx < parentPages.length - 1) {
                next = parentPages[ndx + 1]
            } else {
                let nextParent = findSibling(1)
                if(nextParent && nextParent.private) {
                    nextParent = findSibling(2)
                }
                if(nextParent) {
                    next = availablePages(nextParent.pages)[0]
                }
            }
        }
    }

    return {next, prev, current: page}
}
