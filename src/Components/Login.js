import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, userLogout } from '../store/login';
import styles from './Login.module.css';

const Login = () => {
  const { user, token } = useSelector((state) => state.login);
  const loading = token.loading || user.loading;

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <form className="anime" onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="username">
        Usuário
      </label>
      <input
        className={styles.input}
        id="username"
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <label className={styles.label} htmlFor="password">
        Senha
      </label>
      <input
        className={styles.input}
        id="password"
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button className={styles.button}>Enviar</button>
      <div className={styles.div}>
        <button
          onClick={() => dispatch(userLogout())}
          aria-label="Logout"
          className={`
        ${styles.login}
        ${loading ? styles.loading : ''}
        ${user.data ? styles.loaded : ''}
      `}
        ></button>
        <button
          onClick={() => dispatch(userLogout())}
          aria-label="Logout"
          className={`
        ${styles.login}
        ${loading ? styles.loading : ''}
        ${user.data ? styles.loaded : ''}
      `}
        ></button>
        <button
          onClick={() => dispatch(userLogout())}
          aria-label="Logout"
          className={`
        ${styles.login}
        ${loading ? styles.loading : ''}
        ${user.data ? styles.loaded : ''}
      `}
        ></button>
      </div>
    </form>
  );
};

export default Login;
