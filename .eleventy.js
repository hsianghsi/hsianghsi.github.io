module.exports = function(eleventyConfig) {
    return {
      markdownTemplateEngine: "liquid",
      dir: {
        input: ".",
        output: "_site",
      },
    };
  };
  