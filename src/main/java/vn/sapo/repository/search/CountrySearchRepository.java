package vn.sapo.repository.search;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import vn.sapo.domain.Country;

/**
 * Spring Data Elasticsearch repository for the {@link Country} entity.
 */
public interface CountrySearchRepository extends ElasticsearchRepository<Country, Long> {}
