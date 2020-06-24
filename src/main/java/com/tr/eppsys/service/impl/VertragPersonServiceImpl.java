package com.tr.eppsys.service.impl;

import com.tr.eppsys.service.VertragPersonService;
import com.tr.eppsys.domain.VertragPerson;
import com.tr.eppsys.repository.VertragPersonRepository;
import com.tr.eppsys.service.dto.VertragPersonDTO;
import com.tr.eppsys.service.mapper.VertragPersonMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing {@link VertragPerson}.
 */
@Service
@Transactional
public class VertragPersonServiceImpl implements VertragPersonService {

    private final Logger log = LoggerFactory.getLogger(VertragPersonServiceImpl.class);

    private final VertragPersonRepository vertragPersonRepository;

    private final VertragPersonMapper vertragPersonMapper;

    public VertragPersonServiceImpl(VertragPersonRepository vertragPersonRepository, VertragPersonMapper vertragPersonMapper) {
        this.vertragPersonRepository = vertragPersonRepository;
        this.vertragPersonMapper = vertragPersonMapper;
    }

    /**
     * Save a vertragPerson.
     *
     * @param vertragPersonDTO the entity to save.
     * @return the persisted entity.
     */
    @Override
    public VertragPersonDTO save(VertragPersonDTO vertragPersonDTO) {
        log.debug("Request to save VertragPerson : {}", vertragPersonDTO);
        VertragPerson vertragPerson = vertragPersonMapper.toEntity(vertragPersonDTO);
        vertragPerson = vertragPersonRepository.save(vertragPerson);
        return vertragPersonMapper.toDto(vertragPerson);
    }

    /**
     * Get all the vertragPeople.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<VertragPersonDTO> findAll() {
        log.debug("Request to get all VertragPeople");
        return vertragPersonRepository.findAll().stream()
            .map(vertragPersonMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }


    /**
     * Get one vertragPerson by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<VertragPersonDTO> findOne(Long id) {
        log.debug("Request to get VertragPerson : {}", id);
        return vertragPersonRepository.findById(id)
            .map(vertragPersonMapper::toDto);
    }

    /**
     * Delete the vertragPerson by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete VertragPerson : {}", id);
        vertragPersonRepository.deleteById(id);
    }
}
