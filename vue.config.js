const API_SERVER_URL = "http://localhost:3000";

module.exports = {
  "devServer": {
    "proxy": {
      "^/api": {
        "target": API_SERVER_URL,
        "changeOrigin": true,
        "pathRewrite": {
          "^/api": ""
        }
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
