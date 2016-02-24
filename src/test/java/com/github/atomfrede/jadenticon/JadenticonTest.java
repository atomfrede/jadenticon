package com.github.atomfrede.jadenticon;

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
    }

    @Test
    public void shouldGetFile() throws IOException {

        File result = Jadenticon.from("ff8adece0631821959f443c9d956fc39").withSize(555).file();

        assertThat(result).isNotNull();
        assertThat(result).exists();
        assertThat(result).isFile();
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
}
