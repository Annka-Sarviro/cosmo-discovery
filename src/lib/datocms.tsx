import { GraphQLClient, RequestDocument } from 'graphql-request';

interface IRequestOptions {
  query: RequestDocument;
  variables?: { [key: string]: any };
}

export function request<T>({ query, variables }: IRequestOptions): Promise<T> {
  const headers = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };

  const client = new GraphQLClient('https://graphql.datocms.com', { headers });

  return client.request<T>(query, variables);
}
