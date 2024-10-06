/* vue.config.js */
module.exports = {
    css: {
        sourceMap: true,
        loaderOptions: {
            scss: {
                data: `@import "~@assets/scss/styles.scss";`
            }
        }
    }
}