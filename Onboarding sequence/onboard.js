const toggle = () => {
  const body = document.querySelector("body");
  if (body.classList.contains("primer-paso")) {
    body.classList.remove("primer-paso");
    body.classList.add("segundo-paso");
  } else if (body.classList.contains("segundo-paso")) {
    body.classList.remove("segundo-paso");
  } else {
    body.classList.add("primer-paso");
  }
};
