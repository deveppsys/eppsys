package com.tr.eppsys.service.dto;

import java.io.Serializable;
import com.tr.eppsys.domain.enumeration.VertragArtTyp;
import com.tr.eppsys.domain.enumeration.VertragStatusTyp;

/**
 * A DTO for the {@link com.tr.eppsys.domain.Vertrag} entity.
 */
public class VertragDTO implements Serializable {
    
    private Long id;

    private VertragArtTyp art;

    private VertragStatusTyp status;

    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public VertragArtTyp getArt() {
        return art;
    }

    public void setArt(VertragArtTyp art) {
        this.art = art;
    }

    public VertragStatusTyp getStatus() {
        return status;
    }

    public void setStatus(VertragStatusTyp status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof VertragDTO)) {
            return false;
        }

        return id != null && id.equals(((VertragDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "VertragDTO{" +
            "id=" + getId() +
            ", art='" + getArt() + "'" +
            ", status='" + getStatus() + "'" +
            "}";
    }
}
