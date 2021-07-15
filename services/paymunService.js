const BASE_URL= "https://consultant.myrayzan.ir"


export const post = async() => {
  try {
    let res = await fetch(`${BASE_URL}/api/v1/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: "09359578994",
        password: "123456789"
      }),
    });
    res = await res.json();
    console.log(res)
    return res;
  } catch (e) {
      console.error(e);
      return null;
    }
}