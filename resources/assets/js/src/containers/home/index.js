import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
} from '../../reducers/counter';

class Home extends Component {
    state = {
        apiResponse: '',
    };

    render() {
        const { apiResponse } = this.state;

        return (
            <section>
                <h1>Home</h1>
                <p>Count: {this.props.count}</p>
                <div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.props.increment}
                    >
                        Increment
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={this.props.incrementAsync}
                        disabled={this.props.isIncrementing}
                    >
                        Increment Async
                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.props.decrement}
                    >
                        Decrement
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={this.props.decrementAsync}
                        disabled={this.props.isDecrementing}
                    >
                        Decrement Async
                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={async () => {
                            const { data } = await window.axios.get(
                                '/api/test'
                            );

                            this.setState({
                                apiResponse: data,
                            });
                        }}
                    >
                        Call Laravel server
                    </button>
                    {apiResponse && <p>Response: {apiResponse}</p>}
                </div>
            </section>
        );
    }
}

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
