cd lua/src
make emscripten

cp lua.js ../../dist/
cp lua.wasm ../../dist/

# http://localhost:9080/repl.html