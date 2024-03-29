package vn.sapo.service.mapper;

import java.util.Set;
import org.mapstruct.*;
import vn.sapo.domain.*;
import vn.sapo.service.dto.JobDTO;

/**
 * Mapper for the entity {@link Job} and its DTO {@link JobDTO}.
 */
@Mapper(componentModel = "spring", uses = { TaskMapper.class, EmployeeMapper.class })
public interface JobMapper extends EntityMapper<JobDTO, Job> {
    @Mapping(target = "tasks", source = "tasks", qualifiedByName = "titleSet")
    @Mapping(target = "employee", source = "employee", qualifiedByName = "id")
    JobDTO toDto(Job s);

    @Named("id")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    JobDTO toDtoId(Job job);

    @Mapping(target = "removeTask", ignore = true)
    Job toEntity(JobDTO jobDTO);
}
