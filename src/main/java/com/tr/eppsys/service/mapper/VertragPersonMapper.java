package com.tr.eppsys.service.mapper;


import com.tr.eppsys.domain.*;
import com.tr.eppsys.service.dto.VertragPersonDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link VertragPerson} and its DTO {@link VertragPersonDTO}.
 */
@Mapper(componentModel = "spring", uses = {VertragMapper.class, PersonMapper.class})
public interface VertragPersonMapper extends EntityMapper<VertragPersonDTO, VertragPerson> {

    @Mapping(source = "vertrag.id", target = "vertragId")
    @Mapping(source = "person.id", target = "personId")
    VertragPersonDTO toDto(VertragPerson vertragPerson);

    @Mapping(source = "vertragId", target = "vertrag")
    @Mapping(source = "personId", target = "person")
    VertragPerson toEntity(VertragPersonDTO vertragPersonDTO);

    default VertragPerson fromId(Long id) {
        if (id == null) {
            return null;
        }
        VertragPerson vertragPerson = new VertragPerson();
        vertragPerson.setId(id);
        return vertragPerson;
    }
}
