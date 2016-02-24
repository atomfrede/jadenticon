1: set gradle version

```
//Change version in build.gradle
```

2: commit and tag the version

```
git add .
git commit -m "release 2.1.0"
git tag 2.1.0
git push --tags
```

3: set next version

```
// Change version in build.gradle
git add .
git commit -m "set next version"
git push
```
