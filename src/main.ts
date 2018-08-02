import './index';

const xmlHttpRequest: XMLHttpRequest = new XMLHttpRequest();

const url: string = 'http://ip-api.com/json';

xmlHttpRequest.onreadystatechange = () => {
  if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
    const obj = JSON.parse(xmlHttpRequest.responseText);

    console.log(obj);
  }
};

xmlHttpRequest.open('GET', url, true);

xmlHttpRequest.send();