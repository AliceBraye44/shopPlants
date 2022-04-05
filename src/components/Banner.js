import '../styles/Banner.css'

function Banner({ logo }) {
	return <div className='banner'>
        <img src={logo} alt='La maison jungle' className='logo' />
		<h1 className='title'>La maison jungle</h1>
    </div>
}

export default Banner