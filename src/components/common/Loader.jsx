import React, { cloneElement } from 'react';

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

    await Promise.all(Object.keys(itemsToLoad).map(key => itemsToLoad[key]().then(res => { results[key] = res; })));

    this.setState({
      results,
      loading: false
    });
  }

  render() {
    const { loading, results } = this.state;
    let { children } = this.props;
    children = cloneElement(children, { ...results });


    return loading ? <div>Loading...</div> : children;
  }
}

export default Loader;
