package com.tr.eppsys.service.dto;

import java.io.Serializable;
import com.tr.eppsys.domain.enumeration.VertragPersonArtTyp;

/**
 * A DTO for the {@link com.tr.eppsys.domain.VertragPerson} entity.
 */
public class VertragPersonDTO implements Serializable {
    
    private Long id;

    private VertragPersonArtTyp art;


    private Long vertragId;

    private Long personId;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public VertragPersonArtTyp getArt() {
        return art;
    }

    public void setArt(VertragPersonArtTyp art) {
        this.art = art;
    }

    public Long getVertragId() {
        return vertragId;
    }

    public void setVertragId(Long vertragId) {
        this.vertragId = vertragId;
    }

    public Long getPersonId() {
        return personId;
    }

    public void setPersonId(Long personId) {
        this.personId = personId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof VertragPersonDTO)) {
            return false;
        }

        return id != null && id.equals(((VertragPersonDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "VertragPersonDTO{" +
            "id=" + getId() +
            ", art='" + getArt() + "'" +
            ", vertragId=" + getVertragId() +
            ", personId=" + getPersonId() +
            "}";
    }
}
