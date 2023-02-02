import { useState, useEffect } from 'react';
import Job from './componets/Job';
//
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [isLoading, setIsLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	const [selectedIdex, setSelectedIndex] = useState(0);
  const selectedJob = jobs.length > 0 && jobs[selectedIdex]

  const handleSelect = (index) => {
    setSelectedIndex(index)
  }
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setJobs(data);
        setIsLoading(false)
			} catch (err) {
        setIsLoading(false)
				console.log(err);
			}
		};

		fetchData();
		return () => {};
	}, []);
	return (
    <>
    {isLoading && <h2 className="loading">Loading...</h2>}
		{jobs.length > 0 && <section className='section'>
			<div className='title'>
				<h2>experience</h2>
				<div className='underline'></div>
			</div>
			<div className='jobs-container'>
				<div className='btn-container'>
					{jobs.map((job, index) => (
						<button className={`job-btn ${job.id === selectedJob.id ? 'active-btn' : ''}`} key={job.id} onClick={() => handleSelect(index)}>
							{job.company}
						</button>
					))}
				</div>
				<Job {...selectedJob} />
			</div>
			<button type='button' className='btn'>
				more info
			</button>
		</section>}
    </>
	);
}

export default App;
