import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "iife"
  },
  plugins: [
    serve("dist"),
    livereload("dist")
  ]
}
