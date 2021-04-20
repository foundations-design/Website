module.exports = config => {

    const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

    // Returns a collection of blog posts in reverse date order
    config.addCollection('blog', collection => {
        return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
    });


    // Returns work items, sorted by display order
    config.addCollection('work', collection => {
        return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'))
    })

    // Returns work items, sorted by display order then filtered by featured
    config.addCollection('featuredWork', collection => {
        return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md')).filter(x => x.data.featured)
    })

    config.addPassthroughCopy('./src/images/')

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {

            input: 'src',
            output: 'dist'
        }
    }
}