const encoder = new TextEncoder();
const decoder = new TextDecoder('utf-8');
const exec = async (code: string) => {
	return new TextDecoder().decode(
		await Deno.run({
			cmd: code.split(' '),
			stdout: 'piped',
			stderr: 'piped',
		}).output()
	);
};
const edit = async (filePath: string) => {
	const text: string = decoder.decode(await Deno.readFile(filePath));

	const newText =
		'```ts\n' +
		text +
		'```\n\n' +
		`https://github.com/naticoo/examplebot/blob/main/${filePath.slice(
			Deno.realPathSync('./examplebot').length
		)}`
			.replace('//examplebot', '')
			.replace('main//', 'main/');
	const newFilePath = filePath
		.split('examplebot')[1]
		.slice(1)
		.replace('.ts', '.md');
	const data = encoder.encode(newText + '\n');
	console.log(newFilePath, filePath);
	await Deno.mkdir(
		`docs/examples/${newFilePath
			.split('/')
			.reverse()
			.slice(1)
			.reverse()
			.join('/')}`,
		{
			recursive: true,
		}
	);
	await Deno.writeFile(`docs/examples/${newFilePath}`, data, {
		append: false,
	});
};
const editAll = async (dirPath: string) => {
	dirPath = await Deno.realPath(dirPath);
	const entries = Deno.readDir(dirPath);
	for await (const entry of entries) {
		if (entry.isFile) {
			if (!entry.name.endsWith('.ts')) continue;
			await edit(`${dirPath}/${entry.name}`);
			continue;
		}

		await editAll(`${dirPath}/${entry.name}`);
	}
};
const getDocs = async () => {
	const data = await (
		await fetch(
			'https://gist.githubusercontent.com/SkyBlockDev/25f90a4b491cd19eddabeb2e1d9182da/raw/fd19c0facd762bc65d110c1c60ac317f7e9218ff/natico.json'
		)
	).json();
	let arr = ['Natico api reference', '---------------'];
	for (const item of data) {
		console.log(item.location.filename);
		const str = ` ${item.kind} ${item.name} [\[src\]](${item.location.filename}) `;
		arr.push(str);
	}
	await Deno.writeFile(`docs/api/index.md`, encoder.encode(arr.join('\n\n')), {
		append: false,
	});
};
const fetchUpdates = async () => {
	await exec('rm -rf docs/examples');
	await exec('git clone https://github.com/naticoo/examplebot');
	await editAll('examplebot');
	await getDocs();
};

fetchUpdates();
