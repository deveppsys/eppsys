package com.tr.eppsys.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.tr.eppsys.web.rest.TestUtil;

public class VertragPersonTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(VertragPerson.class);
        VertragPerson vertragPerson1 = new VertragPerson();
        vertragPerson1.setId(1L);
        VertragPerson vertragPerson2 = new VertragPerson();
        vertragPerson2.setId(vertragPerson1.getId());
        assertThat(vertragPerson1).isEqualTo(vertragPerson2);
        vertragPerson2.setId(2L);
        assertThat(vertragPerson1).isNotEqualTo(vertragPerson2);
        vertragPerson1.setId(null);
        assertThat(vertragPerson1).isNotEqualTo(vertragPerson2);
    }
}
