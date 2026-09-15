export function validateEmail(email) {
  if (email === "") {
    return "Email is required";
  }
  if (!email.includes("@")) {
    return "Enter a valid email";
  }
  return "";
}

export function validatePassword(password) {
  if (password === "") {
    return "Password is required";
  }
  if (password.length < 6) {
    return "Password must be 6 characters";
  }
  return "";
}
export function validateName(name) {
  if (name === "") {
    return "Name is required";
  }
  return "";
}