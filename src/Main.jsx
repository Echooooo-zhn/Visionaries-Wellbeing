/*
 * @Author: Echooooo-zhn haonanZHONG17@outlook.com
 * @Date: 2022-08-08 03:06:31
 * @LastEditors: Echooooo-zhn haonanZHONG17@outlook.com
 * @LastEditTime: 2022-08-10 14:39:55
 * @FilePath: \undefinedc:\Users\99489\Desktop\COMP9323\aws\amplifyapp\src\Main.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable quote-props */
/* eslint-disable eol-last */
/* eslint-disable indent */
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

export async function apiCall(path, method, body, navigate) {
  console.log(body)
  const token = localStorage.getItem('token');
  const url = 'http://localhost:5000/' + path;
  const init = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': (path === 'login' || path === 'expert_register' || path === 'student_register') ? undefined : `Bearer ${token}`,
    },
    body: method === 'GET' ? undefined : JSON.stringify(body),
  };
  console.log(init)
  try {
    const response = await fetch(url, init);
    if (response.status !== 200 && response.status !== 201) {
      const data = await response.json()
      console.log(data);
      return `${response.status}` + data.message;
    }
    if (response.status == 401) {
      navigate('/login');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

export const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Visionaries
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}