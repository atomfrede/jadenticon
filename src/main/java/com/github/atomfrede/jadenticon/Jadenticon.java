package com.github.atomfrede.jadenticon;

import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;

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

        try {
            return new Jadenticon(Hash.generateHash(text));
        } catch (NoSuchAlgorithmException e) {

            throw new RuntimeException("Unable to generate hash.", e);
        }
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

        File f = createTempFile();
        FileUtils.writeStringToFile(f, jdenticonWrapper.getSvg(this));
        return f;
    }

    public File file(String fileName) throws IOException {

        File f = createTempFile(fileName);
        File result = new File(f.getParentFile(), "example.svg");
        FileUtils.writeStringToFile(f, jdenticonWrapper.getSvg(this));
        FileUtils.moveFile(f, result);
        return result;
    }

    private File createTempFile() throws IOException {
        File file = createTempFile("jdenticon-" + this.hash);
        file.deleteOnExit();
        return file;
    }

    private File createTempFile(String name) throws IOException {
        File file = File.createTempFile(name, ".svg");
        file.deleteOnExit();
        return file;
    }


}
