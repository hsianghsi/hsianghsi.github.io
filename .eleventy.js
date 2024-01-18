const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function(eleventyConfig) {
    // Configure markdown library to use custom plugins
    const markdownLib = markdownIt({
        html: true,
        linkify: true,
    }).use(markdownItFootnote); // add footnote plugin

    eleventyConfig.setLibrary("md", markdownLib);

    eleventyConfig.addCollection('posts', function(collection) {
        // Copy Markdown files from _posts to _site
        eleventyConfig.addPassthroughCopy('_posts/*.md');
        
        // Manually set the outputPath to include _site
        return collection.getFilteredByGlob('_posts/**/*.md').map(post => {
            post.outputPath = '_site/' + post.fileSlug + '/index.html';
            return post;
        });
    });

    eleventyConfig.addFilter("slugify", function(str) {
        if (!str || typeof str !== 'string') {
            return '';
        }
        return str.replace(/\s+/g, '-').toLowerCase();
    });

    // Copy styles.css and script.js to the output directory
    eleventyConfig.addPassthroughCopy("styles.css");
    eleventyConfig.addPassthroughCopy("script.js");

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
    };
};
















