package com.github.atomfrede.jadenticon;

import com.tngtech.archunit.junit.AnalyzeClasses;
import com.tngtech.archunit.junit.ArchTest;
import com.tngtech.archunit.lang.ArchRule;
import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;
import static com.tngtech.archunit.library.GeneralCodingRules.NO_CLASSES_SHOULD_ACCESS_STANDARD_STREAMS;
import static com.tngtech.archunit.library.GeneralCodingRules.NO_CLASSES_SHOULD_USE_JODATIME;

@AnalyzeClasses(packages = "com.github.atomfrede.jadenticon")
public class ArchUnitTest {

    @ArchTest
    public static final ArchRule noDirectJunit4Usage = noClasses()
        .should()
        .dependOnClassesThat()
        .haveFullyQualifiedName("org.junit.Before")
        .orShould()
        .dependOnClassesThat()
        .haveFullyQualifiedName("org.junit.After")
        .orShould()
        .dependOnClassesThat()
        .haveFullyQualifiedName("org.junit.BeforeClass")
        .orShould()
        .dependOnClassesThat()
        .haveFullyQualifiedName("org.junit.AfterClass")
        .orShould()
        .dependOnClassesThat()
        .haveFullyQualifiedName("org.junit.Test")
        .orShould()
        .dependOnClassesThat()
        .haveFullyQualifiedName("org.junit.ClassRule");

    @ArchTest
    public static final ArchRule NO_ACCESS_TO_STANDARD_STREAMS = NO_CLASSES_SHOULD_ACCESS_STANDARD_STREAMS;

    @ArchTest
    private final ArchRule no_jodatime = NO_CLASSES_SHOULD_USE_JODATIME;
}
