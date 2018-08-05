import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
} from '../../reducers/counter';

const Home = props => (
    <section>
        <h1>Home</h1>
        <p>Count: {props.count}</p>
        <div>
            <button
                type="button"
                className="btn btn-primary"
                onClick={props.increment}
            >
                Increment
            </button>
            <button
                type="button"
                className="btn btn-outline-primary"
                onClick={props.incrementAsync}
                disabled={props.isIncrementing}
            >
                Increment Async
            </button>
        </div>
        <div>
            <button
                type="button"
                className="btn btn-danger"
                onClick={props.decrement}
            >
                Decrement
            </button>
            <button
                type="button"
                className="btn btn-outline-danger"
                onClick={props.decrementAsync}
                disabled={props.isDecrementing}
            >
                Decrement Async
            </button>
        </div>
    </section>
);

Home.propTypes = {
    count: PropTypes.number.isRequired,
    decrement: PropTypes.func.isRequired,
    decrementAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    isDecrementing: PropTypes.bool.isRequired,
    isIncrementing: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ counter }) => ({
    count: counter.count,
    isIncrementing: counter.isIncrementing,
    isDecrementing: counter.isDecrementing,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            increment,
            incrementAsync,
            decrement,
            decrementAsync,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
