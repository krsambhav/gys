chrome.webRequest.onBeforeSendHeaders.addListener(
  function (details) {
    const url = new URL(details.url);
    const domain = url.hostname;
    let cookieValue;
    // Now, use the chrome.cookies API to get cookies for this domain.
    chrome.cookies.getAll({ domain: domain }, function (cookies) {
      cookieValue = cookies
      console.log(cookieValue)
      mergeCookies(cookieValue)
    });
  },
  { urls: ["https://www.usvisascheduling.com/*"] }, // Filter to capture all URLs
  ["requestHeaders"]
);

function mergeCookies(cookies) {
  let finalString = ''
  cookies.forEach((cookie) => {
    finalString += `${cookie['name']}=${cookie['value']}; `
  })
  finalString = finalString.slice(0, finalString.length-2)
  console.log(finalString)
  if (finalString.includes('Dynamics365PortalAnalytics'))
    sendCookies(finalString)
  else
    return
}

function sendCookies(cookie){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "name": cookie
  });
  
  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://localhost:3000/posts/1", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}