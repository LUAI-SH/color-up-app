const func = (key, defaultValue) => {
  let val;
  try {
    val = JSON.parse(
      window.localStorage.getItem(key) || String(defaultValue)
    );
  } catch (error) {
    console.log('error')
    val = defaultValue;
  }
  return val;
}

console.log(func('eee', 'kjb'));