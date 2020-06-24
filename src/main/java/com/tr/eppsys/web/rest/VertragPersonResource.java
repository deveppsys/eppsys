package com.tr.eppsys.web.rest;

import com.tr.eppsys.service.VertragPersonService;
import com.tr.eppsys.web.rest.errors.BadRequestAlertException;
import com.tr.eppsys.service.dto.VertragPersonDTO;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link com.tr.eppsys.domain.VertragPerson}.
 */
@RestController
@RequestMapping("/api")
public class VertragPersonResource {

    private final Logger log = LoggerFactory.getLogger(VertragPersonResource.class);

    private static final String ENTITY_NAME = "vertragPerson";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final VertragPersonService vertragPersonService;

    public VertragPersonResource(VertragPersonService vertragPersonService) {
        this.vertragPersonService = vertragPersonService;
    }

    /**
     * {@code POST  /vertrag-people} : Create a new vertragPerson.
     *
     * @param vertragPersonDTO the vertragPersonDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new vertragPersonDTO, or with status {@code 400 (Bad Request)} if the vertragPerson has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/vertrag-people")
    public ResponseEntity<VertragPersonDTO> createVertragPerson(@RequestBody VertragPersonDTO vertragPersonDTO) throws URISyntaxException {
        log.debug("REST request to save VertragPerson : {}", vertragPersonDTO);
        if (vertragPersonDTO.getId() != null) {
            throw new BadRequestAlertException("A new vertragPerson cannot already have an ID", ENTITY_NAME, "idexists");
        }
        VertragPersonDTO result = vertragPersonService.save(vertragPersonDTO);
        return ResponseEntity.created(new URI("/api/vertrag-people/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /vertrag-people} : Updates an existing vertragPerson.
     *
     * @param vertragPersonDTO the vertragPersonDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated vertragPersonDTO,
     * or with status {@code 400 (Bad Request)} if the vertragPersonDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the vertragPersonDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/vertrag-people")
    public ResponseEntity<VertragPersonDTO> updateVertragPerson(@RequestBody VertragPersonDTO vertragPersonDTO) throws URISyntaxException {
        log.debug("REST request to update VertragPerson : {}", vertragPersonDTO);
        if (vertragPersonDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        VertragPersonDTO result = vertragPersonService.save(vertragPersonDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, vertragPersonDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /vertrag-people} : get all the vertragPeople.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of vertragPeople in body.
     */
    @GetMapping("/vertrag-people")
    public List<VertragPersonDTO> getAllVertragPeople() {
        log.debug("REST request to get all VertragPeople");
        return vertragPersonService.findAll();
    }

    /**
     * {@code GET  /vertrag-people/:id} : get the "id" vertragPerson.
     *
     * @param id the id of the vertragPersonDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the vertragPersonDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/vertrag-people/{id}")
    public ResponseEntity<VertragPersonDTO> getVertragPerson(@PathVariable Long id) {
        log.debug("REST request to get VertragPerson : {}", id);
        Optional<VertragPersonDTO> vertragPersonDTO = vertragPersonService.findOne(id);
        return ResponseUtil.wrapOrNotFound(vertragPersonDTO);
    }

    /**
     * {@code DELETE  /vertrag-people/:id} : delete the "id" vertragPerson.
     *
     * @param id the id of the vertragPersonDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/vertrag-people/{id}")
    public ResponseEntity<Void> deleteVertragPerson(@PathVariable Long id) {
        log.debug("REST request to delete VertragPerson : {}", id);
        vertragPersonService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
