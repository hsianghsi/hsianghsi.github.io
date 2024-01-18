const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");
const markdownImplicitFigures = require('markdown-it-implicit-figures');

module.exports = function(eleventyConfig) {

    // configure markdown library to use custom plugins
    const markdownLib = markdownIt({
        html: true,
        linkify: true,
    })
        .use(markdownItFootnote) // add footnote plugin
        //.use(markdownImplicitFigures, {figcaption: true}); // add implicit figures
    eleventyConfig.setLibrary("md", markdownLib);

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
        permalink: "{{ post.url | url }}",
    };
};




