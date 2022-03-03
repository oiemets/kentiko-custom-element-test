import { useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Script from 'next/script';

type IItem = {
	id: string;
	codename: string;
};

type IVariant = {
	id: string;
	codename: string;
};

type IContext = {
	projectId: string;
	item: IItem;
	variant: IVariant;
};

type ICustomElementConfig = {
	editorDefaultToPreview: boolean;
	inputsDefaultToPercent: boolean;
	colorPickerDefaultColors: string[];
};

type IAssetReference = {
	id: string;
};

type ISelectAssetConfig = {
	allowMultiple: boolean;
	fileType: 'all' | 'images';
};

type IAssetDetails = {
	id: string;
	descriptions: IAssetDescription[];
	fileName: string;
	imageHeight: number | null;
	imageWidth: number | null;
	name: string;
	size: number;
	thumbnailUrl: string;
	title: string;
	type: string;
	url: string;
};

type ILanguage = {
	id: string;
	codename: string;
};

type IAssetDescription = {
	language: ILanguage;
	description: string;
};

type CustomElementType = {
	value: string | null;
	disabled: boolean;
	config: ICustomElementConfig | null;
	init: (
		callback: (element: CustomElementType, context: IContext) => void
	) => void;
	setValue: (value: string) => void;
	setHeight: (value: number) => void;
	onDisabledChanged: (callback: (disabled: boolean) => void) => void;
	selectAssets: (config: ISelectAssetConfig) => Promise<IAssetReference[]>;
	getAssetDetails: (assetIds: string[]) => Promise<IAssetDetails[]>;
};

declare const CustomElement: CustomElementType;

const Home: NextPage = () => {
	useEffect(() => {
		CustomElement.init((element, context) => {
			console.log(element, context);
		});
	}, []);
	return (
		<>
			<Script
				src='https://app.kontent.ai/js-api/custom-element/v1/custom-element.min.js'
				strategy='beforeInteractive'
			/>

			<div>TEST CUSTOM COMPONENT</div>
			<Link href='/pageone'>to page one</Link>
		</>
	);
};

export default Home;
