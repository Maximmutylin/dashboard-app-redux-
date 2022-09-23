import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { TheHeader } from 'components/TheHeader';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addPosiotion } from './store/position/position-actions'
import data from './mock/data.json'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addPosiotion(data))
  });

  return (
    <>
      <TheHeader />
      <div className='container'>
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;
