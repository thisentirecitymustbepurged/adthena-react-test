import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '@components/Nav';
import TaskOne from '@components/taskone/TaskOne';
import TaskTwo from '@components/tasktwo/TaskTwo';
import ErrorBoundary from '@components/common/ErrorBoundary';
import ThemeContext from '@/ThemeContext';

const routes = [{
  path: '/',
  exact: true,
  component: TaskOne
}, {
  path: '/task-two',
  component: TaskTwo
}];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => this.setState(state => ({
      theme: state.theme === 'dark'
        ? 'light'
        : 'dark',
    }));

    this.state = {
      theme: 'light',
      toggleTheme: this.toggleTheme, // eslint-disable-line
    };
  }

  render() {
    const { theme } = this.state;

    return (
      <ThemeContext.Provider value={this.state}>
        <div className={`app ${theme}`}>
          <Router>
            <Nav />
            <Switch>
              {routes.map(({ component: Component, ...route }, key) => (
                <Route {...{ ...route, key }}>
                  <ErrorBoundary>
                    <Component />
                  </ErrorBoundary>
                </Route>
              ))}
            </Switch>
          </Router>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
