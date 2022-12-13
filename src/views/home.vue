<template>
  <section class="flex flex-col h-screen divide-y">
    <!-- top nav -->
    <section class="bg-white p-6 flex items-center">
      <div class="font-light text-3xl select-none">
        {{ systemTitle }}
      </div>
      <div class="grow"></div>
      <section class="flex gap-x-4">
        <!-- <div class="px-4 py-2 rounded text-white bg-indigo-500 hover:bg-indigo-400 hover:text-white hover:cursor-pointer"
        @click="login">
          登录
        </div> -->
        <div class="px-4 py-2 rounded text-indigo-800 bg-indigo-100 hover:text-indigo-500 hover:cursor-pointer" @click="loginOrRegister">登录/注册</div>
      </section>
    </section>
    <!-- main -->
    <section class="flex divide-x grow">
      <!-- left sidebar -->
      <section class="min-w-max sidebar grow-0 flex flex-col">
        <div
          v-for="nav in navs"
          :key="nav.label"
          class="sidebar-item flex py-4 px-6 text-xl font-light"
          :class="nav.id == activeNavId ? 'active' : ''"
          @click="goto(nav)"
        >
          <i :class="nav.icon"></i>
          <div class="ml-3">{{ nav.label }}</div>
        </div>
      </section>
      <!-- right -->
      <section class="grow">
        <router-view name="main" />
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: "Home",
  methods: {
    loginOrRegister() {
      this.$router.push({ name: 'Login' })
    },
    goto(nav) {
      this.activeNavId = nav.id;
      this.$router.push({ name: nav.routeName });
    },
  },
  data() {
    return {
      name: "john",
      systemTitle: "校园猫管理平台",
      activeNavId: 0,
      navs: [
        {
          id: 0,
          label: "CRUD",
          icon: "bi bi-database",
          routeName: "CRUD",
        },
        {
          id: 1,
          label: "关于",
          icon: "bi bi-info-circle",
          routeName: "About",
        },
      ],
    };
  },
};
</script>

<style lang="scss">

.sidebar-item {
  &.active {
    background-color: var(--indigo600);
    color: #fff;
  }
  &:hover {
    background-color: var(--indigo500);
    cursor: pointer;
    color: white;
  }
  &:active {
    background-color: var(--indigo600);
  }
  &:focus {
    background-color: var(--indigo600);
  }
}
</style>
