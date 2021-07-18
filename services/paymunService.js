const URLS= {
  BASE_URL: "http://paymun.net",
  CREATE_TOKEN: "/api/account/CreateToken",
  PROFILE: "/api/account/Profile",

}

const POST = async(api_path, headers, body) => {
  try {
    
    console.log(
      'url: ' , URLS.BASE_URL + api_path,
      '\nheaders: ' , headers,
      '\nbody: ' , body
    )

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