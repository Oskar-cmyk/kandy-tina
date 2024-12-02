module.exports = function(eleventyConfig) {
    // Pass-through file copies
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("public"); // Ensure public folder is passed through

    eleventyConfig.addCollection("posts", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/posts/*.md");
    });


    return {
        dir: {
            input: "src",         // Your input folder
            output: "_site",      // Output folder
            includes: "_includes", // Includes folder
            layouts: "_layouts"    // Layouts folder
        },
        markdownTemplateEngine: 'njk'
    };
};
