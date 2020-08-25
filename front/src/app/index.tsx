import React from "react";
import { RouteProps, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Helmet } from "react-helmet";

import Button from "@material-ui/core/Button";

//
import logo from "../static/logo.svg";
import config from "../config";
// Import your global styles here
import "normalize.css/normalize.css";
import styles from "./styles.module.scss";

interface Route {
  route: { routes: RouteProps[] };
}

interface AppState {
  isVisible: boolean;
}

class App extends React.Component<Route, AppState> {
  constructor(props: Route) {
    super(props);

    // console.log("this.pro", this.props);
    this.state = {
      isVisible: false,
    };
  }

  onSubmit = (): void => {
    const { isVisible } = this.state;
    this.setState({ isVisible: true });
  };

  render() {
    // const {onSubmit} = this.props;
    const { onSubmit } = this;

    const { route } = this.props;

    return (
      <div className={styles.App}>
        <Helmet {...config.APP} />
        <div className={styles.header}>
          <Link to="/" className={styles.link}>
            <img src={logo} alt="Logo" role="presentation" />
            <div className={styles.title}> {config.APP.title} </div>
          </Link>
        </div>
        <hr />
        {/* Child routes won't render without this */}
        {renderRoutes(route.routes)}
      </div>
    );
  }
}

export default App;
