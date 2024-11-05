import { Link } from 'react-router-dom'
import PowderExplosion from '../assets/error-page/powder_explosion.webp'

const ErrorPage = () => {
  return (
    <main className='flex flex-col items-center justify-center h-screen text-center bg-242424 text-F5F5F5 p-4 gap-4'>
      <img src={PowderExplosion} alt="" className="w-64 h-64 rounded-full object-cover mb-4" />
      <h1 className='text-6xl font-bold mb-2'>404</h1>
      <div>
        <p className='text-lg mb-2'>Whoops! The page you're looking for just exploded.</p>
        <p className='text-lg mb-6'>It might have been moved, deleted, or just doesn't exist.</p>
      </div>
      <Link to='/' className='px-4 py-2 bg-fishbones text-F5F5F5 rounded-md hover:bg-powpow transition duration-300'>
        Back to Home
      </Link>
    </main>
  )
}

export default ErrorPage