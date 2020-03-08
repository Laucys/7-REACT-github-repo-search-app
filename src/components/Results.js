import React from 'react';
import Result from './Result';

const Results = ({ repos, index }) => {
    return (
        <div className="results">
            {repos.map(repo => (
                <Result key={repo.id} repo={repo} className="result"/>
            ))}
        </div>
    )
}

export default Results;