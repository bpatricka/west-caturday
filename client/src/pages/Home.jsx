import styles from "./Home.module.css";
import "./Home.module.css";
import { FaBriefcase, FaHome, FaEnvelope, FaRegCopyright } from "react-icons/fa";
import { useEffect, useState } from "react";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [colleges, setColleges] = useState(null);
    const [jobs, setJobs] = useState(null);
    const [awards, setAwards] = useState(null);
    const [projects, setProjects] = useState(null);
    const [activities, setActivities] = useState(null);
    const [mounted, setMounted] = useState(null);

    const fetchColleges = async () => {
        setLoading(true);
        setMounted(true);
        if (mounted) {
            try {
                const response = await fetch('http://localhost:8000/colleges');
                setColleges(await response.json());
            } catch(e) {
                console.log('I got a bad feeling about this.');
            }
        }
    }

    const fetchJobs = async () => {
        setLoading(true);
        setMounted(true);
        if (mounted) {
            try {
                const response = await fetch('http://localhost:8000/jobs');
                setJobs(await response.json());
            } catch(e) {
                console.log('I got a bad feeling about this.');
            }
        }
    }

    const fetchAwards = async () => {
        setLoading(true);
        setMounted(true);
        if (mounted) {
            try {
                const response = await fetch('http://localhost:8000/awards');
                setAwards(await response.json());
            } catch(e) {
                console.log('I got a bad feeling about this.');
            }
        }
    }

    const fetchActivities = async () => {
        setLoading(true);
        setMounted(true);
        if (mounted) {
            try {
                const response = await fetch('http://localhost:8000/activities');
                setActivities(await response.json());
            } catch(e) {
                console.log('I got a bad feeling about this.');
            }
        }
    }

    const fetchProjects = async () => {
        setLoading(true);
        setMounted(true);
        if (mounted) {
            try {
                const response = await fetch('http://localhost:8000/projects');
                setProjects(await response.json());
            } catch(e) {
                console.log('I got a bad feeling about this.');
            }
        }
    }

    useEffect(() => {
        fetchColleges();
        fetchJobs();
        fetchActivities();
        fetchAwards();
        fetchProjects();
    }, []);

    if (jobs) {
        console.log(Object.values(jobs[0])[1]);
    }
        

    const year = new Date().getFullYear();
    
    return (
        <>
        <div className={styles.maincontainer}>
            <div className={styles.leftcol}>
                <div className={styles.profilepanel} id="left-profile-panel">
                    <div className={styles.profilepic}></div>
                    <ul className={styles.myinfo}>
                        <li><FaBriefcase size="2em" style={{padding: '5px'}} />Programmer</li>
                        <li><FaHome size="2em" style={{padding: '5px'}} />Tooele, UT</li>
                        <li><FaEnvelope size="2em" style={{padding: '5px'}} />bpatricka@live.com</li>
                    </ul>
                    {/** Use loading bar type elements */}
                    <div className={styles.skillheader}>Skills Section</div>
                    <div className={styles.langheader}>Languages</div>
                </div>
            </div>
            <div className={styles.rightcol}>
                <div className={styles.work} id="work-experience">
                    <div className={styles.workheader}>Work Experience</div>
                    <ul className={styles.workul} id="work-list">
                        {jobs === null ? null : (Object.values(jobs)).map((job) => <li key={job._id}>{job[1]}</li>)}
                        {/* <li className={styles.workli} id="first-job">
                            <div id="job-title">Job Title</div>
                            <div id="job-date">Dates</div>
                            <div id="job-desc">Job Description</div>
                        </li>
                        <li id="second-job">
                            <div id="job-title">Job Title</div>
                            <div id="job-date">Dates</div>
                            <div id="job-desc">Job Description</div>
                        </li>
                        <li id="third-job">
                            <div id="job-title">Job Title</div>
                            <div id="job-date">Dates</div>
                            <div id="job-desc">Job Description</div>
                        </li>
                        <li id="second-job">
                            <div id="job-title">Job Title</div>
                            <div id="job-date">Dates</div>
                            <div id="job-desc">Job Description</div>
                        </li> */}
                    </ul>
                </div>
                <div className={styles.education} id="education">
                    <ul id="education-list">
                        <li id="first-college">
                            <div id="degree">Degree</div>
                            <div id="fc-date">Dates</div>
                            <div id="job-desc">Degree Desc</div>
                        </li>
                        <li id="second-college">
                            <div id="degree">Degree</div>
                            <div id="college-dates">Dates</div>
                            <div id="degree-desc">Degree Desc</div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>            
        <div className={styles.footer}>
            <FaRegCopyright />{year} arb1z webpage
        </div>
        </>
    )
}

export default Home;