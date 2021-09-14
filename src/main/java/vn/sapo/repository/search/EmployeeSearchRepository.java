package vn.sapo.repository.search;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import vn.sapo.domain.Employee;

/**
 * Spring Data Elasticsearch repository for the {@link Employee} entity.
 */
public interface EmployeeSearchRepository extends ElasticsearchRepository<Employee, Long> {}
