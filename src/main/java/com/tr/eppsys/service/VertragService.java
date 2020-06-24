package com.tr.eppsys.service;

import com.tr.eppsys.service.dto.VertragDTO;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link com.tr.eppsys.domain.Vertrag}.
 */
public interface VertragService {

    /**
     * Save a vertrag.
     *
     * @param vertragDTO the entity to save.
     * @return the persisted entity.
     */
    VertragDTO save(VertragDTO vertragDTO);

    /**
     * Get all the vertrags.
     *
     * @return the list of entities.
     */
    List<VertragDTO> findAll();


    /**
     * Get the "id" vertrag.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<VertragDTO> findOne(Long id);

    /**
     * Delete the "id" vertrag.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
