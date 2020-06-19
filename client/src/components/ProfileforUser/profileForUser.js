import React, { Component, Fragment } from "react";
import axios from "axios";

class UserProfile extends Component {
  state = {
    user: {
      userId: "",
      userhandle: "your unique id",
      bio: "your bio",
      website: "your website",
      hobbies: "your hobbies",
      imageId: "",
    },
  };

  componentDidMount() {
    console.log("hi");

    axios
      .get("/userprofile")
      .then((res) => {
        console.log(res);
        if (res.data == null) {
          console.log("ok!");
        } else {
          this.setState({ user: res.data });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Fragment>
        <br></br>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "blueviolet" }}>{this.state.user.userhandle}</h1>

          <br></br>
          <div style={{ color: "#685380" }}>
            <img src={this.state.user.imageId}></img>
            <br></br>
            <h4>bio: {this.state.user.bio}</h4>
            <br></br>
            <h4>website: {this.state.user.website}</h4>
            <br></br>
            <h4>hobbies: {this.state.user.hobbies}</h4>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default UserProfile;
