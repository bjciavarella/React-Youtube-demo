import React, { Component } from 'react';
import classes from './App.css';
import Layout from "./Components/Containers/Layout/Layout";
import Header from "./Components/Containers/Header/Header";
import SideNav from "./Components/Containers/SideNav/SideNav";
import Backdrop from "./Components/UI/Backdrop/Backdrop";
import MainContent from "./Components/Containers/MainContent/MainContent";
import {Redirect, Route, Switch} from "react-router-dom";
import Channel from "./Components/Pages/Channel/Channel";
import Settings from "./Components/Pages/User/Settings/Settings";
import HomePage from "./Components/Pages/HomePage/HomePage";

class App extends Component {

    state = {
        channel: 'Brandon',
        sideNavOpen: false,
        condensedUi: false,
        width: 0
    };

    toggleMenu = () => {
        this.setState( (prevState) =>
            {
                return{
                    sideNavOpen: !prevState.sideNavOpen,
                    width: window.innerWidth
                }
            }
        )
    };

    componentDidMount() {
        this.checkWindowSize();
        window.addEventListener("resize", this.checkWindowSize);
    }

    checkWindowSize = () => {
        if(window.innerWidth >= 1400 && this.state.width < 1400) {
            this.setState(
                {
                    sideNavOpen: true,
                    condensedUi: false,
                    width: window.innerWidth
                }
            )
        }
        if(window.innerWidth < 1400) {
            this.setState(
                {
                    condensedUi: true,
                    sideNavOpen: false,
                    width: window.innerWidth
                }
            )
        }
    };

    validateAndGetFormattedChannelName = (channelName) => {
        if(this.state.channel.replace(/[^\w]/gi, '').toLowerCase() === channelName) {
            return this.state.channel;
        }

        let channelNameFormatted = '';
        this.subscriptionArray.forEach(function(channel) {
            if (channel.replace(/[^\w]/gi, '').toLowerCase() === channelName) {
                channelNameFormatted = channel;
            }
        });
        return channelNameFormatted;
    };

    //ideally this would be grabbed from a DB once logged in
    subscriptionArray = [
        "JayzTwoCents",
        "Linus Tech Tips",
        "Bitwit",
        "Paul's Hardware",
        "NigaHiga",
        "Demolition Ranch",
        "Node",
        "JerryRigEverything",
        "TheBackyardScientist",
        "ETCG1"
    ];


  render() {
      let routes = (
          <Switch>
              <Route
                  path={"/channel"}
                  render={() => <Channel channel={this.state.channel} validateAndGetFormattedChannelName={this.validateAndGetFormattedChannelName}/>}
              />
              <Route
                  path={"/settings"}
                  render={() => <Settings channel={this.state.channel}/>}
              />
              <Route
                  exact
                  path={"/"}
                  render={() => <HomePage user={this.state.user}/>}
              />
              <Redirect to={"/"}/>
          </Switch>
      );

    return (
      <Layout
          className={classes.App}
      >
          <Header
              channel={this.state.channel}
              toggleMenu={this.toggleMenu}
              condensedUi={this.state.condensedUi}
              sideNavOpen={this.state.sideNavOpen}
          />
          <SideNav
              subscriptions={this.subscriptionArray}
              currentPage={"Settings"}
              sideNavOpen={this.state.sideNavOpen}
              toggleMenu={this.state.condensedUi ? this.toggleMenu : null}
          />
          <Backdrop
              show={this.state.sideNavOpen && this.state.condensedUi}
              click={this.toggleMenu}
          />

          <MainContent
              sideNavOpen={this.state.sideNavOpen}
          >
              {routes}
          </MainContent>
      </Layout>
    );
  }
}

export default App;
