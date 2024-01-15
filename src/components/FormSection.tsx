import DropdownInputGroup from "./DropdownInputroup";
import TextInputGroup from "./TextInputGroup";
import { majorCitiesInIndia, propertyTypesInIndia, bathRoom, bedRoom } from "../util/data";

const FormSection = () => {
      return (
            <div className="form_section">
                  <div className="form_container">
                        <div className="form_row row-1">
                              <TextInputGroup inputProps={{
                                    label: "First Name",
                                    placeholder: "Enter your First Name"
                              }}  />
                              <TextInputGroup inputProps={{
                                    label: "Last Name",
                                    placeholder: "Enter your Last Name"
                              }}  />
                              <TextInputGroup inputProps={{
                                    label: "Email Address",
                                    placeholder: "Enter your Email Address"
                              }}  />
                              <TextInputGroup inputProps={{
                                    label: "Phone No.",
                                    placeholder: "Enter your Phone No."
                              }}  />
                        </div>
                        <div className="form_row row-1">
                              <DropdownInputGroup DropdownInputType={{
                                    label: "Preferred Location",
                                    placeholder: "Select Location",
                                    data: majorCitiesInIndia
                              }} />
                              <DropdownInputGroup DropdownInputType={{
                                    label: "Property Type",
                                    placeholder: "Select Property Type",
                                    data: propertyTypesInIndia
                              }} />
                              <DropdownInputGroup DropdownInputType={{
                                    label: "No. of Bedrooms",
                                    placeholder: "Select no. of bedrooms",
                                    data: bedRoom
                              }} />
                              <DropdownInputGroup DropdownInputType={{
                                    label: "No. of Bathrooms",
                                    placeholder: "Select no. of Bathrooms",
                                    data: bathRoom
                              }} />
                        </div>
                        <div className="form_row row-2">
                              <DropdownInputGroup DropdownInputType={{
                                          label: "Budget",
                                          placeholder: "Select your Budget",
                                          data: ["$50,000 - $100,000", "$100,101 - $300,000", "$300,001 - $1,000,000"]
                                    }} />
                                    <TextInputGroup inputProps={{
                                          label: "Preferred Contact No.",
                                          placeholder: "Enter your Phone No"
                                    }}  />
                                    <TextInputGroup inputProps={{
                                          label: "Email Address",
                                          placeholder: "Enter your Email"
                                    }}  />
                        </div>

                        <div className="form_row">
                              <div className="input_group">
                                    <label htmlFor="">Message</label>
                                    <textarea placeholder="Enter your Message">

                                    </textarea>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default FormSection;