[![Build Status](https://travis-ci.org/atomfrede/jadenticon.svg?branch=master)](https://travis-ci.org/atomfrede/jadenticon)
[![Latest Release](https://jitpack.io/v/atomfrede/jadenticon.svg)](https://jitpack.io/#atomfrede/jadenticon)
[![codecov.io](https://codecov.io/github/atomfrede/jadenticon/coverage.svg?branch=master)](https://codecov.io/github/atomfrede/jadenticon?branch=master)
[![Dependency Status](https://www.versioneye.com/user/projects/56ce019e6b21e5003abcd54c/badge.svg?style=flat)](https://www.versioneye.com/user/projects/56ce019e6b21e5003abcd54c)

# Jadenticon

Jadenticon is a simple java wrapper for the [Jdenticon](https://jdenticon.com/) javascript library to create nice looking, random identicons.

## Get It

Jadenticon is available on [Jitpack](https://jitpack.io/).

**Gradle**

```groovy
repositories {
    maven { url "https://jitpack.io" }
}

dependencies {
   compile 'com.github.atomfrede:jadenticon:1.0.3'
}
```

**Maven**

```xml
<repository>
    <id>jitpack.io</id>
    <url>https://jitpack.io</url>
</repository>

<dependency>
    <groupId>com.github.atomfrede</groupId>
	<artifactId>jadenticon</artifactId>
	<version>1.0.3</version>
</dependency>
```

## Usage

```java
// Create default jdenticon (as svg) with size 300 and padding 0.08
String rawSvg = Jadenticon.from("Jane Doe").toSvg();

// Create a jdenticon with size 555 and padding 0.08
// Restriction: 30 <= size
String rawSvgWithSize = Jadenticon.from("Jane Doe").withSize(555).toSvg();

// Create a jdenticon with size 300 and padding 0.1
// Restriction: 0 <= padding <= 0.5
String rawSvgWithPadding = Jadenticon.from("John Doe").withPadding(0.1);

// You can save it directly to a svg file, the .svg prefix is added automatically
File svgFile = Jadenticon.from("Jane Doe").file("janedoe");

// If you don't care about the file you don't need to provide any
File svgFile2 = Jadenticon.from("John Doe").file();

```

## Example

![example jdenticon][example]

[example]: https://github.com/atomfrede/jadenticon/raw/master/example.png "Sample identicon"

## License

Apache-2.0 © [Frederik Hahne](http://atomfrede.github.io/shiny-adventure/)
