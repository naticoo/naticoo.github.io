import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
	{
		title: 'Fast',
		Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
		description: <>Natico is designed to be fast and effiecent.</>,
	},
	{
		title: 'Flexible',
		Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
		description: (
			<>All natico modules can be extended to make them fir your needs.</>
		),
	},
	{
		title: 'Simple',
		Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
		description: <>Natico is a easy to use framework for discordeno</>,
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} alt={title} />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
