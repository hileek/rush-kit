const buildUrl = (url: string, params: Record<string | number, string | number | boolean> = {}): string => {
  let queryString = '';

  for (const key in params) {
      if (!Object.prototype.hasOwnProperty.call(params, key) || params[key] === undefined || params[key] === null) {
        continue;
      }
      queryString += `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}&`;
  }

  queryString = queryString.slice(0, -1);

  return queryString ? `${url}?${queryString}` : url;
};

export default buildUrl;
