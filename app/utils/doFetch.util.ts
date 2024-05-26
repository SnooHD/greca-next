import { STRAPI_TOKEN, STRAPI_URL } from "./env.util";

export async function doStrapiFetch<T = any>(
    slug: RequestInfo,
    config?: RequestInit
  ): Promise<T> {
    const response = await fetch(`${STRAPI_URL}/api${slug}`, {
      ...config,
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    });
  
    if (response.ok) {
      const json = await response.json();
      return json;
    }
  
    const error = await response.json();
    throw {
      ...error,
      slug
    };
  }
  