import Link from 'next/link';

const Header = () => (
  <div>
  	<img src="#"></img>
  	<nav>
  		<ul>
  			<li>
			    <Link href="/">
			    	<a>Find a Pup</a>
			    </Link>
		    </li>
		    <li>
			    <Link href="/about">
			    	<a>About</a>
			    </Link>
		    </li>
    	</ul>
    </nav>
     <style jsx>{`
        div {
        	background-color: #4ABDAC;
        }
        
      `}</style>
  </div>

);

export default Header;