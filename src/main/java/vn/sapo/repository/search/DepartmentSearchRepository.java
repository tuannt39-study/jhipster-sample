package vn.sapo.repository.search;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import vn.sapo.domain.Department;

/**
 * Spring Data Elasticsearch repository for the {@link Department} entity.
 */
public interface DepartmentSearchRepository extends ElasticsearchRepository<Department, Long> {}
