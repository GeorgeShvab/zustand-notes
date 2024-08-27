function throttle(fn: (...args: any[]) => void, ms: number = 250) {
  let isThrottled: boolean, savedThis: any, savedArgs: any;

  function wrapper(this: any, ...args: any[]) {
    if (isThrottled) {
      savedThis = this;
      savedArgs = args;
      return;
    }

    fn.apply(this, args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;

      if (savedArgs || savedThis) {
        wrapper.apply(savedThis, savedArgs);

        savedArgs = savedThis = undefined;
      }
    }, ms);
  }

  return wrapper;
}

export default throttle;
