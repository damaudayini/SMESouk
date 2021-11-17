export default function validateInfo(values) {
    let errors = {};

    
  // Phone Validation
  if (!values.phone.trim()) {
    errors.phone = "Phone number is required!";
  }
  
  if (!values.loginPhone.trim()) {
    errors.loginPhone = "Phone number is required!";
  }

  //  Email Validation
  if (!values.email.trim()) {
    errors.email = "Email address is required!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.loginEmail.trim()) {
    errors.loginEmail = "Email address is required!";
  } else if (!/\S+@\S+\.\S+/.test(values.loginEmail)) {
    errors.loginEmail = "Email address is invalid";
  }

  //   Identity Number Validation
  if (!values.identityNo.trim()) {
    errors.identityNo = "Identity number is required!";
  }

  //   License Validation
  if (!values.license.trim()) {
    errors.license = "Business trade license number is required!";
  }

  //   Date of Incorporation values
  if (!values.incorporationDate.trim()) {
    errors.incorporationDate = "Incorporation date is required!";
  }
  
    // Phone Validation
    if (!values.phone.trim()) {
      errors.phone = "Phone number is required!";
    }
  
    //  Email Validation
    if (!values.email.trim()) {
      errors.email = "Email address is required!";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
  
    //   Identity Number Validation
    if (!values.identityNo.trim()) {
      errors.identityNo = "Identity number is required!";
    }
  
    //   License Validation
    if (!values.license.trim()) {
      errors.license = "Business trade license number is required!";
    }
  
    //   Date of Incorporation values
    if (!values.incorporationDate.trim()) {
      errors.incorporationDate = "Incorporation date is required!";
    }

    // Cardname Validation
    if (!values.cardname.trim()) {
      errors.cardname = "Name is required!";
    }

    // BuisnessName Validation
    if (!values.buisnessname.trim()) {
      errors.buisnessname = "Buisness name is required!";
    }

    // BuisnessEmail Validation
    if (!values.buisnessemail.trim()) {
      errors.buisnessemail = "Buisness email is required!";
    }

    // BuisnessProfile Validation
    if (!values.Businessprofile.trim()) {
      errors.Businessprofile = "Buisness profile is required!";
    }

    // phoneNumber Validation
    if (!values.phonenumber.trim()) {
      errors.phonenumber = "Phone number is required!";
    }
  
    return errors;
  }

