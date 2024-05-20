cd lua/src
make emscripten

cat <<EOT >> lua.js
FS_stdin_getChar = function () {
    let inputBuffer = Buffer(luaInput)
    luaInput = ''

    if (inputBuffer.length === 0) {
        return null; // No input available
    }
    return inputBuffer.pop().charCodeAt(0);
};
EOT

cp lua.js ../../dist/
cp lua.wasm ../../dist/