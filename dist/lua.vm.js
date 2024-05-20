var lua = null;
var luaInput = ''

function runLua(code) {
    luaInput = code;

    LuaJS.call().then((l) => {
        lua = l
        l.callMain()
    })
}
