var lua = null;
var luaInput = ''

function runLua(code) {
    luaInput = code+'\r\n';

    LuaJS.call().then((l) => {
        lua = l
        l.callMain()
    })
}
