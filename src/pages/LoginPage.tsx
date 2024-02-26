export default function LoginPage() {
  return (
    <div className='container'>
      <h1>LoginPage</h1>
      <form>
        <input className='input' type='email' placeholder='email' />
        <input className='input' type='password' placeholder='Pass' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
