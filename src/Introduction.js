import React from 'react';
// import introimg from "./images/home1.jpg";
const Introduction = () => {
    return (
        <div className="intro">
            <div className="intro-image">
                {/* <img className='myimg' src={introimg} alt="My name is Silas" /> */}
            </div>
            <div className="intro-text">
                <h1>What we do</h1>
                <p className="intro-details">
                   <strong>FightHunger</strong>  is an initiative proposed by three students in Cameroon who noticed the problem and negative effects of hunger and decided to build this platform which helps people find locations/venues where they can have free food, and also collect donations and use the funds to organise trainings and workshops teaching these people how to raise money.
                   
                </p>
                <div>
                    <button className="hireBtn">DONATE</button>
                    <button className="hireBtn hrbtn">FIND FOOD</button>
                </div>

            </div>
        </div>
    );
}

export default Introduction;