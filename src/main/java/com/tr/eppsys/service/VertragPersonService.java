package com.tr.eppsys.service;

import com.tr.eppsys.service.dto.VertragPersonDTO;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link com.tr.eppsys.domain.VertragPerson}.
 */
public interface VertragPersonService {

    /**
     * Save a vertragPerson.
     *
     * @param vertragPersonDTO the entity to save.
     * @return the persisted entity.
     */
    VertragPersonDTO save(VertragPersonDTO vertragPersonDTO);

    /**
     * Get all the vertragPeople.
     *
     * @return the list of entities.
     */
    List<VertragPersonDTO> findAll();


    /**
     * Get the "id" vertragPerson.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<VertragPersonDTO> findOne(Long id);

    /**
     * Delete the "id" vertragPerson.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
