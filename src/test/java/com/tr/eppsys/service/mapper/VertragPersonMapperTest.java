package com.tr.eppsys.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

public class VertragPersonMapperTest {

    private VertragPersonMapper vertragPersonMapper;

    @BeforeEach
    public void setUp() {
        vertragPersonMapper = new VertragPersonMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 1L;
        assertThat(vertragPersonMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(vertragPersonMapper.fromId(null)).isNull();
    }
}
