<nav class="nav-main">
    <slot/>
</nav>

<style>
    .nav-main {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #333;
        color: white;
        padding: 10px;
    }
</style>