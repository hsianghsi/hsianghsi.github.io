module.exports = function(eleventyConfig) {
    eleventyConfig.addCollection('posts', function(collection) {
      return collection.getFilteredByGlob('posts/*.md');
    });
  
    return {
      markdownTemplateEngine: "html",
      dir: {
        input: ".",
        output: "_site",
      },
    };
};
  