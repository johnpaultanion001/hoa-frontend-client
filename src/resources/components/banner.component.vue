<template>
	<div
		class="jumbotron jumbotron-image h-50 vertical-center text-center rounded-0 my-0"
		:style="{ background: 'url(' + data.full_url + ') ' }"
	>
		<div class="container h-100">
			<div class="row align-items-center h-100">
				<div class="col-sm-12 mx-auto">
					<h1 class="display-5 font-weight-bold">
						{{ data.title }}
					</h1>
					<p>{{ data.description }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { userSettingService } from '../../services/user-setting/user-setting.service';
export default {
	name: 'banner.vue',
	data() {
		return {
			data: {},
			d: {
				full_url: './images/banner-placeholder.png',
				title: 'Welcome',
				description: null,
			},
		};
	},
	async mounted() {
		await this.init_banner({
			page_name: this.$route.meta.page,
			paginate: 0,
			keys: 'banner',
		});
	},
	methods: {
		async init_banner(query) {
			let result = await userSettingService.list(query);
			if (result.data && result.data[0]) {
				console.log(result.data[0].value);
				this.data = result.data[0].value;
			} else {
				this.data = this.d;
			}
		},
	},
	watch: {
		$route(to, from) {
			this.init_banner({
				page_name: this.$route.meta.page,
				paginate: 0,
				keys: 'banner',
			});
		},
	},
};
</script>

<style scoped lang="scss">
.jumbotron-image {
	background-position: center center !important;
	background-repeat: no-repeat !important;
	background-size: cover !important;
}
</style>
