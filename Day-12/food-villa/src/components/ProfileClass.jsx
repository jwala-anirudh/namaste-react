import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    // Create state here
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
        avatar_url: "Dummy url",
      },
    };
    console.log("1. Child Class - Constructor " + this.props.name);
  }

  // Called after initial render
  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("NAMASTE REACT OP");
    }, 1000);

    // Best place to do API Call
    const data = await fetch(`https://api.github.com/users/jwala-anirudh`);
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });

    // Since this is async function parent componentDidMount is called first then this
    console.log("3. Child Class - componentDidMount " + this.props.name);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      // code
    }

    console.log("4. Child Class - componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("5. Child Class - componentWillUnmount");
  }

  // Most important method, which is mandatory
  render() {
    console.log("2. Child Class - render Class " + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        {/* <h2>Name: {this.props.name}</h2> */}

        <img
          src={this.state.userInfo?.avatar_url}
          alt={this.state.userInfo?.name}
          width={260}
          height={260}
        />
        <h2>Name: {this.state.userInfo?.name}</h2>
        <h2>Location: {this.state.userInfo?.location}</h2>

        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            // WE DO NOT MUTATE STATE DIRECTLY
            // NEVER do this.state = something
            this.setState({ count: 1 });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default ProfileClass;
