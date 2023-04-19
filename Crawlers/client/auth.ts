import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { client } from './http';

// Log in
async function generateToken() {
  return client.post(
    'https://ecom-mgo-ecom.e-magnum.kz/auth/server/api/v1/security/guest/login'
  );
}

// Session
let token: string | undefined =
  'Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI3OTk5Nzc3Nzc3NyIsImF1ZCI6ImNpdHJvLXNlcnZpY2VzIiwic2NvcGUiOlsiNCIsIjgiXSwiaXNzIjoiaHR0cHM6XC9cL2NpdHJvYnl0ZS5jb20iLCJleHAiOjE2ODA2NTUxNjcsInVzZXJJZCI6NjU1MzI0LCJpYXQiOjE2ODA2MTkxNjcsImp0aSI6IjMxYmNlODkwLTQ1NWMtNGRmOC1hNTQ5LWZmM2I1YWNkM2M4ZiJ9.kKq3yLwl1Ax_pa_W3z1lbR5caMhdIMEpd6fIKoEl6_jO7Sa8OKa_MZg-dN1q1dPcJfVeQ5fuyIeFLFHuQNkC6MpdAdb_5DyzosSG29wHIBY2fHDOj-cEIVdRboH4QwPP6U5xO4SGOe2PMogmmcIXGBbqFg3q4CqQBc32djhqZCRr0GHoXBnJ5ShwZUcJg35wKlR8Pf2tzmVop_t4W_jiulvSAXQGKCmjv8VtDHw5ulM9kqHy4Q8nCKjV_0Tkcpt0aZqKbuGF64HSQLVWGI4uNVd5Op4WfthGi-Ag1IpH-ZvclDc-nL60nln1YPTN-a1b99c-XFN-scMOCsODUtPl9g';
let tokenPromise: Promise<AxiosResponse> | undefined = undefined;

function joinCreateToken() {
  // If there is no running token creation request a new one else just skip it
  if (!tokenPromise) {
    console.log('Generating the token...');
    tokenPromise = generateToken();
    tokenPromise?.finally(() => (tokenPromise = undefined));
  } else {
    console.log('We already were creating it, reusing the attemp...');
  }
  return tokenPromise;
}

export async function getToken(regenerate = false) {
  // if there is no token or flag of regeneration is set to true,
  // then we generate a new token
  if (!token || regenerate) {
    console.log('Token doesnt exist. Creating it...');
    token = (await joinCreateToken()).data.token;
  } else {
    console.log('Token exists');
  }

  return token;
}

// Authenticated request
export async function request(config: AxiosRequestConfig = {}) {
  // Grab the session's token
  console.log('New request');
  console.log(JSON.stringify(config));
  const token = await getToken();
  console.log('Using token: ' + token);

  // Do the actual HTTP request
  const response = await client.request({
    ...config,
    headers: {
      ...config?.headers,
      authorization: token!,
    },
  });

  // If result is ok just return it
  if (200 >= response.status && response.status < 300) {
    return response;
  }

  // If we get Unauthorized we refresh the token and retry once
  if (response.status === 401) {
    console.log('TOKEN IS EXPIRED!');
    // We need to regenerate, flag must be set to true
    const newToken = await getToken(true);
    console.log('Using token: ' + newToken);

    return await client.request({
      ...config,
      headers: {
        ...config?.headers,
        authorization: newToken!,
      },
    });
  }

  // Else we throw an error
  throw new Error(
    JSON.stringify({
      status: response.status,
      headers: response.headers,
      data: response.data,
    })
  );
}
