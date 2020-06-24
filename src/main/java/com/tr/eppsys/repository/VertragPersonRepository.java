package com.tr.eppsys.repository;

import com.tr.eppsys.domain.VertragPerson;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the VertragPerson entity.
 */
@SuppressWarnings("unused")
@Repository
public interface VertragPersonRepository extends JpaRepository<VertragPerson, Long> {
}
