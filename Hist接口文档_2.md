### 用户登录

- Method: POST 

- Url: https://dev.sealu.net:4433/api/v1/signin



- Params: 请求参数

|  Param   |  type  | isrequired | description |
| :------: | :----: | :--------: | :---------: |
| username | string |    yes     |   用户名    |
| password | string |    yes     |    密码     |

根据username和password进行登录，提供给你测试的username: admin。password: admin123



- Response

```
# response example

{
	code: 0,
	msg: '用户登录成功'
}
```



### 跳转

- Method: GET,POST 

- Url: https://dev.sealu.net:4433/api/v1/forward?url=/historian-rest-api/v1/tagslist



该路由需要cookie。该cookie会在登陆时给你。



- 参数query：转发到historian

  | query |                 description                  |
  | :---: | :------------------------------------------: |
  |  url  | historian的api部分，去掉host和port剩余的部分 |



- response

  ```
  # response example
  
  {
      "error": "invalid_token",
      "error_description": 		"eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI4Mjk1MTJjYS04MDJlLTQyZTEtYjc2ZS0xZTcyMWU4YjZmZjAiLCJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbImNsaWVudHMucmVhZCIsImhpc3Rvcmlhbl9yZXN0X2FwaS5yZWFkIiwicGFzc3dvcmQud3JpdGUiLCJjbGllbnRzLnNlY3JldCIsImhpc3Rvcmlhbl9yZXN0X2FwaS5hZG1pbiIsImhpc3Rvcmlhbl9yZXN0X2FwaS53cml0ZSIsImNsaWVudC5hZG1pbiIsImNsaWVudHMud3JpdGUiLCJ1YWEuYWRtaW4iLCJzY2ltLndyaXRlIiwiccLsRDN97ci7okjNFixkPIdIbqlZkAoNX-a52EFDtjg"
  }
  ```
