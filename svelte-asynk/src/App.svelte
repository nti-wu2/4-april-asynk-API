<script>

async function getData(){

	const url = 'https://jsonplaceholder.typicode.com/users';
	
	// hämta datan
	let resp = await fetch(url);
	
	// vänta in och konvertera datan från stream till JS
	let data = await resp.json();
	console.log(data);
	// returna datan
	return data;
}

</script>

<main>
{#await getData()}
	<p>Waiting for data...</p>
	{:then data}

		{#each data as user }

		<h2>{user.name} @ {user.company.name}</h2>
		<p>{user.email}</p>

		{/each}

{/await}
</main>

<style>
	main {
		color: red;
	}
</style>