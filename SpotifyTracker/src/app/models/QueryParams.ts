export class QueryParams {
  params: Map<string, string> = new Map<string, string>();

  public add(key: string, value: string): QueryParams {
    this.params.set(key, value);
    return this;
  }

  public toString(): string {
    if (!this.params) return '';

    let queryString: string = '?';
    this.params.forEach((value, key) => (queryString += `${key}=${value}&`));

    return queryString.substring(0, queryString.length - 1);
  }
}
