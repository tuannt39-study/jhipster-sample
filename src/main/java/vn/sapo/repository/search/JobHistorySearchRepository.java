package vn.sapo.repository.search;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import vn.sapo.domain.JobHistory;

/**
 * Spring Data Elasticsearch repository for the {@link JobHistory} entity.
 */
public interface JobHistorySearchRepository extends ElasticsearchRepository<JobHistory, Long> {}
