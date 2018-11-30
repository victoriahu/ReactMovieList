// var Button = ({buttonName, callback}) => (
//   <button
//     name={buttonName}
//     onClick={callback}
//   >{buttonName}</button>
// );

var Button = ({buttonName, callback}) => {
    return (
      <button
        name={buttonName}
        onClick={callback}
      >{buttonName}</button>
    )
};

// var Button = (props) => (
//   <button onClick={props.callback}>{props.buttonName}</button>
// );

// props = {
//   callback: 'function',
//   buttonName: 'name of button',
// }

export default Button;
