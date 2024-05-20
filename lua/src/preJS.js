Module = {
    'preRun': function () {
        // Edit below or make an option to selectively wrap malloc/free.
        if (true) {
            console.log('Wrapping malloc/free');
            let FS_stdin_getChar_buffer = new ArrayBuffer(0);
            LuaJS['FS_stdin_getChar'] = FS_stdin_getChar = function () {
                if (!FS_stdin_getChar_buffer.length) {
                    console.log('FS_stdin_getChar()');
                    let input = luaInput;
                    luaInput = '';

                    if (!input)
                        return null;

                    FS_stdin_getChar_buffer = intArrayFromString(input, true)
                }

                let res = FS_stdin_getChar_buffer.shift();
                return res;
            }            
        }
    }
}