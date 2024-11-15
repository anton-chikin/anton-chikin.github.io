function checkPassword(form) {
  const password = form.password.value
  const correctPassword = '1234'

  if (password === correctPassword) {
    window.location.href = 'video.html'
  } else {
    alert('Невірний PIN-код!')
  }
  return false
}
