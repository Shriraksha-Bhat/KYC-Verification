import React from 'react';

const Home = (props) => {

    return(
        <section className='hero'>
            <nav>
                <h2>WELCOME</h2>
                <button onClick={props.handleLogout}> LogOut </button>
            </nav>
        </section>
    )
}

export default Home;