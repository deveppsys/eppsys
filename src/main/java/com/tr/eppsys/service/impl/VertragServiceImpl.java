package com.tr.eppsys.service.impl;

import com.tr.eppsys.service.VertragService;
import com.tr.eppsys.domain.Vertrag;
import com.tr.eppsys.repository.VertragRepository;
import com.tr.eppsys.service.dto.VertragDTO;
import com.tr.eppsys.service.mapper.VertragMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing {@link Vertrag}.
 */
@Service
@Transactional
public class VertragServiceImpl implements VertragService {

    private final Logger log = LoggerFactory.getLogger(VertragServiceImpl.class);

    private final VertragRepository vertragRepository;

    private final VertragMapper vertragMapper;

    public VertragServiceImpl(VertragRepository vertragRepository, VertragMapper vertragMapper) {
        this.vertragRepository = vertragRepository;
        this.vertragMapper = vertragMapper;
    }

    /**
     * Save a vertrag.
     *
     * @param vertragDTO the entity to save.
     * @return the persisted entity.
     */
    @Override
    public VertragDTO save(VertragDTO vertragDTO) {
        log.debug("Request to save Vertrag : {}", vertragDTO);
        Vertrag vertrag = vertragMapper.toEntity(vertragDTO);
        vertrag = vertragRepository.save(vertrag);
        return vertragMapper.toDto(vertrag);
    }

    /**
     * Get all the vertrags.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<VertragDTO> findAll() {
        log.debug("Request to get all Vertrags");
        return vertragRepository.findAll().stream()
            .map(vertragMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }


    /**
     * Get one vertrag by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<VertragDTO> findOne(Long id) {
        log.debug("Request to get Vertrag : {}", id);
        return vertragRepository.findById(id)
            .map(vertragMapper::toDto);
    }

    /**
     * Delete the vertrag by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Vertrag : {}", id);
        vertragRepository.deleteById(id);
    }
}
