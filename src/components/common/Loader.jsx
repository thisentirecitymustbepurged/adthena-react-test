import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

class Loader extends React.Component {
  state = {
    loading: true,
    results: undefined
  }

  componentDidMount() {
    this.load();
  }

  async load() {
    const { itemsToLoad } = this.props;
    const results = {};

    await Promise.all(
      Object.keys(itemsToLoad).map(
        key => itemsToLoad[key]().then(res => { results[key] = res; })
      )
    );

    this.setState({
      results,
      loading: false
    });
  }

  render() {
    const { loading, results } = this.state;
    let { children } = this.props;
    children = children && cloneElement(children, { ...results });

    return loading ? <div>Loading...</div> : children;
  }
}

Loader.propTypes = {
  itemsToLoad: PropTypes.object.isRequired,
  children: PropTypes.element
};

Loader.defaultProps = {
  children: null
};

export default Loader;
