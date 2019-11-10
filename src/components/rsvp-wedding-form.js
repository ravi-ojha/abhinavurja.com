import React from "react";
import axios from 'axios';

class RsvpWeddingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      totalMembers: 1,
      memberDetails: '',
      successMsg: '',
      errorMsg: '',
      loading: false,
      response: '',
    };
  }

  validateEmail = (email) => {
    const validateEmailResponse = {
      error: false,
    };
    if (!email) {
      validateEmailResponse.error = true;
      validateEmailResponse.message = "Email cannot be blank";
      return validateEmailResponse;
    }
    if (!email.includes('@')) {
      validateEmailResponse.error = true;
      validateEmailResponse.message = "Please enter a valid email address";
      return validateEmailResponse;
    }
    if (email.length > 254) {
      validateEmailResponse.error = true;
      validateEmailResponse.message = "The email seems too long, our servers aren\'t happy with it.";
      return validateEmailResponse;
    }
    return validateEmailResponse;
  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = (evt) => {
    evt.preventDefault();
    this.setState({ loading: true });

    const validateEmailResponse = this.validateEmail(this.state.email);
    if (validateEmailResponse.error) {
      this.setState({ errorMsg: validateEmailResponse.message, loading: false });
      return;
    }

    const bodyFormData = new FormData();
    bodyFormData.set('email', this.state.email);
    bodyFormData.set('name', this.state.name);
    bodyFormData.set('totalMembers', this.state.totalMembers);
    bodyFormData.set('memberDetails', this.state.memberDetails);
    return axios.post("https://script.google.com/macros/s/AKfycbwzr7SReB9KOajsUd0OpZGjTRojZdAcwVjHwD4bHIxKwYDqYbA6/exec", bodyFormData)
      .then((response) => {
        this.setState({ successMsg: "Thank you for joining us on our big day!", errorMsg: "", loading: false });
        console.log(response);
      })
      .catch((error) => {
        this.setState({ successMsg: "", errorMsg: "Whoops! There was some issue saving the data. Can you please try one more time after refreshing the page?", loading: false });
        console.log(error);
      });
  };

  render() {
    return (
      <section id="rsvp-wedding-form" className="rsvp">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              { this.state.successMsg && <div className="alert alert-success" role="alert">{this.state.successMsg}</div> }
              <h3 className="text-center">RSVP for the wedding!</h3>
              <p className="text-center">It would help us make your stay awesome if you RSVP before 15<sup>th</sup> December</p>
              { this.state.errorMsg && <div className="alert alert-danger" role="alert">{this.state.errorMsg}</div> }
              <form id="rsvp-form" className="rsvp-form" action="" method="POST">
                <div className="row">
                  <div className="col-md-12 col-sm-6">
                    <label>Name</label>
                    <div className="form-input-group">
                      <input
                        type="text"
                        name="name"
                        className=""
                        placeholder="Goku"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required 
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-6">
                    <label>Email</label>
                    <div className="form-input-group">
                      <input
                        type="email"
                        name="email"
                        className=""
                        placeholder="goku@kakarot.com"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required 
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-6">
                    <label>Total members (including yourself)</label>
                    <div className="form-input-group">
                      <input
                        type="number"
                        name="totalMembers"
                        className=""
                        min="1"
                        max="5"
                        value={this.state.totalMembers}
                        onChange={this.handleChange}
                        required />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-6">
                    <label>Optional details</label>
                    <div className="form-input-group">
                      <input
                        type="textarea"
                        name="memberDetails"
                        className=""
                        placeholder="My spouse and our little one, Gohan"
                        value={this.state.memberDetails}
                        onChange={this.handleChange}
                        required 
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12" id="alert-wrapper"></div>
                </div>
                {
                  this.state.loading ?
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      disabled
                    >
                        <span className="glyphicon glyphicon-repeat fast-right-spinner"> </span> Processing
                    </button>
                  :
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      onClick={this.onFormSubmit}
                    >
                        { this.state.totalMembers > 1 ? "Count us in!" : "Count me in!" }
                    </button>
                }
                
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default RsvpWeddingForm
