module.exports = function(eleventyConfig) {
    
    // =================================================================
    // BỔ SUNG QUAN TRỌNG: Dạy Eleventy cách copy thư mục admin
    // =================================================================
    eleventyConfig.addPassthroughCopy("admin");

    // =================================================================
    // CÁC CẤU HÌNH CŨ (Giữ nguyên)
    // =================================================================
    eleventyConfig.addFilter("filterByCategory", function(products, category) {
        return products.filter(item => item.category === category);
    });

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("googlea646ca703ce09e10.html");
    eleventyConfig.addPassthroughCopy("robots.txt");

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site",
        },
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    };
};