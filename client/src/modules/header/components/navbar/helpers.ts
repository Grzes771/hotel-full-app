export function debounce(func: Function, wait: number, immediate?: boolean) {
  let timeout: null | ReturnType<typeof setTimeout> = null;
  return function (this: void) {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout!);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
