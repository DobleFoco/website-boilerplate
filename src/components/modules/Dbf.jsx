import backdrop from '../../assets/backdrops/coding.jpg';
import logo from '../../assets/logos/dbf-240.png';
// This module is selfcontained, only needs TailwindCSS

export const Dbf = () => {
  return (
    <main className='flex flex-col justify-center items-center w-screen h-screen text-white'>
      <div className='flex flex-col gap-6 justify-center items-center rounded-md shadow-md p-6'>
        <img src={ logo } alt='Our logo' className='w-64'/>
        <h1 className='text-4xl text-center flex font-bold'>tusitio.cl</h1>
        <h2 className='sm:text-2xl text-center flex font-bold text-gray-300'>Servicios Digitales DobleFoco</h2>
        <h3 className='text-xs sm:text-md text-center flex  text-gray-300'>Estamos preparando algo emocionante para ti</h3>
        <div className='flex flex-row gap-4 justify-center items-center text-xs mt-10'>
          <p className=''><a className='p-4 rounded-full backdrop-blur bg-yellow-500 hover:bg-yellow-400 text-black' href='https://doblefoco.cl' target='_self'>Ir a <strong>doblefoco.cl</strong></a></p>
        </div>
      </div>
      <img className='absolute -z-10 object-cover h-screen w-screen opacity-40' src={backdrop} alt='Coding background image' />
      <div className='absolute bg-black -z-20 w-screen h-screen'></div>
    </main>
  )
}
