<script>
	import '../app.pcss'
	import { signIn, signOut } from '@auth/sveltekit/client'
	import { page } from '$app/stores'
</script>

<div class="navbar bg-neutral text-neutral-content rounded-badge m-2 max-w-[98%] mx-auto">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl">Chatters</a>
	</div>
	<div class="flex-none gap-2">
		{#if $page.data.session?.user}
			<p>{$page.data.session?.user.name}</p>
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img alt="Tailwind CSS Navbar component" src={$page.data.session?.user.image} />
					</div>
				</div>
				<ul
					tabindex="-1"
					class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
				>
					<li>
						<a class="justify-between">
							Profile
							<span class="badge">New</span>
						</a>
					</li>
					<li><button on:click={signOut}>Logout</button></li>
				</ul>
			</div>
		{:else}
			<button class="btn btn-primary" on:click={() => signIn('github')}>Sign in</button>
		{/if}
	</div>
</div>

<slot />
