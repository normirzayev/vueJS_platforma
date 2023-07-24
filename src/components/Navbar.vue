<script  >
import { logo } from '../constants';
import { RouterLink, } from 'vue-router';

export default {
  data() {
    return {
      logo,
    }
  },
  methods: {
    handleClick() {
      return this.$router.push('/')
    }
  }
}

</script>
<template>
  <nav>
    <div class="logo" @click="handleClick">
      LO<span>GO</span>
    </div>
    <ul>
      <li>
        <RouterLink :to="{ name: 'login' }">
          login
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'register' }"> Register </RouterLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped >
.logo {
  font-size: 40px;
  font-weight: 500;
  color: red;
  user-select: none;
}

.logo span {
  color: blue;
  display: inline-block;
  transform-origin: top;
  transform: rotate(15deg) translate(-2px);
}

li {
  list-style: none;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid silver;
}

ul {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
}

a {
  text-decoration: none;
  text-transform: capitalize;
  font-size: 18px;
}
</style>