package com.github.atomfrede.jadenticon;


import org.junit.jupiter.api.Test;

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
