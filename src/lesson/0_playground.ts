export function log(target: Object, propertyName: string, propertyDesciptor: PropertyDescriptor): PropertyDescriptor {
  const method = propertyDesciptor.value;
  propertyDesciptor.value = function (...args: any[]) {
      const params = args.map(a => JSON.stringify(a)).join();
      const result = method.apply(this, args);
      console.log(`Call: ${propertyName}(${params}) => ${JSON.stringify(result)}`);
      return result;
  }
  return propertyDesciptor;
};


class Foo {
  @log
  static doSomthing(...data: string[]): string {
    return data.join("").split("").map(c => String.fromCharCode(c.charCodeAt(0) + 1)).join("");
  }
}

Foo.doSomthing("This", "is", "Data")
