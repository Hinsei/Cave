import livereload from "rollup-plugin-livereload";
import serve      from "rollup-plugin-serve";
import babel      from "rollup-plugin-babel";
import commonjs   from "rollup-plugin-commonjs";
import resolve    from "rollup-plugin-node-resolve";
import globals    from "rollup-plugin-node-globals";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "iife"
  },
  plugins: [
    babel({
      babelrc: false,
      exclude: "node_modules/**",
      presets: [["es2015", {modules: false}], "stage-0", "react"],
      plugins: ["external-helpers"]
    }),
    commonjs({
      exclude: "node_modules/process-es6/**",
      include: [
        "node_modules/create-react-class/**",
        "node_modules/fbjs/**",
        "node_modules/object-assign/**",
        "node_modules/react/**",
        "node_modules/react-dom/**",
        "node_modules/prop-types/**"
      ]
    }),
    globals(),
    resolve({
      browser: true,
      main: true
    }),
    serve("dist"),
    livereload("dist")
  ]
}
