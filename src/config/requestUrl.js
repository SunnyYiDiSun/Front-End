const login={
  url:"http://localhost:8090/login",
  method:"POST"
};
const findAllUser = {
  url:"http://localhost:8090/user/findAll",
  method:"GET"
}
const urlRequest={
  login,
  findAllUser
};
export default urlRequest
