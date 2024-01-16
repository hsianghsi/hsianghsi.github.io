module.exports = function(eleventyConfig) {
    eleventyConfig.addCollection('posts', function(collection) {
      return collection.getFilteredByGlob('posts/*.md');
    });
  
    return {
      markdownTemplateEngine: "liquid",
      dir: {
        input: ".",
        output: "_site",
      },
    };
  };
  