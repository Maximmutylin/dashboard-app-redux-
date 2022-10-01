import { JobPosition } from './JobPosition';
import { useDispatch } from 'react-redux';
import { addFilter } from 'features/filters/filter-slice';
import { usePosition } from './use-positions';



const JobList = () => {
  const positions = usePosition();
  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  )
}

export { JobList };