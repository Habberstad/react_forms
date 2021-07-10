import useInput from "./../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const BasicForm = (props) => {
  const {
    value: enteredFirstname,
    hasError: firstnameInputError,
    isValid: enteredFirstnameIsValid,
    valueChangeHandler: firstnameChangeHandler,
    inputBlurHandler: firstnameBlurHandler,
    reset: resetFirstname,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastname,
    hasError: lasttnameInputError,
    isValid: enteredLastnameIsValid,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
    reset: resetLastname,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    hasError: emailInputError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (
    enteredFirstnameIsValid &&
    enteredLastnameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const firstnameInputClasses = firstnameInputError
    ? "form-control invalid"
    : "form-control";

  const lastnameInputClasses = lasttnameInputError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputError
    ? "form-control invalid"
    : "form-control";

  const submitHandler = (event) => {
    event.preventDefault();

    resetFirstname();
    resetLastname();
    resetEmailInput();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstnameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstnameChangeHandler}
            onBlur={firstnameBlurHandler}
            value={enteredFirstname}
          />
          {firstnameInputError ? (
            <p className="error-text">Firstname must not be empty.</p>
          ) : null}
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastnameChangeHandler}
            onBlur={lastnameBlurHandler}
            value={enteredLastname}
          />
          {lasttnameInputError ? (
            <p className="error-text">Lastname must not be empty.</p>
          ) : null}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputError ? (
          <p className="error-text">Please enter valid email.</p>
        ) : null}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
