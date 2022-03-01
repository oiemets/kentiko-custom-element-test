import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
	return (
		<>
			<div>TEST CUSTOM COMPONENT</div>
			<Link href='pageone'>to page one</Link>
		</>
	);
};

export default Home;
