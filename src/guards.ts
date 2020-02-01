export default () => {
  function f(x: string | number) {
    if (typeof x === 'string') {
      return x.toLowerCase()
    }
    return x.toFixed(2)
  }

  // instanceof
  type alert = 'success' | 'warning';

  function getAlertType(type: alert) {
    return type
  }

  getAlertType('success')
}
