<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light border">
		<div class="container position-relative">
			<router-link to="/" class="navbar-brand" tag="a">
				<img
					:src="data.full_url"
					alt="..."
					class="logo"
				/>
			</router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div
				class="collapse navbar-collapse text-center"
				id="navbarSupportedContent"
			>
				<ul class="navbar-nav ml-auto">
					<router-link
						to="/profile"
						tag="li"
						class="nav-item"
					>
						<a
							href="javascript:;"
							class="text-decoration-none nav-link font-weight-bold"
							>PROFILE
						</a>
					</router-link>
					<li class="nav-item">
						<a
							href="javascript:;"
							class="text-decoration-none nav-link font-weight-bold"
							@click="logout$"
							>LOGOUT
							<i
								class="fas fa-sign-out-alt"
							></i
						></a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
import { userSettingService } from '../../services/user-setting/user-setting.service';
export default {
	components: {},
	data: () => {
		return {
			data: {},
		};
	},
	async mounted() {
		await this.init_logo({ paginate: 0, keys: 'logo' });
	},
	methods: {
		async logout$() {
			await this.$storage.remove('auth');
			await this.$router.push({ name: 'login' });
		},

		async init_logo(query) {
			let result = await userSettingService.list(query);

			if (result.data && result.data[0]) {
				this.data = result.data[0].value;
				console.log(this.data);
			}
		},
	},
};
</script>
<style lang="scss">
.logo {
	height: 50px;
}

.user-name {
	right: 0;
	transform: (0, 100%);
}
</style>
