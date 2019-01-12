import React, { Component } from 'react';
import './education.component.css';

const dateOptions = {
    year: 'numeric'
};
const educationList = [
    {
        school: 'George Brown College',
        degree: 'Computer Programmer Analyst',
        startDate: new Date(2014, 8),
        endDate: new Date(2017, 3)
    },
    {
        school: 'University of Toronto',
        degree: 'HBa Philosophy & Latin',
        startDate: new Date(2008, 8),
        endDate: new Date(2013, 3)
    }
];

export default class EducationComponent extends Component {
    render() {
        return(
            <div className="education">
                <div className="row">
                    <div className="col-2">
                        <h2 className="section-title">Education</h2>
                    </div>
                    <div className="col-10">
                        <ul className="education-list">
                            { educationList.map((education, i) => {
                                return (
                                    <li key={i} className="education-item">
                                        <div className="education-time">
                                            <time>{ education.startDate.toLocaleDateString('en-US', dateOptions) } - { education.endDate ? education.endDate.toLocaleDateString('en-US', dateOptions) : 'Present' }</time>
                                        </div>
                                        <div className="education-school">{ education.school }</div>
                                        <div className="education-degree">{ education.degree }</div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}