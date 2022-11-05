const countDownRecursive = (n) => {
  if(n <= 0) {
    console.log('Hooray')
    return
  }
  console.log(n)
  countDownRecursive(n - 1)
}

countDownRecursive(3)