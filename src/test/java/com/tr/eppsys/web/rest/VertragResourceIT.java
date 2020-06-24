package com.tr.eppsys.web.rest;

import com.tr.eppsys.EppsysApp;
import com.tr.eppsys.domain.Vertrag;
import com.tr.eppsys.repository.VertragRepository;
import com.tr.eppsys.service.VertragService;
import com.tr.eppsys.service.dto.VertragDTO;
import com.tr.eppsys.service.mapper.VertragMapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.tr.eppsys.domain.enumeration.VertragArtTyp;
import com.tr.eppsys.domain.enumeration.VertragStatusTyp;
/**
 * Integration tests for the {@link VertragResource} REST controller.
 */
@SpringBootTest(classes = EppsysApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class VertragResourceIT {

    private static final VertragArtTyp DEFAULT_ART = VertragArtTyp.RIESTER;
    private static final VertragArtTyp UPDATED_ART = VertragArtTyp.RUERUP;

    private static final VertragStatusTyp DEFAULT_STATUS = VertragStatusTyp.AKTIV;
    private static final VertragStatusTyp UPDATED_STATUS = VertragStatusTyp.BEENDET;

    @Autowired
    private VertragRepository vertragRepository;

    @Autowired
    private VertragMapper vertragMapper;

    @Autowired
    private VertragService vertragService;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restVertragMockMvc;

    private Vertrag vertrag;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Vertrag createEntity(EntityManager em) {
        Vertrag vertrag = new Vertrag()
            .art(DEFAULT_ART)
            .status(DEFAULT_STATUS);
        return vertrag;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Vertrag createUpdatedEntity(EntityManager em) {
        Vertrag vertrag = new Vertrag()
            .art(UPDATED_ART)
            .status(UPDATED_STATUS);
        return vertrag;
    }

    @BeforeEach
    public void initTest() {
        vertrag = createEntity(em);
    }

    @Test
    @Transactional
    public void createVertrag() throws Exception {
        int databaseSizeBeforeCreate = vertragRepository.findAll().size();
        // Create the Vertrag
        VertragDTO vertragDTO = vertragMapper.toDto(vertrag);
        restVertragMockMvc.perform(post("/api/vertrags").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(vertragDTO)))
            .andExpect(status().isCreated());

        // Validate the Vertrag in the database
        List<Vertrag> vertragList = vertragRepository.findAll();
        assertThat(vertragList).hasSize(databaseSizeBeforeCreate + 1);
        Vertrag testVertrag = vertragList.get(vertragList.size() - 1);
        assertThat(testVertrag.getArt()).isEqualTo(DEFAULT_ART);
        assertThat(testVertrag.getStatus()).isEqualTo(DEFAULT_STATUS);
    }

    @Test
    @Transactional
    public void createVertragWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = vertragRepository.findAll().size();

        // Create the Vertrag with an existing ID
        vertrag.setId(1L);
        VertragDTO vertragDTO = vertragMapper.toDto(vertrag);

        // An entity with an existing ID cannot be created, so this API call must fail
        restVertragMockMvc.perform(post("/api/vertrags").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(vertragDTO)))
            .andExpect(status().isBadRequest());

        // Validate the Vertrag in the database
        List<Vertrag> vertragList = vertragRepository.findAll();
        assertThat(vertragList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllVertrags() throws Exception {
        // Initialize the database
        vertragRepository.saveAndFlush(vertrag);

        // Get all the vertragList
        restVertragMockMvc.perform(get("/api/vertrags?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(vertrag.getId().intValue())))
            .andExpect(jsonPath("$.[*].art").value(hasItem(DEFAULT_ART.toString())))
            .andExpect(jsonPath("$.[*].status").value(hasItem(DEFAULT_STATUS.toString())));
    }
    
    @Test
    @Transactional
    public void getVertrag() throws Exception {
        // Initialize the database
        vertragRepository.saveAndFlush(vertrag);

        // Get the vertrag
        restVertragMockMvc.perform(get("/api/vertrags/{id}", vertrag.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(vertrag.getId().intValue()))
            .andExpect(jsonPath("$.art").value(DEFAULT_ART.toString()))
            .andExpect(jsonPath("$.status").value(DEFAULT_STATUS.toString()));
    }
    @Test
    @Transactional
    public void getNonExistingVertrag() throws Exception {
        // Get the vertrag
        restVertragMockMvc.perform(get("/api/vertrags/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateVertrag() throws Exception {
        // Initialize the database
        vertragRepository.saveAndFlush(vertrag);

        int databaseSizeBeforeUpdate = vertragRepository.findAll().size();

        // Update the vertrag
        Vertrag updatedVertrag = vertragRepository.findById(vertrag.getId()).get();
        // Disconnect from session so that the updates on updatedVertrag are not directly saved in db
        em.detach(updatedVertrag);
        updatedVertrag
            .art(UPDATED_ART)
            .status(UPDATED_STATUS);
        VertragDTO vertragDTO = vertragMapper.toDto(updatedVertrag);

        restVertragMockMvc.perform(put("/api/vertrags").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(vertragDTO)))
            .andExpect(status().isOk());

        // Validate the Vertrag in the database
        List<Vertrag> vertragList = vertragRepository.findAll();
        assertThat(vertragList).hasSize(databaseSizeBeforeUpdate);
        Vertrag testVertrag = vertragList.get(vertragList.size() - 1);
        assertThat(testVertrag.getArt()).isEqualTo(UPDATED_ART);
        assertThat(testVertrag.getStatus()).isEqualTo(UPDATED_STATUS);
    }

    @Test
    @Transactional
    public void updateNonExistingVertrag() throws Exception {
        int databaseSizeBeforeUpdate = vertragRepository.findAll().size();

        // Create the Vertrag
        VertragDTO vertragDTO = vertragMapper.toDto(vertrag);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restVertragMockMvc.perform(put("/api/vertrags").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(vertragDTO)))
            .andExpect(status().isBadRequest());

        // Validate the Vertrag in the database
        List<Vertrag> vertragList = vertragRepository.findAll();
        assertThat(vertragList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteVertrag() throws Exception {
        // Initialize the database
        vertragRepository.saveAndFlush(vertrag);

        int databaseSizeBeforeDelete = vertragRepository.findAll().size();

        // Delete the vertrag
        restVertragMockMvc.perform(delete("/api/vertrags/{id}", vertrag.getId()).with(csrf())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Vertrag> vertragList = vertragRepository.findAll();
        assertThat(vertragList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
