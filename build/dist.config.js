import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'

export default {
  entry: 'app/app.jsx',
  dest: 'renderer.min.js',
  format: 'umd',
  moduleName: 'Duo',
  plugins:[
    nodeResolve({
      jsnext: true,
      main: true,
      extensions: ['.js', '.jsx']
    }),
    commonjs(),
    json(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ],
  sourceMap: true
}
