package com.tr.eppsys.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.tr.eppsys.web.rest.TestUtil;

public class VertragPersonDTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(VertragPersonDTO.class);
        VertragPersonDTO vertragPersonDTO1 = new VertragPersonDTO();
        vertragPersonDTO1.setId(1L);
        VertragPersonDTO vertragPersonDTO2 = new VertragPersonDTO();
        assertThat(vertragPersonDTO1).isNotEqualTo(vertragPersonDTO2);
        vertragPersonDTO2.setId(vertragPersonDTO1.getId());
        assertThat(vertragPersonDTO1).isEqualTo(vertragPersonDTO2);
        vertragPersonDTO2.setId(2L);
        assertThat(vertragPersonDTO1).isNotEqualTo(vertragPersonDTO2);
        vertragPersonDTO1.setId(null);
        assertThat(vertragPersonDTO1).isNotEqualTo(vertragPersonDTO2);
    }
}
