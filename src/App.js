import { FilterPanel } from 'features/filters/FilterPanel';
import { JobList } from 'features/position/JobList';
import { TheHeader } from 'components/TheHeader';


function App() {
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
