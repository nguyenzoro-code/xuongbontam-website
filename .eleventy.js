module.exports = function(eleventyConfig) {
    
    // =================================================================
    // DẠY CHO ELEVENTY CÁCH LỌC SẢN PHẨM (Đoạn code mới)
    // =================================================================
    eleventyConfig.addFilter("filterByCategory", function(products, category) {
        // Lấy tất cả sản phẩm, và chỉ trả về những sản phẩm có `category` khớp với yêu cầu.
        return products.filter(item => item.category === category);
    });

    // =================================================================
    // CẤU HÌNH COPY CÁC THƯ MỤC TĨNH (Giữ nguyên như cũ)
    // =================================================================
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("googlea646ca703ce09e10.html");
    eleventyConfig.addPassthroughCopy("robots.txt");

    // =================================================================
    // CẤU HÌNH CHUNG (Giữ nguyên như cũ)
    // =================================================================
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