<template>
    <nav class="navBar">
        <div class="logo">LOGO</div>
        <ul class="itemsBox">
            <li class="navItems">Home</li>
            <li class="navItems">Contact Me</li>
            <li class="navItems">About</li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style scoped>
.navBar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    background: crimson;
}

.logo {
    transform: translate(-20%, 130%);
    color: white;
}

.itemsBox {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transform: translate(180%, -46%);
    width: 30%;
    height: 100%;
}

.navItems {
    list-style-type: none;
    color: white;
}
</style>
