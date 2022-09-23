import { JobPosition } from './JobPosition';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllVisible } from 'store/position/position-selects';
import { addFilter } from "../store/filters/filter-actions"
import { selectFilters } from "../store/filters/filter-selects"

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters)
  const positions = useSelector(state => selectAllVisible(state, currentFilters));

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