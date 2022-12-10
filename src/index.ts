/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/8 23:12
 * @Email: fred.zhen@gmail.com
 */
import axios from 'axios'

const post_query = { name: 'Fred Zhen', age: 45}
axios.post('http://localhost:3001/users', post_query)
  .then(response => console.log(`${response.status}: ${response.statusText}`));
