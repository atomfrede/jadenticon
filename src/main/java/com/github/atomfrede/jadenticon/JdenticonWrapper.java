package com.github.atomfrede.jadenticon;

import org.apache.commons.io.IOUtils;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.InputStream;
import java.nio.charset.Charset;

class JdenticonWrapper {

    private static JdenticonWrapper instance = new JdenticonWrapper();
    private Object jdenticon;
    private Invocable invocable;

    private JdenticonWrapper() {

        try {
            ScriptEngineManager scriptEngineManager = new ScriptEngineManager();
            ScriptEngine nashorn = scriptEngineManager.getEngineByName("nashorn");

            invocable = (Invocable) nashorn;

            InputStream scriptStream = getClass().getResourceAsStream("/jdenticon.js");
            String script = IOUtils.toString(scriptStream, Charset.forName("UTF-8"));
            scriptStream.close();

            nashorn.eval(script);

            jdenticon = nashorn.eval("jdenticon");
        } catch (Exception e) {

            throw new RuntimeException("Unable to setup nashorn and jdenticon script.", e);
        }

    }

    static JdenticonWrapper getInstance() {
        return instance;
    }

    String getSvg(Jadenticon jadenticon) {

        try {
            return (String) invocable.invokeMethod(jdenticon, "toSvg", jadenticon.getHash(), jadenticon.getSize(), jadenticon.getPadding());
        } catch (ScriptException | NoSuchMethodException e) {

            throw new RuntimeException("Unable to create jdenticon svg.", e);
        }

    }
}
