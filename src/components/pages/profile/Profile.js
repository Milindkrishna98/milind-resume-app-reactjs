import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/milind.jpg';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='Milind krishna' />
					<Link className='btn-floating halfway-fab waves-effect waves-light red'>
						<i className='material-icons activator'>more_vert</i>
					</Link>
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						Milind Krishna
					</span>
					<p>A Wordpress Developer & Website Developer</p>
				</div>
				<div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						Follow Me
						<i className='material-icons right'>close</i>
					</span>
					<p className='flex-container'>
					<a href="https://www.linkedin.com/in/milindkrishna/" target="_blank" rel="noopener noreferrer"><i className='fab fa-linkedin grey-text text-darken-4 social_style'></i></a>
					<a href="https://mobile.twitter.com/Milindkrishna3" target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter grey-text text-darken-4 social_style'></i></a>
					<a href="mailto:milindkrishna69233@gmail.com" target="_blank" rel="noopener noreferrer"><i className='fab fa-google grey-text text-darken-4 social_style'></i></a>
					<a href="https://www.instagram.com/ran_some_ware/" target="_blank" rel="noopener noreferrer"><i className='fab fa-instagram grey-text text-darken-4 social_style'></i></a>
					<a href="https://github.com/Milindkrishna98" target="_blank" rel="noopener noreferrer"><i className='fab fa-github grey-text text-darken-4 social_style'></i></a>
					</p>
				</div>
			</div>
		</div>
	);
}
