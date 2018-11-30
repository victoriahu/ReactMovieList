import ButtonList from './ButtonList.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numButtons: 0,
      buttonList: ['Home',
      // 'Profile',
      'Another',
      'One',
      'Hello',
      'Bob',
      'James',],
    }
  }

  onClickButton(event) {
    console.log(event.target.name);
    if (event.target.name === 'Bob') {
      console.log('Hello Robert');
    }
  }

  render() {
    return (
      <div>
        <ButtonList
          onClickButton={this.onClickButton.bind(this)}
          buttonList={this.state.buttonList}
          />
      </div>
    )
  }

};
{/* <div>
        <span>
          <button>Home asdf should render here</button>
        </span>
        <span>
          <button>Profile button should render here</button>
        </span>
      </div> */}
// Define what components we need
  // Button list
  // Button component
  // 

// In app's state:
  // Information about the buttons


export default App;
