module.exports = function(eleventyConfig) {
    eleventyConfig.addCollection('posts', function(collection) {
        return collection.getFilteredByGlob('_posts/*.md');
    });

    eleventyConfig.addFilter("slugify", function(str) {
        if (!str || typeof str !== 'string') {
            return '';
        }
        return str.replace(/\s+/g, '-').toLowerCase();
    });

    return {
        markdownTemplateEngine: "liquid",
        dir: {
            input: ".",
            output: "_site",
            includes: "_includes",
            data: "_data",
        },
        passthroughFileCopy: true,
        htmlTemplateEngine: "liquid",
        templateFormats: ["html", "liquid", "md"],
        permalink: "/_site{{ post.url }}",
    };
};




