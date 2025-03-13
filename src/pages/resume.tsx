
import React from 'react';

export default function Resume(): React.ReactNode {
    return (
        <>
            <div className="resume">
                <h1>Resume</h1>
            </div>
            <iframe
                src='../../public/assets/images/MHM Res-1.pdf'
                width='100%'
                height="750px"
                title="Resume PDF"
                aria-label="Resume Document">
            </iframe>
        </>
    );

}