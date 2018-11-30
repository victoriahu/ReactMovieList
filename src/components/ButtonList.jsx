import Button from './Button.js';

var ButtonList = ({buttonList, onClickButton}) => (
  // TODO: Make two buttons, "Home" and "Profile"
  <div>
    {buttonList.map((name) => 
    {
      return (
        <Button
          buttonName={name}
          callback={onClickButton}
        />
      )
    })}
  </div>
)

// props = {
//   onClickButton: 'function',
//   buttonList: ['buttons'],
// }

export default ButtonList;
