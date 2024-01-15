import { InputType } from "../util/PropTypes";

const TextInputGroup = (props: {inputProps: InputType}) => {
      return (
            <div className="input_group">
                  <label>{props.inputProps.label}</label>
                  <input type="text" placeholder={props.inputProps.placeholder}/>
            </div>
      )
};

export default TextInputGroup;