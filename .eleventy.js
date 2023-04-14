module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("*.css");
    eleventyConfig.addPassthroughCopy("main.js");
    eleventyConfig.addPassthroughCopy("assets/*");
    eleventyConfig.addPassthroughCopy("fonts/*");
    eleventyConfig.disable
};