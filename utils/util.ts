export function cleanQuery(str: string) {
  return str
    .split("?")[1]
    .split("&")
    ?.reduce((store: { [key: string]: string | string[] | null }, item: string) => {
      const [key, value] = item.split("=");
      if (store[key]) {
        Array.isArray(store[key]) ? (store[key] as string[]).push(value) : (store[key] = [store[key] as string, value]);
      } else {
        store[key] = value;
      }
      return store;
    }, {} as { [key: string]: string | string[] | null });
}
