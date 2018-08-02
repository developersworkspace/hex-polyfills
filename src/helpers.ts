export function interceptFunction(object: any, fnName: string, options: { after: any; before: any }): void {
  const noop = () => {};
  const fnToWrap = object[fnName];
  const before = options.before || noop;
  const after = options.after || noop;

  object[fnName] = function () {
    before.apply(this, arguments);
    const result = fnToWrap.apply(this, arguments);
    after.apply(this, arguments);

    return result;
  };
}
