import React, { Component, Fragment } from "react";
import SearchComponent from "../SearchComponent/Search";
import "../../youtube.css";
import "./Header.styles.css";
class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <section id="header">
          <article>
            <div className="logoBlock">
              <i className="bars icon im"></i>
              <img src="/1280px-YouTube_Logo.svg.png" alt="logo" />
            </div>
            <div className="searchBlock">
              <SearchComponent HeaderFormProps={this.props.fromAppFormProps} />
            </div>
            <div className="menuBlock">
              <section className="video_and_menuicons">
                <div>
                  <i className="video icon icn"></i>
                </div>
                <div>
                  <i className="th icon icn"></i>
                </div>
                <div>
                  <i className="ellipsis vertical icon icn"></i>
                </div>
                <div className="loginBlock">
                  <a href="">
                    <i className="user circle icon icn"></i>SignIn
                  </a>
                </div>
              </section>
            </div>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default HeaderComponent;
