export default function LoginPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('pateikta forma');
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
