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

import java.security.NoSuchAlgorithmException;

import static org.assertj.core.api.Assertions.assertThat;

public class HashTest {

    @Test
    public void shouldCreateStableHash() throws NoSuchAlgorithmException {

        String hash1 = Hash.generateHash("Hello World");
        String hash2 = Hash.generateHash("Hello World");

        assertThat(hash1).isNotEmpty();
        assertThat(hash2).isNotEmpty();
        assertThat(hash1).isEqualTo(hash2);
        assertThat(hash1.length()).isGreaterThan(11);


    }
}
