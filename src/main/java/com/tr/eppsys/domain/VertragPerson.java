package com.tr.eppsys.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

import com.tr.eppsys.domain.enumeration.VertragPersonArtTyp;

/**
 * A VertragPerson.
 */
@Entity
@Table(name = "vertrag_person")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class VertragPerson implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "art")
    private VertragPersonArtTyp art;

    @ManyToOne
    @JsonIgnoreProperties(value = "vertragPeople", allowSetters = true)
    private Vertrag vertrag;

    @ManyToOne
    @JsonIgnoreProperties(value = "vertragPeople", allowSetters = true)
    private Person person;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public VertragPersonArtTyp getArt() {
        return art;
    }

    public VertragPerson art(VertragPersonArtTyp art) {
        this.art = art;
        return this;
    }

    public void setArt(VertragPersonArtTyp art) {
        this.art = art;
    }

    public Vertrag getVertrag() {
        return vertrag;
    }

    public VertragPerson vertrag(Vertrag vertrag) {
        this.vertrag = vertrag;
        return this;
    }

    public void setVertrag(Vertrag vertrag) {
        this.vertrag = vertrag;
    }

    public Person getPerson() {
        return person;
    }

    public VertragPerson person(Person person) {
        this.person = person;
        return this;
    }

    public void setPerson(Person person) {
        this.person = person;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof VertragPerson)) {
            return false;
        }
        return id != null && id.equals(((VertragPerson) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "VertragPerson{" +
            "id=" + getId() +
            ", art='" + getArt() + "'" +
            "}";
    }
}
