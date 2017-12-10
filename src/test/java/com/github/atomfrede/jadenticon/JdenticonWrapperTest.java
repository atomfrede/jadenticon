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

import org.junit.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class JdenticonWrapperTest {

    JdenticonWrapper wrapper = JdenticonWrapper.getInstance();

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
