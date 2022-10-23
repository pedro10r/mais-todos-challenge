// Simulating api call

interface Response {
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        user: {
          name: 'John Doe',
          email: 'teste@email.com',
        },
      });
    }, 1500)
  })
}