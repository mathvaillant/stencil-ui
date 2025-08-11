<template>
	<ui-xstack style="align-items: start; gap: 4px">
		<ui-sidebar :items="items" />
		<RouterView />
	</ui-xstack>
</template>

<script>
export default {
  computed: {
    items() {
      return [
        {
          label: "Home",
          icon: "menu",
          active: this.$route.path === "/",
          onClick: () => this.$router.push("/")
        },
        {
          label: "Dashboard",
          icon: "user",
          active: this.$route.path === "/dashboard",
          onClick: () => this.$router.push("/dashboard")
        }
      ]
    }
  }
}
</script>

