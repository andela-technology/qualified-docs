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
            depth: segments.length-2,
            current,
            active: current || currentPage.path.indexOf(directory.length > 1 ? directory : page.path) === 0,
            pages: [],
            ...page
        }
    }).reverse()
}

export function getNestedPages(currentPage, pages) {
    const mapped = extendPageData(currentPage, pages)
    // now that we have the pages mapped and extended with additional properties,
    // lets link them to their parents
    mapped.forEach(page => {
        if (page.directory !== '/') {
            const parent = mapped.find(p => p.path === page.directory)
            if (parent) {
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

    if (!next || !prev) {
        const pagesInfo = getNestedPages(currentPage, pages)
        page = pagesInfo.find(p => p.current)
        let parent = pagesInfo.find(p => p.path === page.directory)

        if (parent) {
            const ndx = parent.pages.findIndex(p => p.current)
            const findSibling = offset => pagesInfo.find(
                p => p.depth === parent.depth && p.order === (parent.order + offset) && parent.directory === p.directory
            )
            if (ndx > 0) {
                prev = parent.pages[ndx - 1]
            }
            else {
                const prevParent = findSibling(-1)
                if (prevParent) {
                    prev = prevParent.pages.slice(-1)[0]
                }
            }

            if (ndx < parent.pages.length - 1) {
                next = parent.pages[ndx + 1]
            }
            else {
                const nextParent = findSibling(1)
                if (nextParent) {
                    next = nextParent.pages[0]
                }
            }
        }
    }

    return { next, prev, current: page }
}
