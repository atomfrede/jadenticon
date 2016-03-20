package com.github.atomfrede.jadenticon;

import org.apache.batik.transcoder.TranscoderException;
import org.junit.Ignore;
import org.junit.Test;

import java.io.File;
import java.io.IOException;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

public class JadenticonTest {

    @Test
    public void shouldGetJadenticonWithDefaults() {

        String svg = Jadenticon.from("ff8adece0631821959f443c9d956fc39").toSvg();

        assertThat(svg).isNotNull();
        assertThat(svg).isNotEmpty();
        assertThat(svg).startsWith("<svg");
    }

    @Test
    public void shouldGetJadenticonWithDefaultsForName() {

        String svg = Jadenticon.from("Jane Doe").toSvg();

        assertThat(svg).isNotNull();
        assertThat(svg).isNotEmpty();
        assertThat(svg).startsWith("<svg");
    }

    @Test
    public void shouldGetJadenticonWithSize() {

        String svg = Jadenticon.from("ff8adece0631821959f443c9d956fc39").withSize(555).toSvg();

        assertThat(svg).isNotNull();
        assertThat(svg).isNotEmpty();
        assertThat(svg).startsWith("<svg");
    }

    @Test
    public void shouldGetFileWithName() throws IOException {
        File result = Jadenticon.from("ff8adece0631821959f443c9d956fc39").withSize(555).file("example");

        assertThat(result).isNotNull();
        assertThat(result).exists();
        assertThat(result).isFile();
        assertThat(result.getName()).doesNotStartWith("jdenticon");
        assertThat(result.getName()).endsWith(".svg");
        assertThat(result.getName()).isEqualTo("example.svg");

        result.delete();
    }

    @Test
    public void shouldGetFile() throws IOException {

        File result = Jadenticon.from("Octo Cat").withSize(555).file();

        assertThat(result).isNotNull();
        assertThat(result).exists();
        assertThat(result).isFile();
        assertThat(result.getName()).startsWith("jdenticon");
        assertThat(result.getName()).endsWith(".svg");
        assertThat(result.getName()).isNotEqualTo("jdenticon-019e230c962d84d4219d2176f73daf58d611b87fdc1d9b257cfe7ef1aaca54ec973551241045803171.svg");

        result.delete();

    }

    @Test
    public void shouldCheckSizeRestrictions() {

        assertThatThrownBy(() -> {
            Jadenticon.from("ff8adece0631821959f443c9d956fc39").withSize(25);
        }).isInstanceOf(IllegalArgumentException.class)
            .hasMessageContaining("Size must be greater than 30");
    }

    @Test
    public void shouldCheckPaddingRestrictions() {

        assertThatThrownBy(() -> {
            Jadenticon.from("ff8adece0631821959f443c9d956fc39").withPadding(0.51);
        }).isInstanceOf(IllegalArgumentException.class)
            .hasMessageContaining("Padding must be smaller than 0.5");

        assertThatThrownBy(() -> {
            Jadenticon.from("ff8adece0631821959f443c9d956fc39").withPadding(-1.0);
        }).isInstanceOf(IllegalArgumentException.class)
            .hasMessageContaining("Padding must be greater than 0.0");
    }

    @Test
    public void shouldCreatePngWithRandomFileName() throws IOException, TranscoderException {

        File png = Jadenticon.from("Hello World!").png();

        assertThat(png).isNotNull();
        assertThat(png).isFile();
        assertThat(png).exists();
        assertThat(png).canRead();

        png.delete();
    }

    @Test
    public void shouldCreatePngWithFileName() throws IOException, TranscoderException {

        File png = Jadenticon.from("Hello World!").png("HelloWorld");

        assertThat(png).isNotNull();
        assertThat(png).isFile();
        assertThat(png).exists();
        assertThat(png).canRead();

        png.delete();
    }
}
