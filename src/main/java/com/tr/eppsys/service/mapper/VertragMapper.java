package com.tr.eppsys.service.mapper;


import com.tr.eppsys.domain.*;
import com.tr.eppsys.service.dto.VertragDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Vertrag} and its DTO {@link VertragDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface VertragMapper extends EntityMapper<VertragDTO, Vertrag> {



    default Vertrag fromId(Long id) {
        if (id == null) {
            return null;
        }
        Vertrag vertrag = new Vertrag();
        vertrag.setId(id);
        return vertrag;
    }
}
