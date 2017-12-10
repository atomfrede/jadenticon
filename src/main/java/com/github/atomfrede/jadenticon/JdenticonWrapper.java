/*
 * Copyright 2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
