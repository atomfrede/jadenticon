package com.github.atomfrede.jadenticon;

import org.junit.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class JdenticonWrapperTest {

    JdenticonWrapper wrapper = new JdenticonWrapper();

    @Test
    public void shouldCreateSvgWithDefaults() {

        Jadenticon jadenticon = Jadenticon.from("ff8adece0631821959f443c9d956fc39");
        String svg = wrapper.getSvg(jadenticon);

        assertThat(svg).isNotNull();
        assertThat(svg).isNotEmpty();
        assertThat(svg).startsWith("<svg");
    }


    @Test
    public void shouldCreateSvgWithSize() {

        Jadenticon jadenticon = Jadenticon.from("ff8adece0631821959f443c9d956fc39")
            .withSize(555);
        String svg = wrapper.getSvg(jadenticon);

        assertThat(svg).isNotNull();
        assertThat(svg).isNotEmpty();
        assertThat(svg).startsWith("<svg");
    }

    @Test
    public void shouldCreateSvgWithPadding() {

        Jadenticon jadenticon = Jadenticon.from("ff8adece0631821959f443c9d956fc39")
            .withPadding(0.45);
        String svg = wrapper.getSvg(jadenticon);

        assertThat(svg).isNotNull();
        assertThat(svg).isNotEmpty();
        assertThat(svg).startsWith("<svg");
    }

    @Test
    public void shouldCreateSvgWithPaddingAndSize() {

        Jadenticon jadenticon = Jadenticon.from("ff8adece0631821959f443c9d956fc39")
            .withPadding(0.45)
            .withSize(555);

        String svg = wrapper.getSvg(jadenticon);

        assertThat(svg).isNotNull();
        assertThat(svg).isNotEmpty();
        assertThat(svg).startsWith("<svg");
    }
}
