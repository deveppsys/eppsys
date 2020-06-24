package com.tr.eppsys.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

import com.tr.eppsys.domain.enumeration.VertragArtTyp;

import com.tr.eppsys.domain.enumeration.VertragStatusTyp;

/**
 * A Vertrag.
 */
@Entity
@Table(name = "vertrag")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Vertrag implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "art")
    private VertragArtTyp art;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private VertragStatusTyp status;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public VertragArtTyp getArt() {
        return art;
    }

    public Vertrag art(VertragArtTyp art) {
        this.art = art;
        return this;
    }

    public void setArt(VertragArtTyp art) {
        this.art = art;
    }

    public VertragStatusTyp getStatus() {
        return status;
    }

    public Vertrag status(VertragStatusTyp status) {
        this.status = status;
        return this;
    }

    public void setStatus(VertragStatusTyp status) {
        this.status = status;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Vertrag)) {
            return false;
        }
        return id != null && id.equals(((Vertrag) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Vertrag{" +
            "id=" + getId() +
            ", art='" + getArt() + "'" +
            ", status='" + getStatus() + "'" +
            "}";
    }
}
