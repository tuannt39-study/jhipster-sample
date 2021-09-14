package vn.sapo.repository.search;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import vn.sapo.domain.Region;

/**
 * Spring Data Elasticsearch repository for the {@link Region} entity.
 */
public interface RegionSearchRepository extends ElasticsearchRepository<Region, Long> {}
