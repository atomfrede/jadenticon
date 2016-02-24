package com.github.atomfrede.jadenticon;

import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;

public class Jadenticon {

    protected final String hash;
    protected JdenticonWrapper jdenticonWrapper;
    protected int size;
    protected double padding;

    protected Jadenticon(String hash) {
        jdenticonWrapper = new JdenticonWrapper();
        this.hash = hash;
        this.size = 300;
        this.padding = 0.08;
    }

    public static Jadenticon from(String text) {
        //TODO build a stable hash from the given text;
        return new Jadenticon(text);
    }

    public Jadenticon withSize(int size) {

        if (size <= 30)
            throw new IllegalArgumentException("Size must be greater than 30");

        this.size = size;
        return this;
    }

    public Jadenticon withPadding(double padding) {

        if (padding < 0.0)
            throw new IllegalArgumentException("Padding must be greater than 0.0");

        if (padding > 0.5)
            throw new IllegalArgumentException("Padding must be smaller than 0.5");

        this.padding = padding;
        return this;
    }

    public String toSvg() {

        return jdenticonWrapper.getSvg(this);
    }

    public File file() throws IOException {

        File f = new File("jdenticon_" + hash + ".svg");
        FileUtils.writeStringToFile(f, jdenticonWrapper.getSvg(this));
        return f;
    }

    public File file(String fileName) throws IOException {

        File f = new File(fileName);
        FileUtils.writeStringToFile(f, jdenticonWrapper.getSvg(this));
        return f;
    }


}
