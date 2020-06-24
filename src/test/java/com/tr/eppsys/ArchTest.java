package com.tr.eppsys;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.tr.eppsys");

        noClasses()
            .that()
            .resideInAnyPackage("com.tr.eppsys.service..")
            .or()
            .resideInAnyPackage("com.tr.eppsys.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..com.tr.eppsys.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
