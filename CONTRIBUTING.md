# Contributing

The project tries to use the [Github Flow](https://guides.github.com/introduction/flow/index.html) which is similar to [Gitlab Flow](https://about.gitlab.com/2014/09/29/gitlab-flow/) for developing. This means everything is centered around pull requests.

## Submitting a merge request

* Make your changes in a **new** git branch

```
git checkout -b my-fix-branch master
```

* Create your patch, **including appropriate test cases**.
* Test that the new project runs correctly:

```
./gradlew build
```

* Commit your changes using a descriptive commit message that follows our commit message conventions.

```
git commit -a
```

* Push your branch to Github

```
git push origin my-fix-branch
```

* In Github, send a pull request to ``atomfrede/jadenticon``.

## After your merge request is merged

After your merge request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository:

* Delete the remote branch on Github either through the Github web UI or your local shell as follows:

```
git push origin --delete my-fix-branch
```

* Check out the development branch:

```
git checkout master -f
```

* Delete the local branch:

```
git branch -D my-fix-branch
```

* Update your development with the latest upstream version:

```
git pull --ff upstream development
```

## Git Commit Guidelines

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**.

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on Github as well as in various git tools.

### Header

The Header contains a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body

If your change is simple, the Body is optional.

Just as in the Header, use the imperative, present tense: "change" not "changed" nor "changes". The Body should include the motivation for the change and contrast this with previous behavior.

#### Footer

The footer is the place to reference Github issues that this commit Closes.

You must use the Github keywords for automatically closing the issues referenced in your commit.

### Example

```
upgrade to Spring Boot 1.1.8

upgrade Maven and Gradle builds to use the new Spring Boot 1.1.8,
see http://spring.io/blog/2014/09/26/spring-boot-1-1-8-released

Fix #1234
Closes #1234
Fixes #1234
Update #1234
```
