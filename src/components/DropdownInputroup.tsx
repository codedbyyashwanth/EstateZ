import { DropdownInputType } from "../util/PropTypes";

const DropdownInputGroup = (props: {DropdownInputType: DropdownInputType}) => {
      return (
            <div className="drop_input_group">
                  <label>{props.DropdownInputType.label}</label>
                  <select>
                        <option value="select">{props.DropdownInputType.placeholder}</option>
                        {
                              props.DropdownInputType.data.map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                              ))
                        }
                  </select>
                  <div className="drop_icon">
                        <span className="material-symbols-outlined">
                              expand_more
                        </span>
                  </div>
            </div>
      )
};

export default DropdownInputGroup;