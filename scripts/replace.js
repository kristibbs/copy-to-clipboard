function copyPaste() {
  /* Get the text field */
  const copyText = document.getElementById("textarea-copy");
  const copied = document.getElementById("copied");
  
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  copied.classList.add("active")
}