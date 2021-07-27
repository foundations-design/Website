module.exports = (config) => {
   //copy /images to dist/images
   config.addPassthroughCopy("./src/images");

   return {
      markdownTemplateEngine: "njk",
      dataTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dir: {
         input: "src",
         output: "dist",
      },
   };
};
