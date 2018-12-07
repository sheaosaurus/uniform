import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faExclamationCircle from '@fortawesome/fontawesome-free-solid/faExclamationCircle';

const PageNotFound = () => {
    return (
        <div className="row">
            <div className="header--block"></div>
            <div className="page__notfound">
                <FontAwesomeIcon icon={faExclamationCircle}/>
                <div>
                    Oops !! page not found
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;