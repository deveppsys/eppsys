package com.tr.eppsys.web.rest;

import com.tr.eppsys.EppsysApp;
import com.tr.eppsys.domain.VertragPerson;
import com.tr.eppsys.repository.VertragPersonRepository;
import com.tr.eppsys.service.VertragPersonService;
import com.tr.eppsys.service.dto.VertragPersonDTO;
import com.tr.eppsys.service.mapper.VertragPersonMapper;

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

import com.tr.eppsys.domain.enumeration.VertragPersonArtTyp;
/**
 * Integration tests for the {@link VertragPersonResource} REST controller.
 */
@SpringBootTest(classes = EppsysApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class VertragPersonResourceIT {

    private static final VertragPersonArtTyp DEFAULT_ART = VertragPersonArtTyp.INHABER;
    private static final VertragPersonArtTyp UPDATED_ART = VertragPersonArtTyp.EHEGATTE;

    @Autowired
    private VertragPersonRepository vertragPersonRepository;

    @Autowired
    private VertragPersonMapper vertragPersonMapper;

    @Autowired
    private VertragPersonService vertragPersonService;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restVertragPersonMockMvc;

    private VertragPerson vertragPerson;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static VertragPerson createEntity(EntityManager em) {
        VertragPerson vertragPerson = new VertragPerson()
            .art(DEFAULT_ART);
        return vertragPerson;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static VertragPerson createUpdatedEntity(EntityManager em) {
        VertragPerson vertragPerson = new VertragPerson()
            .art(UPDATED_ART);
        return vertragPerson;
    }

    @BeforeEach
    public void initTest() {
        vertragPerson = createEntity(em);
    }

    @Test
    @Transactional
    public void createVertragPerson() throws Exception {
        int databaseSizeBeforeCreate = vertragPersonRepository.findAll().size();
        // Create the VertragPerson
        VertragPersonDTO vertragPersonDTO = vertragPersonMapper.toDto(vertragPerson);
        restVertragPersonMockMvc.perform(post("/api/vertrag-people").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(vertragPersonDTO)))
            .andExpect(status().isCreated());

        // Validate the VertragPerson in the database
        List<VertragPerson> vertragPersonList = vertragPersonRepository.findAll();
        assertThat(vertragPersonList).hasSize(databaseSizeBeforeCreate + 1);
        VertragPerson testVertragPerson = vertragPersonList.get(vertragPersonList.size() - 1);
        assertThat(testVertragPerson.getArt()).isEqualTo(DEFAULT_ART);
    }

    @Test
    @Transactional
    public void createVertragPersonWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = vertragPersonRepository.findAll().size();

        // Create the VertragPerson with an existing ID
        vertragPerson.setId(1L);
        VertragPersonDTO vertragPersonDTO = vertragPersonMapper.toDto(vertragPerson);

        // An entity with an existing ID cannot be created, so this API call must fail
        restVertragPersonMockMvc.perform(post("/api/vertrag-people").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(vertragPersonDTO)))
            .andExpect(status().isBadRequest());

        // Validate the VertragPerson in the database
        List<VertragPerson> vertragPersonList = vertragPersonRepository.findAll();
        assertThat(vertragPersonList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllVertragPeople() throws Exception {
        // Initialize the database
        vertragPersonRepository.saveAndFlush(vertragPerson);

        // Get all the vertragPersonList
        restVertragPersonMockMvc.perform(get("/api/vertrag-people?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(vertragPerson.getId().intValue())))
            .andExpect(jsonPath("$.[*].art").value(hasItem(DEFAULT_ART.toString())));
    }
    
    @Test
    @Transactional
    public void getVertragPerson() throws Exception {
        // Initialize the database
        vertragPersonRepository.saveAndFlush(vertragPerson);

        // Get the vertragPerson
        restVertragPersonMockMvc.perform(get("/api/vertrag-people/{id}", vertragPerson.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(vertragPerson.getId().intValue()))
            .andExpect(jsonPath("$.art").value(DEFAULT_ART.toString()));
    }
    @Test
    @Transactional
    public void getNonExistingVertragPerson() throws Exception {
        // Get the vertragPerson
        restVertragPersonMockMvc.perform(get("/api/vertrag-people/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateVertragPerson() throws Exception {
        // Initialize the database
        vertragPersonRepository.saveAndFlush(vertragPerson);

        int databaseSizeBeforeUpdate = vertragPersonRepository.findAll().size();

        // Update the vertragPerson
        VertragPerson updatedVertragPerson = vertragPersonRepository.findById(vertragPerson.getId()).get();
        // Disconnect from session so that the updates on updatedVertragPerson are not directly saved in db
        em.detach(updatedVertragPerson);
        updatedVertragPerson
            .art(UPDATED_ART);
        VertragPersonDTO vertragPersonDTO = vertragPersonMapper.toDto(updatedVertragPerson);

        restVertragPersonMockMvc.perform(put("/api/vertrag-people").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(vertragPersonDTO)))
            .andExpect(status().isOk());

        // Validate the VertragPerson in the database
        List<VertragPerson> vertragPersonList = vertragPersonRepository.findAll();
        assertThat(vertragPersonList).hasSize(databaseSizeBeforeUpdate);
        VertragPerson testVertragPerson = vertragPersonList.get(vertragPersonList.size() - 1);
        assertThat(testVertragPerson.getArt()).isEqualTo(UPDATED_ART);
    }

    @Test
    @Transactional
    public void updateNonExistingVertragPerson() throws Exception {
        int databaseSizeBeforeUpdate = vertragPersonRepository.findAll().size();

        // Create the VertragPerson
        VertragPersonDTO vertragPersonDTO = vertragPersonMapper.toDto(vertragPerson);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restVertragPersonMockMvc.perform(put("/api/vertrag-people").with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(vertragPersonDTO)))
            .andExpect(status().isBadRequest());

        // Validate the VertragPerson in the database
        List<VertragPerson> vertragPersonList = vertragPersonRepository.findAll();
        assertThat(vertragPersonList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteVertragPerson() throws Exception {
        // Initialize the database
        vertragPersonRepository.saveAndFlush(vertragPerson);

        int databaseSizeBeforeDelete = vertragPersonRepository.findAll().size();

        // Delete the vertragPerson
        restVertragPersonMockMvc.perform(delete("/api/vertrag-people/{id}", vertragPerson.getId()).with(csrf())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<VertragPerson> vertragPersonList = vertragPersonRepository.findAll();
        assertThat(vertragPersonList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
