export default function (url, op = {}) {
  const config = {
    mode: 'no-cors',
    method: 'get',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  }
 return fetch(url, Object.assign({}, config, op)).then(res => {
      if(op.text){
        return res.text()
      }
      return res.json()
    }).then(data => {
      if (data.code === 302) {
        window.location.href = data.msg
        return false
      }
      return data
    })

}
