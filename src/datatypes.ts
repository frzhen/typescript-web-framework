/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/10 10:34
 * @Email: fred.zhen@gmail.com
 */
export interface UserProps {
  name?: string;
  age?: number;
}
export type Callback = () => void;

export type Events = {[key: string]: Callback[]}
