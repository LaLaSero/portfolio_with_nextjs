// components/Navbar.js
"use client"
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
return (
<>
	<style jsx>{`
	header {
		background: #fff; /* このコメントは大丈夫です */
	}
	nav {
		max-width: 1200px; /* ナビゲーションバーの最大幅 */
		margin: 0 auto; /* 中央寄せ */
		padding: 0 10px; /* 余白 */
		margin-top: 12px; /* 上部の余白 */
		margin-bottom: 12px; /* 下部の余白 */
	}
	ul {
		list-style: none; /* リストスタイルの消去 */
		padding: 0;
		margin: 0;
		display: flex; /* フレックスボックスを使用 */
		align-items: center; /* アイテムを中央揃えに */
	}
	li {
		margin-right: 25px; /* リンクの間隔 */
	}
	li:last-child {
		margin-right: 0; /* 最後のアイテムは間隔を取らない */
	}
	a.top-link {
		font-size: 22px; /* フォントサイズ */
		color: #333; /* テキストの色 */
		font-weight: italic; /* フォントの太さ */
		// text-decoration-color: blue; /* 下線の色 */
		text-decoration: none; /* 下線を消去 */
	}

	a.top-link:hover {
		text-decoration: underline; /* ホバー時に下線を表示 */
		text-decoration-color: blue;
	}
	
	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #f9f9f9;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		z-index: 1;
	}
	li:hover .dropdown-content {
		display: block; // ホバー時に表示
	}

	.dropdown-content a {
		color: black;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}
	.dropdown-content a:hover {
		background-color: #f1f1f1;
	}
	`}
	</style>
	<header>
	<nav>
		<ul>
		<li>
			<Link legacyBehavior href="/home"><a className="top-link">Home</a>
			</Link>
		</li>
		<li>
			<Link legacyBehavior href="#about-me"><a className="top-link">Profile</a></Link>
			<div className="dropdown-content">
			<Link legacyBehavior href="/about/team"><a>Team</a></Link>
			<Link legacyBehavior href="/about/company"><a>Company</a></Link>
			</div>
		</li>
		<li>
			<Link legacyBehavior href="/research"><a className="top-link">Works</a>
			</Link>
		</li>
		<li>
			<Link legacyBehavior href="/contact"><a className="top-link">Contact</a></Link>
			<div className="dropdown-content" >
			<Link legacyBehavior href="/contact/email">
				<a>
				<Image src="/images/email_logo.jpeg" alt="email" width={24} height={24}  style={{ verticalAlign: 'middle' }}/>
					e-mail
				</a>
			</Link>

			<Link legacyBehavior href="https://twitter.com/La_La_Sero">
				<a>
				<Image src="/images/X_logo.jpeg" alt="twitter" width={24} height={24}  style={{ verticalAlign: 'middle' }}/>
					SNS
				</a>
			</Link>

			<Link legacyBehavior href="https://github.com/LaLaSero/">
				<a>
				<Image src="/images/GitHub-Mark.png" alt="github" width={24} height={24}  style={{ verticalAlign: 'middle' }}/>
					Github
				</a>
			</Link>
			</div>
		</li>
		</ul>
	</nav>
	</header>
</>
);
};

export default Navbar;
