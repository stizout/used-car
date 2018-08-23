import React from 'react';
import './home.css'
import {Link} from 'react-router-dom';




class Home extends React.Component {

    render() {
        return (
            <div className="home-background">
                <div className="home-body">
                    <div className="parallax-top">
                        <h1>"Buy with confidence" <i className="fas fa-trademark"></i></h1>
                        <div className="boxes-container">
                            <Link to="/select"><div className="box-1" onClick={() => this.props.menuUpdate('Complaints')}>
                                <h2 className="box-title">Complaints</h2>
                                <p>Make sure you never buy a lemon again!</p>
                            </div></Link>
                            <Link to="/selectRecall"><div className="box-2" onClick={() => this.props.menuUpdate('Recalls')}>
                                <h2 className="box-title">Recalls</h2>
                                <p>Does your car have defects?</p>
                                <p>Know before you buy!</p>
                            </div></Link>
                        </div>
                    </div>
                    <p className="large-quote">
                        Bacon ipsum dolor amet picanha beef ribs sirloin, 
                        salami pork belly venison pork loin tri-tip ham 
                        hock biltong spare ribs ham. Boudin bresaola biltong 
                        strip steak. Corned beef pork chop boudin andouille. 
                        Corned beef jowl.
                    </p>
                    <div className="why-use-container">
                        <h1>Why use Car Complaints</h1>
                        <div className="why-use-boxes">
                            <div className="reason-1">
                                <p>
                                    Bacon ipsum dolor amet picanha beef ribs sirloin, 
                                    salami pork belly venison pork loin tri-tip ham 
                                    hock biltong spare ribs ham. Boudin bresaola biltong 
                                    strip steak. Corned beef pork chop boudin andouille. 
                                    Corned beef jowl.
                                </p>
                            </div>
                            <div className="reason-2">
                                <p>
                                    Sirloin fatback ground round tongue swine short 
                                    loin. Pork loin corned beef pork, shankle brisket 
                                    turducken tail venison short ribs. Corned beef fatback 
                                    ham hock, leberkas filet mignon venison pastrami ribeye 
                                </p>
                            </div>
                            <div className="reason-3">
                                <p>
                                    Meatball kevin turkey jowl shoulder venison, meatloaf 
                                    kielbasa pork sirloin. Pancetta bresaola beef pork 
                                    belly salami. Strip steak chicken frankfurter shank 
                                    drumstick prosciutto, tenderloin turducken.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home