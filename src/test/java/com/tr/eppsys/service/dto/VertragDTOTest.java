package com.tr.eppsys.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.tr.eppsys.web.rest.TestUtil;

public class VertragDTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(VertragDTO.class);
        VertragDTO vertragDTO1 = new VertragDTO();
        vertragDTO1.setId(1L);
        VertragDTO vertragDTO2 = new VertragDTO();
        assertThat(vertragDTO1).isNotEqualTo(vertragDTO2);
        vertragDTO2.setId(vertragDTO1.getId());
        assertThat(vertragDTO1).isEqualTo(vertragDTO2);
        vertragDTO2.setId(2L);
        assertThat(vertragDTO1).isNotEqualTo(vertragDTO2);
        vertragDTO1.setId(null);
        assertThat(vertragDTO1).isNotEqualTo(vertragDTO2);
    }
}
