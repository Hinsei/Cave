import livereload from "rollup-plugin-livereload";
import serve      from "rollup-plugin-serve";
import babel      from "rollup-plugin-babel";
import commonjs   from "rollup-plugin-commonjs";
import resolve    from "rollup-plugin-node-resolve";
import globals    from "rollup-plugin-node-globals";
import md         from "rollup-plugin-md";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    sourcemap: true,

  },
  plugins: [
    babel({
      babelrc: false,
      exclude: ["node_modules/**", "markdown/**"],
      presets: [["es2015", {modules: false}], "stage-0", "react"],
      plugins: ["external-helpers"]
    }),
    resolve({
      jsnext: true,
      browser: true,
      main: true
    }),
    commonjs({
      exclude: "node_modules/process-es6/**",
      include: [
        "node_modules/create-react-class/**",
        "node_modules/fbjs/**",
        "node_modules/object-assign/**",
        "node_modules/react/**",
        "node_modules/react-dom/**",
        "node_modules/prop-types/**",
      ],
    }),
    md({
      watcher: {
        gfm: true,
        breaks: true,
        sanitize: true
      }

    }),
    globals(),
    livereload("dist"),
    serve("dist")
  ]
}
