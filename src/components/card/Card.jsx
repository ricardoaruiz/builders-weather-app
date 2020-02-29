import PropTypes from 'prop-types';
import React from 'react';

import styles from './Card.module.scss';

const Card = (props) => {

    const { children, title, headerActions } = props;

    return (
        <div className={styles.Card}>
            <div className={styles.Header}>
                <div>
                    {title}
                </div>
                <div>
                    {headerActions()}
                </div>
            </div>
            <div className={styles.Body}>
                {children}
            </div>
        </div>
    );
}
 
Card.propTypes = {
    children: PropTypes.oneOfType(PropTypes.array, PropTypes.element, PropTypes.object),
    title: PropTypes.string,
    headerActions: PropTypes.func,
}

Card.defaultProps = {
    headerActions: () => {},
}

export default Card;