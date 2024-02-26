import { useAuthCtx } from '../store/AuthProvider';

export default function LoginPage() {
  // const ctxVal = useContext(AuthContext);
  const ctxVal = useAuthCtx();
  console.log('ctxVal ===', ctxVal);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('pateikta forma');
    ctxVal.login('James@bond.com');
  }

  return (
    <div className='container'>
      <h1>LoginPage</h1>
      <form onSubmit={handleSubmit}>
        <input className='input' type='email' placeholder='email' />
        <input className='input' type='password' placeholder='Pass' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
