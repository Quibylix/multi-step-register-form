export function validateName(name: unknown) {
  if (!name) {
    return "Please fill in all the fields!";
  }

  if (typeof name !== "string") {
    return "Please fill in all the fields!";
  }

  if (!name.trim()) {
    return "Please fill in all the fields!";
  }

  return null;
}

export function validateEmail(email: unknown) {
  if (!email) {
    return "Please fill in all the fields!";
  }

  if (typeof email !== "string") {
    return "Please fill in all the fields!";
  }

  if (!email.trim()) {
    return "Please fill in all the fields!";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please provide a valid email!";
  }

  return null;
}

export function validateTopics(topics: unknown) {
  if (!topics) {
    return "Please select at least one topic!";
  }

  if (!Array.isArray(topics)) {
    return "Please select at least one topic!";
  }

  if (!topics.length) {
    return "Please select at least one topic!";
  }

  if (!topics.every(topic => typeof topic === "string")) {
    return "Please select at least one topic!";
  }

  return null;
}
