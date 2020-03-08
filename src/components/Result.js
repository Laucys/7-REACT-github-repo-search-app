import React from 'react';


const Result = ({ repo }) => {
    return (
        <div className="result-box">
           <div className="name"> 
            <a href={repo.html_url} target="_blank" >{repo.name} </a>
           </div>
           <p> {repo.description} </p>
        </div>
    )
}

export default Result;