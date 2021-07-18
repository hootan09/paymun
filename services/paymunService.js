const URLS= {
  BASE_URL: "http://paymun.net",
  CREATE_TOKEN: "/api/account/CreateToken"

}

const POST = async(api_path, headers, body) => {
  try {
    let res = await fetch(URLS.BASE_URL + api_path, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    });
    res = await res.json();
    console.log(res)
    return res;
  } catch (e) {
      console.error(e);
      return null;
    }
}

module.exports = {
  POST, 
  URLS
}