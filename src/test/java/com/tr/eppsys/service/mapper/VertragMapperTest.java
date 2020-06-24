package com.tr.eppsys.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

public class VertragMapperTest {

    private VertragMapper vertragMapper;

    @BeforeEach
    public void setUp() {
        vertragMapper = new VertragMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 1L;
        assertThat(vertragMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(vertragMapper.fromId(null)).isNull();
    }
}
