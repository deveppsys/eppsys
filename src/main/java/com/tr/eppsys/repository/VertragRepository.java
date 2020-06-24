package com.tr.eppsys.repository;

import com.tr.eppsys.domain.Vertrag;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Vertrag entity.
 */
@SuppressWarnings("unused")
@Repository
public interface VertragRepository extends JpaRepository<Vertrag, Long> {
}
