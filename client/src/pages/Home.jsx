import styles from "./Home.module.css";
import "./Home.module.css";
import { FaBriefcase, FaHome, FaEnvelope, FaRegCopyright } from "react-icons/fa";
import { useEffect, useState } from "react";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(null);
    let loadingcontent;

    const [profile, setProfile] = useState({
        colleges: null,
        jobs: null,
        awards: null,
        projects: null,
        activities: null
    });

    const fetchInfo = async () => {
        setLoading(true);
        setMounted(true);
        if (mounted) {
            try {
                const response1 = await fetch('http://localhost:8000/colleges');
                const response2 = await fetch('http://localhost:8000/jobs');
                const response3 = await fetch('http://localhost:8000/activities');
                const response4 = await fetch('http://localhost:8000/awards');
                const response5 = await fetch('http://localhost:8000/projects');

                setProfile({colleges: await response1.json(), 
                    jobs: await response2.json(),
                    activities: await response3.json(),
                    awards: await response4.json(),
                    projects: await response5.json()
                });
                setLoading(false);
            } catch(e) {
                console.log(e);
            }
        }
        setLoading(false);
    }

    if (loading) {
        loadingcontent = <div style={{position: "absolute", 
        top: "500px", 
        backgroundColor: "#1bc38f", 
        width: "100%", 
        height: "200px"}}><span style={{display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            height: '200px',
            fontSize: 'xx-large',
            fontWeight: '700'
        }}>Loading...</span></div>;
    }

    useEffect(() => {
        fetchInfo();
    }, [profile]);

    const year = new Date().getFullYear();
    
    return (
        <>
        {loadingcontent}
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
                        {profile.jobs &&
                            profile.jobs.map(job => {
                                return <li key={job.name}>{<>
                                    <div className={styles.jobname}>{job.name}</div>
                                    <div>{job.duties}</div>
                                    <div>{}</div>
                                    <div>{job.enddate}</div>
                                </>
                                    }
                                </li>
                            })}
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
            <FaRegCopyright />{year} arb1z webpages
        </div>
        </>
    )
}

export default Home;