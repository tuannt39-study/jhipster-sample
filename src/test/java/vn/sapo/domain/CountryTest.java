package vn.sapo.domain;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.sapo.web.rest.TestUtil;

class CountryTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Country.class);
        Country country1 = new Country();
        country1.setId(1L);
        Country country2 = new Country();
        country2.setId(country1.getId());
        assertThat(country1).isEqualTo(country2);
        country2.setId(2L);
        assertThat(country1).isNotEqualTo(country2);
        country1.setId(null);
        assertThat(country1).isNotEqualTo(country2);
    }
}
