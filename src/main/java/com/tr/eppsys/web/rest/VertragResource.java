package com.tr.eppsys.web.rest;

import com.tr.eppsys.service.VertragService;
import com.tr.eppsys.web.rest.errors.BadRequestAlertException;
import com.tr.eppsys.service.dto.VertragDTO;

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
 * REST controller for managing {@link com.tr.eppsys.domain.Vertrag}.
 */
@RestController
@RequestMapping("/api")
public class VertragResource {

    private final Logger log = LoggerFactory.getLogger(VertragResource.class);

    private static final String ENTITY_NAME = "vertrag";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final VertragService vertragService;

    public VertragResource(VertragService vertragService) {
        this.vertragService = vertragService;
    }

    /**
     * {@code POST  /vertrags} : Create a new vertrag.
     *
     * @param vertragDTO the vertragDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new vertragDTO, or with status {@code 400 (Bad Request)} if the vertrag has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/vertrags")
    public ResponseEntity<VertragDTO> createVertrag(@RequestBody VertragDTO vertragDTO) throws URISyntaxException {
        log.debug("REST request to save Vertrag : {}", vertragDTO);
        if (vertragDTO.getId() != null) {
            throw new BadRequestAlertException("A new vertrag cannot already have an ID", ENTITY_NAME, "idexists");
        }
        VertragDTO result = vertragService.save(vertragDTO);
        return ResponseEntity.created(new URI("/api/vertrags/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /vertrags} : Updates an existing vertrag.
     *
     * @param vertragDTO the vertragDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated vertragDTO,
     * or with status {@code 400 (Bad Request)} if the vertragDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the vertragDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/vertrags")
    public ResponseEntity<VertragDTO> updateVertrag(@RequestBody VertragDTO vertragDTO) throws URISyntaxException {
        log.debug("REST request to update Vertrag : {}", vertragDTO);
        if (vertragDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        VertragDTO result = vertragService.save(vertragDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, vertragDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /vertrags} : get all the vertrags.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of vertrags in body.
     */
    @GetMapping("/vertrags")
    public List<VertragDTO> getAllVertrags() {
        log.debug("REST request to get all Vertrags");
        return vertragService.findAll();
    }

    /**
     * {@code GET  /vertrags/:id} : get the "id" vertrag.
     *
     * @param id the id of the vertragDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the vertragDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/vertrags/{id}")
    public ResponseEntity<VertragDTO> getVertrag(@PathVariable Long id) {
        log.debug("REST request to get Vertrag : {}", id);
        Optional<VertragDTO> vertragDTO = vertragService.findOne(id);
        return ResponseUtil.wrapOrNotFound(vertragDTO);
    }

    /**
     * {@code DELETE  /vertrags/:id} : delete the "id" vertrag.
     *
     * @param id the id of the vertragDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/vertrags/{id}")
    public ResponseEntity<Void> deleteVertrag(@PathVariable Long id) {
        log.debug("REST request to delete Vertrag : {}", id);
        vertragService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
