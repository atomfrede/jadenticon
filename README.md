[![Build Status](https://travis-ci.org/atomfrede/jadenticon.svg?branch=master)](https://travis-ci.org/atomfrede/jadenticon)
[![codecov.io](https://codecov.io/github/atomfrede/jadenticon/coverage.svg?branch=master)](https://codecov.io/github/atomfrede/jadenticon?branch=master)
[![Dependency Status](https://www.versioneye.com/user/projects/56ce019e6b21e5003abcd54c/badge.svg?style=flat)](https://www.versioneye.com/user/projects/56ce019e6b21e5003abcd54c)

# Jadenticon

Jadenticon is a simple java wrapper for the [Jedenticon](https://jdenticon.com/) javascript library.

## Get It

Jadenticon is available on [Jitpack](https://jitpack.io/).

```groovy
repositories {
    maven { url "https://jitpack.io" }
}
```

```xml
<repository>
    <id>jitpack.io</id>
    <url>https://jitpack.io</url>
</repository>
```

## Usage

```java
// Create default jdenticon (as svg) with size 300 and padding 0.08
String rawSvg = Jadenticon.from("Jane Doe").toSvg();
```
